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
