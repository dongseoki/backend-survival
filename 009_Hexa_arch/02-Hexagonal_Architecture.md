# 키워드

## 학습 키워드

- Hexagonal Architecture
- POJO
- [\*\*조영호님의 “우아한객체지향” 세미나](https://youtu.be/dJ5C4qRqAgA) 를 보고 노트에 정리(무조건 보셔야 합니다)\*\*

# 내용

- Hexagonal Architecture
- POJO
- [\*\*조영호님의 “우아한객체지향” 세미나](https://youtu.be/dJ5C4qRqAgA) 를 보고 노트에 정리(무조건 보셔야 합니다)\*\*

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
- 아 이미 하고 있는 거 아니냐?
- 또 그림 엑스 그림.

  - 아 하고 있다. 우리는 이미.

- 포트, 어댑터

  - ex) A타입 포트에 어떤 어댑터가 연결되든 우리가 알바냐!!

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
- 서브타입, 슈퍼타입
- 다형성이라고 한다.
- 엄청 중요하다.
- 보면 볼수록 중요한 것들을 발견할 것입니다.

- 프론트엔드 테스트 코드 너무 어렵다. TDD 어려워..

- 객체지향 을 학습해보는 것은 어떠할까?
