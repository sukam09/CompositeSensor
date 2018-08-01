이 코드는 성균관대학교 산학협력프로젝트 SK텔레시스 팀의 2차 산학과제입니다.
이 프로젝트는 복합 센서의 제어 Prototype을 통한 모니터링 시스템을 구현하는 것을 목적으로 하고 있습니다.

프로젝트의 과정은 다음과 같습니다.

1. 온도를 아두이노 센서를 이용하여 측정한 다음 시리얼 포트를 통해 전송합니다.
2. 시리얼 포트에 전송된 값을 읽어 웹 페이지나 안드로이드 앱을 이용해서 1초 간격으로 Time별 온도 데이터를 표시합니다(Min, Max 또는 Average 등의 통계를 사용합니다).
3. 사용자가 원하는 범위를 지정할 수 있게 하고 이를 벗어날 경우 사용자에게 범위를 벗어났음을 알리는 푸시 알림을 띄웁니다. 이 때, 사용자가 에어컨 가동을 원할 경우 에어컨을 가동하고 이를 나타내는 Action을 추가합니다.
4. 웹 페이지에 로그인할 수 있는 계정을 두어 관리자 계정의 경우 직접 관여할 수 있도록, 일반 계정의 경우 조회만 가능하게끔 합니다.

modified 1 August 2018
by Lee Seung Won

ⓒ 2018 SKKU SK Telesys Team All Rights Reserved.
