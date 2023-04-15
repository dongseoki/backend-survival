# 키워드

## 학습 키워드

- CSRF(Cross Site Request Forgery**_)_**
- 자바 Date vs LocalDateTime
- Epoch Time
- Spring Security PasswordEncoder
- Argon2

# 내용

- CSRF(Cross Site Request Forgery**_)_**
  - 크로스 사이트 요청 위조는 웹 애플리케이션이 신뢰하는 사용자로부터 무단 명령(인간은 원치 않았는데, 해커가 내 브라우저로 명령을 보낸거)이 전송되는 현상임.
- 자바 Date vs LocalDateTime
  - Date
    - 밀리초 단위로 특정 시점을 나타내는 클래스
    - Since JDK 1.0
  - LocalDateTime
    - ISO 8601 캘린더 시스템의 타임존 없는 날짜 시간 값을 의미.
    - 비교적 최근에 나옴.
    - 최근에 나온거 쓰자.
    - Since JDK 1.8
- Epoch Time
  - 1970년 1월 1일 부터 1초단위로 측정한 값.
- Spring Security PasswordEncoder
  - 스프링 세큐리티는 패스워드 인코더와의 통합을 통해, 패스워드를 저장하는 것을 지원함.
  - 개발자는 이걸 커스텀하게 구현해서 PasswordEncoder빈으로 노출시킬수 있음.
- Argon2
  - 2015 패스워드 대회에서 우승한 키 유도 함수.

# 필기

## Login

- table user, access_token
- SessionControllerTest

```java
    http.csrf().disable();
    기본적으로 스프링이 토큰을 사용하는데, 우리는 사용을 하지 않음.
```

- we will make login service.
- we will use record
- if login fail, 우리는 로그인 실패로 처리하려 합니다~!
- 다음에는 UserDetails를 이용할 것입니다. 이번에만 간단히 로그인 해본것임.

- infrastructor
  - @Component
  - UserDetailsDao
  - orElseThrow 이용중..
- Dao를 목빈으로 하는 이유? -> DB를 안거치기 위해서임.
- E2E테스트 할때는 아래처럼 하면 됨.
  - @SpringBootTest
  - @AutoMockMvc?
- 뭔가 길다...
- 최종 코드만 올라가 있긴 하다..
- 저장된 AccessToken 인증 전까지 진행중.
- http POST localhost:8080/session \
  - username
- DB에도 잘 들어갑니다~!
- 로그인한것을 쓰는 것을 다음 강의에 해보겠습니다-!!

## 저장된 AccessToken으로 인증

- 이제 디비에서 가져오자~!

```sh
http -a <username>:<password> localhost:8080
http -A bearer -a <accessToken> localhost:8080

```

## Logout

## 패스워드 암호화
