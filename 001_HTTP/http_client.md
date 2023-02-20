# 키워드 먼저

- TCP/IP 통신
- TCP와 UDP
- Socket과 Socket API 구분
- URI와 URL
- 호스트(host)
  - IP 주소
  - Domain name
  - DNS
- 포트(port)
- path(경로)
- Java text blocks
- Java InputStream과 OutputStream
- Java try-with-resources

# 시작!

## TCP/IP 통신

- https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C_%EC%8A%A4%EC%9C%84%ED%8A%B8
- 풀네임 따로 있는데, TCP, IP를 하도 많이 써서 이렇게 부름
- TCP IP를 기반으로 한다!

전송 계층을 좀 보까~?

## TCP와 UDP

- 전자 : 전달 및 순서를 보장한다.
- 후자 : 둘다 보장 안해.

## 소켓과 소켓 api의 구분

소켓!
소켓 API를 구분하자!

소켓 : 프로세스간 통신의 종착점.
소켓 API는 버클리 소켓을 많이 쓰더라

기본적으로 파일과 유사하게 다루더라.

- 자바8에 도입된 stream API가 아님.

TCP 통신 순서가 어떻게 될까?

TCP 통신 순서

1. 서버는 접속 요청을 받기 위한 소켓을 연다.
2. 클라이언트는 소켓을 만들고, 서버에 접속을 요청
3. 서버는 접속 요청을 받아서, 뭔가를 하고
4. 소켓을 통해서 서로 데이터를 주고 받더라.
5. 통신을 마치면 소켓을 닫는다

## 학습 실습!

- 터미널에서 하는 것을 선호해요 전 ㅎㅎ
  저는 그냥 여기서 만든다.
- gradle init
- 2
- 3
- 1
- 1
- Junit Jupiter
- client
- com.astudio.client

- font size
- general

선호
action code

- reformat
- import 등...

gradle 눌러서
run application
gradle

- ./gradlew run

- Run application
- Run 이란 태스크.

- gradle을 더 선호하기도 합니다.

- 요청을 해보조!

- 요청 메세지를 만들거다~!

- String message =

- Output Stream을 얻어서 쓸 수 있다.
- Bytearray로 보낼 수 있다.

- 가비지 컬렉터가 클로즈 해주술 있긴 한데, 언제 해줄줄 알고!

## URI와 URL

- URL : 전체 경로,
- URI : 스키마 도메인, 포트 뒤 에 있는 부분 중에서 도메인, 포트, 뒤 리소스경로를 나타낸다.

## 호스트

- ip 주소 : 32비트 주소.
- 도메인 네임 : 아이피 주소 대신 사람이 읽기 쉬운것
- DNS : 프로토콜이나, 도메인 네임 서버 자체를 의미. 이것에 의해 ip를 받을 수 있음.

## path

- ??

## java text blocks

- 자바 12버전 부터인가 """ 이거 이렇게 세개 써서, 개행을 \n이 아니라, 실제 코드상 줄바꿈으로 처리 가능

## java input stream, output stream

- 읽을때 쓰는 스트림, 쓸때 쓰는 스트림.
- 소켓 다룰 때 썼었음.
- reader, writer로 쓰면 더 편리함.

## try with resource

- 자원을 안전하게 닫음.
- closable을 구현했을 경우 사용 가능하다.
