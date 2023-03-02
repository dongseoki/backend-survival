# 키워드

- 관심사의 분리
- 응집도
- 결합도
- Layered Atchitecture
- UUID

# 내용

- 관심사의 분리

  - 관심사를 분리하는 것이다. 컴퓨터 프로그램을 구별된 부분으로 분리시키는 디자인 원칙이라고 한다. 예를 들어 그것이 쇼핑 프로젝트라면, 계정관리 영역과 결제영역으로 나눠서 분리하는 것과 같다.
  - 이것이 잘되어 있으면 유지보수가 (안했을때에 비해) 더 쉽고, 모듈의 재사용성이 더 편해집니다.
  - 추상화를 이용해서 이루어집니다.
  - 이것을 이렇게 사용하는 인간의 한계를 극복하고자(많은 것을 한번에 관리할수 없는) 쓴다.

- 응집도
  - 관련 있는 기능은 한데 모아두는 것.
  - 응축된 정도.
  - 모듈내에 있는 요소들이 연관된 정도. 크기.
    https://en.wikipedia.org/wiki/File:CouplingVsCohesion.svg
  - 보통은 응집도가 높으면 재사용성과 관리용이성이 증가한다. 모듈의 복잡도도 감소한다. 따라서 응집도가 높게 설계하자.
  - 응집의 정도에 따른 분류
    - Coincidental cohesion(Worst)
      - 전혀 연관성 없는 기능이 임의로 묶여있는것.
    - Logical cohesion
      - 단지 논리적으로 같은 카테고리에 있다는 것으로 그룹화한것.(ex) 모든 마우스를 그룹으로 묶기.)
    - ...
    - Funtional cohesion(Best)
      - 잘 정의된 테스크에 기여하기 위해 그룹화된 모듈들을 일컫는다.
      - ex) XML문자열의 어휘분석기.
    - Perfect cohesion
      - 더이상 쪼개질수 없는 구성요소로 이루어 진 것을 의미.
- 결합도

  - 서로 다른 기능이나 객체가 서로 연계되는 정도.
  - 낮은 결합도는 높은 응집도와 보통 연관되어 있는 경우가 많다.
  - 낮은 결합도를 갖는 것이 잘 구조화된 설계, 시스템이라고 본다.
  - 절차적 프로그래밍이나, 객체지향적 프로그래밍이냐에 따라 결합도의 종류와 순서가 좀 다르다. 일단 절차적 프로그래밍을 기준으로 비교하자.
  - 결합도의 정도에 따른 분류
    - Content coupling
      - 특정 모듈이 다른 모듈의 코드를 가져다 씀. 정보은닉을 위반함.
    - Common coupling
      - 다양한 모듈이 같은 글로벌 데이터를 가지고 있을 때를 의미함.
    - ...
    - Stamp coupling
      - 복잡한 데이터를 공유하지만, 극히 일부분만을 모듈에서 사용할때 발생한다.
    - Data coupling
      - 모델 사이의 데이터의 공유가 (예를 들면) 파라미터로 이루어질때에 일어난다.
  - 결합도가 높으면 단점.
    - 모듈의 변경이 다른 모듈에 지대한 영향을 끼칠수 있어 유지보수가 어렵더라.

- Layered Atchitecture

  - 계층화한 아키텍쳐, 보통 3티어로 구성함. 표현계층, 비즈니스 계층, 저장 계층이 그것임.
  - presentation, logic, data tier.
  - presentation
    - 다른 층(전혀 차원이 다른)에 있는 데이터와 상호작용할때 쓰임.
  - logic
    - 비즈니스 핵심 로직을 수행함.
  - data
    - 데이터베이스 관리를 하고 데이터 저장과 불러오기를 수행함.

- Identifier
  - 식별자. 무언가를 유일하게 구분할때 사용함.
- UUID
  - Universal Unique Identifier
  - 데이터의 id용도로 사용함.
- ULID
  - 문자그대로 정렬할수 있는 식별자.
- TSID
  - 시간에 따라 정렬된 식별자를 갖는것.

# 필기

- 관심사의 분리
  이런거 이야기 많이 함.

몇군데에 몰아주자. 캡슐화, 추상화.
서랍, 그룹화.
인간의 한계를 극복하자.
그냥 나누고, 이름을 붙일 수 있죠
컨트롤.
몰입. 잠념 방해물.
집중, 시야가 좁아지는 것.
동전의 양면..

무엇을 기준으로 나눠줄까?
레이어!
기능이란 요소, 웹이란 요소를 나눌 수있다.

비즈니스 로직 vs 유아이를 나누자.

웹은 ui, 그리고 controller로 구현한다.

기존에 만들었던거 슥 나눠보시죠 ㄲㄲ

- 응집도
- 결합도
- Layered Atchitecture
- UUID
  UUID 는 기본 지원합니다.
  이거를 이용해서 식별자로 만들수 있다.
  UUID.randomUUID().toString();
  이게 쓸때마자, 정렬이 안되고, 왛다 갔다.
  ULID, 이건 소테블합니다.

15분 27초
계속 실습중.