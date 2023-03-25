# 키워드

## 학습 키워드

- 전술적 설계 (Tactical Design)
- 엔티티 (Entity) vs 일반적으로 이야기하는 개체 (Entity)
- 값 객체 (Value Object, VO)
- 동일성(Identity)과 동등성(Equality)

# 내용

- 전술적 설계 (Tactical Design)
  - 당신의 도메인을 구축하는 데 사용되는 기술적 자원의 집합. 이것들은 단일 Bounded Context에 적용되어야한다.
  - https://thedomaindrivendesign.io/what-is-tactical-design/
- 엔티티 (Entity) vs 일반적으로 이야기하는 개체 (Entity)
  - DDD에서의 Entity : 식별자(Identifier)가 존재하고, 이를 통해 동일성(Identity)을 확인한다면 Entity
  - 일반적으로 이야기하는 개체 (Entity) : 뚜렷하고, 독립적으로 존재하는 무언가.
- 값 객체 (Value Object, VO)
  - 값이 객체. 연속성과 식별성이 중요하지 않음. 값이, 속성이 같다면 동일하다라고 볼수 있는 객체.
  - ex) 돈.
- 동일성(Identity)과 동등성(Equality)
  - Identity : 사람이나 사물을 고유하게 식별하는 것. 나이를 먹어도 같은 사람임. 시간에 따라 그 것이 변하지 않음.
  - Equality : 두객체가 같다라는 것을 의미한다. 그 개체만 보면 되며, 추가 정보가 필요없다.

# 필기

DDD Lite. Model Driven design

전략적설계는 우리가 다루기에 너무 크다.

전술적 설계.

3분 30초 까지 진행함.

식별성이 중요하지 않은 데이터도 있음. 값 객체.
Value Object.

우리가 어떤 비즈니스 도메인인지에 따라서
VO의 의미가 달라진다.
속성을 통해서 동등하다를 판단한다.

- 예측 가능성을 높이고, 혼란을 막기위해서 불변객체로 만듭니다.

  - final 을 써야해야합니다.
  - record라는 것이 있습니다.
  - 하하.

- JPA 랑 java record는 같이 쓰기 어려웠다.

- record를 곧 spring 이 지원할것 같다. 좀만 더 기다려보자..!
