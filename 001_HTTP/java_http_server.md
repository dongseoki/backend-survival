
# 키워드
- Java HTTP Server
- Java NIO
- Java Lambda expression(람다식)
    - Java Functional interface(함수형 인터페이스)

## java http server
* 자바에서 기본 지원하는 http 서버.
* 고성능이고, nio이다. 논블록킹이라, 다른 작업이 블록되지 않게끔 기본 처리가능.

## nio
* non blocking io의 약자.
* 논 블록킹은, 함수 호출시, 그 함수의 처리를 기다리지 않고, 호출을 한 함수는 자신의 로직을 수행한다.

## java Lambda expression
* 람다 표현식은, 인터페이스에, 추상메서드가 한개만있을때 사용 가능하다.
* () ->{}
* 위의 표현 형태를 가진다.
### java functional interface
* 함수형 인터페이스는...
    * 함수형 인터페이스(Functional interface)는 1개의 추상 메소드를 갖고 있는 인터페이스를 말합니다. Single Abstract Method(SAM)라고 불리기도 합니다.



## 실습 진행

* run, 실습 진행

* exchange.url ...

* 실행...
### request 받자!
* 14분까지 request를 출력중..
* header 해보고, 바디 한번 슥 보고.
* response reader하는 중.

* http 명령어를 쓰면 바디를 쉽게 줄수 있다!

### reponse 보내자!
```java

```
* 실무에선 다 메서드로 빼주긴 해야함..!
* 바디 끝에 개행 문자 ! 잊지말자!

### 다른 요청도 받자, hi!
* /hi
* hi world!
* 오른쪽 버튼 ex

### 리팩토링도 간단히 해봅시다!
* extract method 하자!
* display request, send response

### 다음에는 더 쉬운거, 스프링으로 한다!

