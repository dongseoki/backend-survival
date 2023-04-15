# 키워드

# 내용

# 필기

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
