# 키워드

## 학습 키워드

- 인증과 인가
- HTTP Stateless (1주차 복습)
- Cookie vs localStorage
- Interceptor vs Filter in Spring
- 암호화와 복호화
  - 단방향 암호화
  - Hashing algorithm
  - Salt가 필요한 이유

# 내용

## 인증과 인가

- 인증
  - 나는 누구인가?라는 질문에 답하는 것.
  - 증명의 문제
- 인가
  - 허가의 문제
  - 리소스에 대한 접근 권한 및 정책을 지정하는 기능
- Spring과 함께
  - MVC로 보안 설정하기
    - HandlerInterceptor로 우리가 원하는 인증 인가 확인 코드 실행
      - HandlerInterceptor : 공통된 전처리 동작을 적용하는 데 사용되는 인터페이스.
  - Security 사용
    - SecurityFilterChain을 통해 우리가 원하는 코드 실행 가능
    - SecurityFilter Chain : SecurityFilterChain은 현재 요청에 대해 호출해야 하는 Spring 보안 필터 인스턴스를 결정하기 위해 FilterChainProxy에서 사용됩니다.
- Http Stateless
  - http가 상태정보를 가지지 않는 다는 것.
- Cookie vs localStorage
  - Cookie : 유효기간이 있을 수있는 브라우저에서 저장하는 것. 사용자 요청시에 함께 보내지는 것이 특징임.
  - LocalStorage : 유효기간이 없는 브라우저의 저장공간. 유효 기간이 없고, Cookie보다 공간이 훨씬 큼.
- Interceptor vs Filter
  - Dispatcher Servlet을 기준으로 위치가 아래와 같이 다름.
  - 클라이언트 - Filter - DispatcherServlet - Interceptor - 서버
- 암호화와 복호화
  - 단방향 암호화 : 복호화가 불가능한 암호화 방식을 일컫음.
  - Hashing algorithm : 단방향 암호화 방식중 1개. 가변길이의 문자를 고정길이의 문자로 변환시키는 방식.
  - Salt가 필요한 이유 : 암호의 유추를 어렵게 하기위해 하는 기법.
    - Salt : 단방향 암호화 방식에서 추가 입력으로 사용되는 랜덤 데이터.
      - 레인보우 테이블 같은 미리계산된 테이블을 사용하는 공격을 방어한다.

# 필기

애플리케이션 수준의 보안.
저희는 3가지를 집중적으로 다룰 예정입니다.

1. 인증,
2. 인가,
3. 암호화.

- 인증 : 증명에 대한것.
  - HTTP 입장에서는 stateless라 매 요청에 대해서 뭔가 확인이 필요하다.
  - identification과 관련된 것이다.
- 인가 : 관리자가 아니면 접근을 막자.
- 아 이부분을 이야기하는 구나.
- HandlerInterceptor 뒤에 FilterChainProxy에서부터 세큐리티 필터 작업이 이루어진다.
- 암호화 vs 복호화.
- 암호화 종류
  - 양방향 암호화
  - 단방향 암호화
- 서비스의 사용자 암호 처리 과정에 단방향 암호화를 사용한다.
- MD5 : 간단한 암호화를 위해서는 쓰지만, 제대로는 못쓰더라.

- 요새 쓸만한 암호화 기법은? : Argon2, Balloon_hashing
- Argon2 를 써보자.
