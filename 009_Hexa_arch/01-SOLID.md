# 키워드

## 학습 키워드

- SOLID (객체 지향 설계)
  - SRP (Single Responsibility Principle, 단일 책임 원칙)
  - OCP (Open-Closed Principle, 개방-폐쇄 원칙)
  - LSP (Liskov Substitution Principle, 리스코프 치환 원칙)
  - ISP (Interface Segregation Principle, 인터페이스 분리 원칙)
  - DIP (Dependency Inversion Principle, 의존관계 역전 원칙)

# 내용

SOLID : 개발시 지켜야할 5가지 객체지향 설계 원칙

![](2023-04-03-20-20-48.png)

## SRP (Single Responsibility Principle, 단일 책임 원칙)

- 단일 책임을 갖도록 설계하자!
  - ex: CartRepository를 추출/분리함
    - SQL변경되어도, dbms 바꿔도, 그 위 상위 서비스는 수정 안해도됨.

## OCP (Open-Closed Principle, 개방-폐쇄 원칙)

- “소프트웨어 개체(클래스, 모듈, 함수 등)는 확장에 대해 열려 있어야 하고, 수정에 대해서는 닫혀 있어야 한다.”
  - 인터페이스를 통한 추상화를 잘 한다면 확장은 구현체로 하고, 그렇기 때문에 기존의 코드를 수정할 일이 없도록 된다는 뜻.(물론 항상 그렇지는 않을듯. 요구사항이 변할 수도 ㅇ.있으니)

## LSP (Liskov Substitution Principle, 리스코프 치환 원칙)

- “서브타입(subtype)은 그것의 기반 타입(base type)으로 치환 가능해야 한다.”
- LSP를 지키고 있는지 파악하는 방법 중 하나는 상속이 “행위” 측면에서 Is-A 관계인지 파악하는 것이다. 정사각형은 직사각형인가? 우리의 수학적인 직관은 그렇다고 이야기하겠지만, 객체의 행위 측면에서 보면 둘은 엄격히 분리된다. 우리가 올바른 Is-A 관계를 파악하기 위해 “X는 Y인가요?”라고 물을 때 기계적으로 답을 낼 수 없다.

## ISP (Interface Segregation Principle, 인터페이스 분리 원칙)

만약 우리가 `ProductService`라는 클래스에 Product와 관련된 기능을 모았다면, 인터페이스만이라도 분리해서 각 기능이 명시적으로 보이게 만들 수도 있다.

```jsx
public interface CreateProductUseCase {
    void createProduct(String name);
}

public interface SearchProductUseCase {
    List<Product> searchByName(String name);
}

public class ProductService
        implements CreateProductUseCase, SearchProductUseCase {
    // …(중략)…
}
```

## DIP (Dependency Inversion Principle, 의존관계 역전 원칙)

- 1. 상위 수준의 모듈은 하위 수준의 모듈에 의존해서는 안 된다. 둘 모두 추상화에 의존해야 한다.
- 2. 추상화는 구체적인 사항에 의존해서는 안 된다. 구체적인 사항은 추상화에 의존해야 한다.
- 의존성 방향을 [Application Layer → Infrastructure Layer]에서 역전된 [Infrastructure Layer → Application Layer]로 만드는 설계가 필요하다.
  - 이 방법으로 인터페이스를 이용한다.

# 필기

다섯가지 개발 원칙.

원칙, 패턴, 실천 방안들.

## SRP

이거는 SRP 위반이다!

단 한가지 변경 이유만을 가져야 한다.
![](2023-04-03-20-21-27.png)
![](2023-04-03-20-21-37.png)

위에가 결론 적으로는 잘 추상화해서 srp를 지키는 것임

- 테스트 하기도 쉬워지더라..!!!
- 재사용 편해져..!!!

- MECE
  - MECE(Mutually Exclusive Collectively Exhaustive의 약자, 상호배제와 전체포괄)는 항목들이 상호 배타적이면서 모였을 때는 완전히 전체를 이루는 것을 의미한다

## OCP

- 자바에서는 인터페이스로 정의하더라..!!

## 리스코프 치환 원칙.

- 상속을 받으면 서브 타입이 되지만,
- 진정한 서브 타입은 그 베이스타입 쓰던 자리에 치환이 가능해야한다.
- 상황마다, ...
- ex: 직사각형 클래스를 상속받은 정사각형 클래스. 이상해지더라..!

## ISP

- 코드로 와서, ProductRepository
  List<Product> findAllByName(String name);
  ...

* save
* select는 어떠한가?? 클래스를 나누는 것은 어떠할까?
  - interface SearchProductRepository
  - interface CommandProductRepository

- etc 함수형 인터페이스를 쓸수도 있겠죠.
  - 함수형 인터페이스는 람다식으로 표현이 가능하죠~!

## DIP

- 기술적인것. DB에 의존하지 않아..
- 이미 쓰고 있던것.
- DI. 도메인 객체중에 레포지토리가 있는 것이다.
- DIP는 DI를 쓰면 편합니다.

- 우리가 하고 있는 것이 이런거구나 짚어볼 수있는 시간이 되었음.
