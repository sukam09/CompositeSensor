const express=require('express');
const http=require('http');
const soocketIo=require('socket.io');
const axios=require('axios');

const port=process.env.PORT||4001;
const index=require('./routes/index');

const app=express();
app.use(index);

const server=http.createServer(app);

const io=socketIo(server);

const getApiAndEmit='TODO'

io.on('connection', socket=>{
	console.log('New client connected'), setInterval(
		()=>getApiAndEmit(socket),
		10000
	);
	socket.on('disconenct', ()=>console.log('Client disconnected'));
});

let interval;

io.on('connection', socket=>{
	console.log('New client connected');
	if(interval){
		clearInterval(interval);
	}
	interval=setInterval(()=>getApiAndEmit(socket), 10000);
	socket.on('disconnect', ()=>{
		console.log('Client disconnected');
	});
});

server.listen(port, ()=>console.log(`Listening on port ${port}`));

const getApiAndEmit=async socket=>{
	try{
		const res=await axios.get(
			'https://api.darksky.net/forecast/PUT_YOU'
		);
		socket.emit()
	}
}