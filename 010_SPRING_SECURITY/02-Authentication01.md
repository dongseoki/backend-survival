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

- Identifier(우리나라의 ID랑은 다릅니다)
  - 식별자를 의미한다.
  - 유일한 객체나, 유일한 클래스를 식별하는데 사용되는 이름.
- **[PostgreSQL](https://www.postgresql.org/) (MySQL, MariaDB와 두드러지는 차별점)**

  - PostgreSQL의 장점 : 복잡한 쿼리와 대규모 데이터베이스를 다룰 수 있는 기능이 풍부한 데이터베이스가 필요할때 유리함.
  - MySQL의 장점 : 설치와 관리가 비교적 쉽고, 빠르고, 안정적이며, 파악이 어렵지 않은 간단한 데이터베이스가 필요할 때 유리함.

- OAuth 2.0

  - 인증을 위한 업계 표준 프로토콜.특정 인증 흐름을 제공하면서 클라이언트 개발자의 단순성에 중점을 둡니다.
  - Third-Party 프로그램에게 리소스 소유자를 대신하여 리소스 서버에서 제공하는 자원에 대한 접근 권한을 위임하는 방식을 제공합니다.
  - 구글, 페이스북, 카카오, 네이버 등에서 제공하는 간편 로그인 기능도 OAuth2 프로토콜 기반의 사용자 인증 기능을 제공하고 있다.

- Bearer Token
  - 한글로 해석하면 무기명 토큰
  - Oauth 2.0에서 주로 사용되는 액세스토큰 유형임.a
- SecurityFilterChain
  - SecurityFilter Chain : SecurityFilterChain은 현재 요청에 대해 호출해야 하는 Spring 보안 필터 인스턴스를 결정하기 위해 FilterChainProxy에서 사용됩니다.
- `@Configuration`
  - 설정시 사용하는 어노테이션. 여기 밑에 있는 bean 어노테이션이 붙은 것들을 읽어서 빈으로 등록한다.
  - 스프링컨테이너에서 처리되어야하는 @Bean 메서드들이 선언되어있음을 클래스에 명시하는 것.
- `@EnableWebSecurity`
  - SpringSecurity 구성을 정의하는 클래스임을 나타내기위해 사용하는 어노테이션.
- Filter vs OncePerRequestFilter
  - Filter는 더 추상적인 존재. 이를 구현하면 3개나 오버라이딩 해야하는데, OncePerRequestFilter는 1개만 구현하면 된다.
  - Filter - 필터는 리소스(서블릿 또는 정적 콘텐츠)에 대한 요청이나 리소스로부터의 응답 또는 둘 다에 대해 필터링 작업을 수행하는 객체입니다. 필터는 doFilter 메서드에서 필터링을 수행합니다. 모든 필터는 초기화 매개변수, 예를 들어 필터링 작업에 필요한 리소스를 로드하는 데 사용할 수 있는 ServletContext에 대한 참조를 가져올 수 있는 FilterConfig 객체에 액세스할 수 있습니다.
    필터는 웹 애플리케이션의 배포 설명자에서 구성됩니다. - 그리고 인터페이스이다.
  - OncePerRequestFilter
    - 서블릿 컨테이너에서 요청 발송당 단일 실행을 보장하는 것을 목표로 하는 필터 기본 클래스입니다. doFilter를 제공합니다
    - HttpServletRequest 및 HttpServletResponse 인수가 있는 내부 메서드입니다.
- FilterChain
  - Filter들이 Chain의 형태로 묶여있는 것.
  - 필터체인은 서블릿 컨테이너가 개발자에게 제공하는 객체로, 리소스에 대한 필터링된 요청의 호출 체인에 대한 보기를 제공합니다. 필터는 필터체인을 사용하여 체인의 다음 필터를 호출하거나, 호출하는 필터가 체인의 마지막 필터인 경우 체인의 끝에 있는 리소스를 호출합니다.
- SecurityContext
  - 보안의 문맥. 여기서는 인증된 사용자가 저장된다.
  - 현재 실행 스레드와 관련된 최소 보안 정보를 정의하는 인터페이스입니다. 보안 컨텍스트는 SecurityContextHolder에 저장됩니다.
- Authentication
  - `Authentication` 객체는 Principal, Credentials, Authorities로 구성되는데, 일반적으론 Principal로 사용자를 지정하고, Authorities로 권한(을 묘사하는 역할)을 지정한다.

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
