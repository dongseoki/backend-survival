# 키워드

- N + 1 problem
- DDD의 Aggregate
- `CascaseType.All`
- `orpahanRemoval`
- Event Sourcing
- JPA 어노테이션
  - @OneToMany
  - @JoinColumn

# 내용

- Relationship Mapping

  - 데이터 모델 Entity의 관계를 객체 참조로 간단히 활용할 수 있게 해준다

- 여기서는 Person이 Item을 “소유”하고, Item을 개별적으로 접근하는 일은 절대 없도록 하자. DDD에선 이런 걸 Aggregate란 개념으로 다룬다

- N + 1 problem : 1대 N관계에 있는 팀과 멤버가 있을 때, N개의 데이터로 조회된 팀의 멤버 변수를 보려고 할때 N번의 쿼리가 더 나가는 현상.

- 쿼리 1번으로 N건을 가져왔는데, 관련 컬럼을 얻기 위해 쿼리를 N번 추가 수행하는 문제
- DDD의 Aggregate :

  - 어그리게이트는 도메인 중심 디자인의 패턴입니다. DDD 집계는 단일 단위로 취급할 수 있는 도메인 개체의 클러스터입니다. 예를 들어 주문과 해당 라인 항목은 별도의 개체이지만, 주문(및 해당 라인 항목)을 단일 집계로 취급하는 것이 유용합니다.
  - 애그리거트(Aggregate)는 한마디로 서로 관련이 있는 도메인 모델들의 집합이다.

- `CascaseType.All` :
  - 부모에서 자식으로 모든 명령을 전파한다.
- `orpahanRemoval`
  - 데이터베이스에서 고아 객체를 지우기 위해 사용한다.
- 부모 엔티티 삭제

  - CascadeType.REMOVE와 orphanRemoval = true는 부모 엔티티를 삭제하면 자식 엔티티도 삭제한다.
    부모 엔티티에서 자식 엔티티 제거
  - CascadeType.REMOVE는 자식 엔티티가 그대로 남아있는 반면, orphanRemoval = true는 자식 엔티티를 제거한다.

- Event Sourcing :

  - 이벤트 소싱이란 application의 모든 상태를 일으키는 이벤트를 순서에 맞게 저장하여 status를 만들어내는 방법

- JPA 어노테이션
  - @OneToMany : 1대 다 관계를 나타낼때 사용함.
  - @JoinColumn : 컬럼을 조인 컬럼으로 마킹합니다. 이것은 엔티티 연합이나 콜렉션에 사용됩니다.
- ex)

```java
@Entity
public class Office {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
        @JoinColumn(name="ADDR_ID", referencedColumnName="ID"),
        @JoinColumn(name="ADDR_ZIP", referencedColumnName="ZIP")
    })
    private Address address;
}
```

# 필기
