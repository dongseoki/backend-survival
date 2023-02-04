# java server socket
* 자바에는 서버 소켓이란 것이 별도로 있음.
* 그래서, 서버에서는 저것을 써서 리슨하다가, 요청 받아들이면, 다른 소켓에 넘기는 식으로 처리 가능.

# blocking vs non-blocking
* 블록 막다 라는 뜻
* 지금 실습상 구현은 하나의 요청을 처리 도중 다른 요청이 들어오면, 블록킹 됨.
* https://musma.github.io/2019/04/17/blocking-and-synchronous.html
* 호출된 함수가 자신이 할 일을 모두 마칠 때까지 제어권을 계속 가지고서 호출한 함수에게 바로 돌려주지 않으면 Block
* 호출된 함수가 자신이 할 일을 채 마치지 않았더라도 바로 제어권을 건네주어(return) 호출한 함수가 다른 일을 진행할 수 있도록 해주면 Non-block