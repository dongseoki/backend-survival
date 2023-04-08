# 키워드

## 학습 키워드

- Hexagonal Architecture
- POJO
- [\*\*조영호님의 “우아한객체지향” 세미나](https://youtu.be/dJ5C4qRqAgA) 를 보고 노트에 정리(무조건 보셔야 합니다)\*\*

# 내용

## Hexagonal Architecture

- https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)
- 결합도가 낮은 컴포넌트를 만드는것을 목표로 하는 디자인 패턴.
- 이 컴포넌트 들은 포트와 어댑터란 수단으로 쉽게 연결됨.
- 이것은 모든 레벨에서 컴포넌트가 교환이 가능하며, 테스트 자동화를 촉진한다.
- 핵사고널 아키넥쳐는 상호교환가능한 결합력이 낮은 컴포넌트들로 하나의 시스템을 나눕니다.
- 각각의 컴포넌트는 다른 컴포넌트들과 노출된 포트(Port)들로 연결됩니다.
- 어댑터는(Adapter) 컴포넌트와 외부 세계를 연결하는 접찾제입니다.
  - 외부 세계와 애플리케이션 구성 요소 내부의 요구 사항을 나타내는 포트 간의 교환을 맞춤화합니다.
  - 하나의 포트에 여러 개의 어댑터가 있을 수 있습니다.
- 흔히 1 → 2로 연결할 때 사용하는 port를 Incoming Port라고 부르고, 2 → 3으로 연결할 때 사용하는 port는 Outgoing Port라고 부른다.
- ex:

  - Discounter 예제에서 볼 수 있는 것처럼, 이게 전부다. 만약 굳이 Port가 명확히 드러나길 원한다면 Application에 대한 Interface를 따로 마련할 수 있다.

  ```java
  public interface NameContainer {
      String getName();
  }

  public interface Application implements NameContainer {
      public String getName() {
          // TODO: 데이터를 DB에서 얻어야 한다.
          return "Tester";
      }
  }
  ```

- 여기서 한 번 더 Domain Layer를 분리해 Application Layer는 Port에 집중하고, Domain Layer를 Mocking 같은 거 없이 POJO로 테스트하기 쉽고 재사용하기 좋은 객체의 세계로 만든다면 단일 프로그램의 아키텍처 이야기는 더이상 하지 않아도 충분하다.

## POJO

- Plain Old Java Object 의 준말
- 오래된 방식의 간단한 오브젝트
- 특정 환경에 기술에 종속적이지 않은 순수한 자바 코드로 이루어짐.
  - 종속적이라면 유지보수에 어려움이 발생하며, 확장도 어려움.
- 특정 기술을 도입하고 싶다면
  - 자바 제공 표준을 써라!(ex: interface

## PSA

- Portable Service Abstraction
- 추상화 계층을 사용하여 어떤 기술을 내부에 숨기고 개발자에게 편의성을 제공해주는 것이 서비스 추상화(Service Abstraction)
  - ex) Spring의 @Transactional은 각 TransactionManager를 각각 구현하고 있는 것이 아니라 최상위 PlatformTransactionManager를 이용하고 필요한 TransactionManager를 DI로 주입받아 사용하는구나라는 사실.
  - https://sabarada.tistory.com/127

## 조영호님 세미나

- [\*\*조영호님의 “우아한객체지향” 세미나](https://youtu.be/dJ5C4qRqAgA) 를 보고 노트에 정리(무조건 보셔야 합니다)\*\*
- 다음 노트 참고.

# 필기

- layered Architecture 전통적 3계층을 봅시다!
- 보면은 Service Domain Objects

그 육각형 도형이 중요하다!!

- 1 UI
- 2 APP
- 3 DB
  1과 3은 뭐가 뭔지 중요하지 않다.
- Hexagon Architecture 은?

  - 공간을 줄게!!
  - 포트랑 자리좀 줄게!

- 애플리케이션 입장에서는 화면에 출력하나 DB에 출력하는 것이나 뭐가 다르냐 라는 입장이란 것.
- 아 이미 우리는 이 아키턱쳐를 쓰고 있다.
- 포트, 어댑터

  - ex: A타입 포트에 어떤 어댑터가 연결되든 우리가 알바냐!!

- 1->2 Incoming port
- 2->3 Outcoming port
- NameContainer, EtcContainer

  - 인터페이스 분리.
  - ISP라는 거죠.

- 더 편하게 테스트 하고싶다..
  - 도메인 모델을 분리하면 테스트가 쉬워집니다.
- 배우면 어려운 문제가 쉬워진다.

- GOF 디자인 패턴. 강추한다.

  - 1장에서 객체

- 시그니처
  - 자바 프로그래밍 언어에서 메서드 시그니처는 메서드 명과 파라미터의 순서, 타입, 개수를 의미한다
