# 키워드

## 학습 키워드

- 리파지터리 (Repository)
- Application Layer와 UI Layer

# 내용

- Repository
  - Aggregate를 관리하는 Collection처럼 작동하는 것.
  - 영리한, 영속적인 수집기 들.
  1. 오직 Aggregate만 Repository를 갖는다.
  2. Repository는 영속화 방법 및 기술을 감춘다
- Application layer
  - Repository와 aggregate를 사용하는 코드가 모인 곳.
- UI Layer
  - 사용자와 소통하는 코드가 모인곳.
- 정리
  - 따라서, 우리는 적절한 Aggregate를 발견하고, 적절히 책임을 나눌 수 있도록 Entity와 Value Object로 구성(또는 분해)하고, 이를 위한 Repository를 만듦으로써, 여러 기술 문제와 무관한 비즈니스 도메인에 집중할 수 있게 된다. 이렇게 비즈니스 도메인에 집중한 코드를 모아둔 곳을 Domain Layer라고 부르

# 필기

도메인 모델을 상태 방법이 있다.
헥사고널 아키텍쳐. 가볍게 다룰려고 합니다 이상입니다~~!!
