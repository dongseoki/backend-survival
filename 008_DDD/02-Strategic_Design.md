# 키워드

## 학습 키워드

- 보편언어 (Ubiqutious Language)
- 제한된 컨텍스트 (Bounded Context)
- 하위 도메인 (Subdomain)

# 내용

- 도메인 주도 설계는 크게 전략적 설계와 전술적 설계로 나눌수 있음.
- 전략적 설계
  - 도메인 모델을 발견하는 행위?(뇌피셜)
  - Ubiquitous Language
    - 비즈니스 도메인을 적절하게 다룰 수 있는 용어를 함께 만들어서, 코드에서도 쓰자!
      - 어려운 용여는 재검토를!
  - Bounded Context
    - 맥락을 좁힘으로써 하나의 어휘가 하나의 대상을 지시하는 이상적인 상황을 만들수 있다.
    - ex)
      - User계의 account, Bank계의 account 사용.
      - 잘 나누지 않았는가?!
  - Subdomain
    - Bounded Text : 시스템을 나누는것. 소프트웨어를 조직화.?
      - Solution Space
    - 도메인을 나눌땐 Subdomain말을 씀. 아직도 뭔지 잘 모름. 현실을 조직화??
      - Problem space
    - 예시가 절실한듯..
    - 하위 도메인이라는 단어를 사용할 때는 해당 도메인이 확인된 다른 상위 도메인의 하위 도메인이라는 점을 강조하는 것입니다.
  - bounded context vs subdomain
    - https://medium.com/nick-tune-tech-strategy-blog/domains-subdomain-problem-solution-space-in-ddd-clearly-defined-e0b49c7b586c
- 전술적 설계
  - 발견된 도메인 모델을 설계와 코드에 반영하는 것.
  - 아래 4가지로 나눌수 있음.
    1. Entity
    2. Value Object
    3. Aggregate
    4. Repository

# 필기

- 전략 전술 다 중요하다.
- 전략이 더 중요합니다 하하

- subdomain
- 보편언어.
  - 이것이 정말 중요합니다.
  - 하나의 언어. 어떤 용어를 다 동일한 의미로 쓴다.
  - 개의 모양이 조금씩 다를 수 있죠.
  - 보편언어를 씁시다.
- 도메인 전문가가 쓰는 어휘에 끌려가는 것이 아닙니다.
  - 적절한 용어를 찾아봅시다~!
  - 조율을 꼭 해야합니다. 혼란을 막기 위해..!
    하나의 어휘가 하나의 뜻으로만 쓰이는 것이 아니죠~
    대화할때 비용이 계속 증가하죠~

은행이랑 거래하는 맥락에서 말씀하시는 거죠~

- 어카운트는 뱅크 어카운트 겠죠.
- 경계를 가진 컨텍스트로 나눔니다.
  - account에 대한 혼란을 막아야죠.
    - User, Bank 계 따로.
- bc vs 서브 도메인
  - 하나의 어휘가 하나의 것만
  - 서브도메인 : 대게 부서단위로 나뉜 케이스가 많음. 현실을 조직화하는 방법.
- 로그인
  - 일반 도메인
- 우리의 핵심 도메인에 집중하자.
-
