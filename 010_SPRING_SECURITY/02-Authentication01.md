# 키워드

## 학습 키워드

- Identifier(우리나라의 ID랑은 다릅니다)
- **[PostgreSQL](https://www.postgresql.org/) (MySQL, MariaDB와 두드러지는 차별점)**
- OAuth 2.0
- Bearer Token
- SecurityFilterChain
- `@Configuration`
- `@EnableWebSecurity`
- Filter vs OncePerRequestFilter
- FilterChain
- SecurityContext

# 내용

# 필기

- Username이 널리쓰이는 표현이다.
- 실습 2분 38초.
  - Devtools cnrk
  - jpa 추가
  - postgre
  - Validation 도 추가
  - Spring Security 추가.

```sh
cd java
test
```

- actions on save
  - go.

```java
dataSource...
```

- application.yml에 추가중..
- 비어 있는것이 있고, 접속을 누른다.

```java
@RestController
public class WelocomController {
  @GetMapping
  public String home(){
    return "Hello, world!";
  }
//  Run server
//  bootRun
}
 //http -a user:xxx localhostL:8080
```

```yml
name: word
password: password
# 이것도 됨.
```

- 기본인증을 AccessToken으로 바꾸려면 어떻게해야하나?
- 다음 시간에~

## OncePerRequestFilter

- 바로 실습
- 저거 쓰면, 필터 구현할때랑 다르게 오버라이딩 1개만 하면 됨.
- 인증 되었음을 알리는 방법은 무엇일까?
- 인증을 이렇게 할수 있다..!
- 너무 여러 일을 한다.
- 분리를 해줍시다!!
- AccessTokenService를 만들 예정입니다!

## AccessTokenService

- Application layer는 아님.
- 일단 간단하게 진행했음.
