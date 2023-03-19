# 키워드

- Aggregate Mapping
- Value Object
- JPA 어노테이션
  - @Entity
  - @Table
  - @Id
  - @Embeddable
  - @Embedded

# 내용

- Embeddable
  - OOP에선 의미가 드러나지 않는 Primitive Type 대신 Value Object를 적극 활용하는 걸 권하는데, JPA에선 Aggregate Mapping을 통해 이를 지원할 수 있다.
- Congfiguring an Aggregate Mapping

  - 집계 매핑을 사용하면 소유 엔티티의 데이터 멤버를 소유 엔티티의 기본 데이터베이스 테이블에 있는 필드와 연결할 수 있습니다.
  - ex) @Embedded 사용측
  - ex) @Embeddable 정의측.

- JPA 어노테이션
  - @Entity : 테이블에 연결할 객체를 지정.
  - @Table : 테이블 명을 커스텀하게 조정할수 있다.
  - @Id : 프라이머리 키를 지정한다.
  - @Embeddable : aggregation mapping을 정의하는 부에서 사용.
  - @Embedded : aggregation mapping을 사용하는 측에서 적용.

# 필기

- Aggregate Mapping이다.
- OOP : primitive Type 대신 Value Object를 적극 활용하는 것을 권장한다.
  - 책임이 분리된다.
  - age 타입. 단순히 인트 타입으로 한다면 음수도 들어갈수 있지 않은가??
- 타입이 들어나게 합시다.
  - Gender를 만드시죠!!
    3분 7초 Embeddable 쓰고 있음.

Person toString 추가합시다.

Gender에도 Tostring해요.

얻을 때도 ㅡ

Equals와 해쉬코드 까지 만듭시다.
9분45초 Age 부분 하는 중.

- value Object의 공통점이 보이나요???

  - 보일거라 믿습니다. good.

- 계속 뭔가 문제도 생기고...
  나눠서 처리하는 것을 알아봤습니다.
