# 키워드

## 학습 키워드

- Spring AOP(Aspect Oriented Programming)
- Dependency Injection
- 싱클턴 패턴
- IoC(Inversion of Control)
- Spring Bean
- BeanFactory

# 내용

## 학습 키워드

- Spring AOP(Aspect Oriented Programming)
  - 관점 지향 프로그래밍의 준말.
  - 다른 관점에서 코드를 집어넣는 것을 의미한다.
- Dependency Injection
  - IoC와 거의 동의어.
  - 의존성을 주입한다.
  - 그리고 이러한 주입은... AOP에 의해서 일어난다!(프레임워크가 AOP 역할로)
- 싱클턴 패턴
  - 특정 인스턴스의 개수를 일정하게 유지하는 것임. 그런 것임.
- IoC(Inversion of Control)
  - 제어의 역전이 일어났다.
  - 내 코드를 프레임워크가 관리하더라.
- Spring Bean
  - 스프링이 관리하는 자바 객체를 의미한다.
- BeanFactory
  - 빈을 만드는 팩토리.

# 필기

- DI에 대한 것을 이야기하겠다.
- 제어 반전.

- 마틴파울러 제어 반전.

- 제어권이 TK로 넘어가는것..
  - 제어의 역전이라고 프레임워크를 정의하는 특징처럼 보인다.

- 헐리우드 원칙이라고들 한다.


- 스프링의 탄생 배경
  - EJB를 비판하면서, light 더 잘 쓸수 있다.(로드 존슨) 
  - 결국 디펜던시 인젝션이란 새로운 용어로 쓰임.
  - Ioc DI 혼용해서 쓴다.

- Setter injection
  - 다른데서는 생성자 주입도 많이 한다.

- final 필드로 만들어서 쓰는 것을 굉장히 권장하고 있다.
- 파이널엔 세터가 안된다.

- 스프링이 관리하는 객체를 빈이라고 한다.
  - spring bean이라고 콕 집어서 이야기한다.
- 이걸 해보려고한다.
- 간단한거 해보려고한다.
- 저희가 Junit
Spring initianlizer는 기본으로 추가 되더라.

테스트 코드에서 하는 종ㅈ오 실수.
그렇게 되지 않아요
랜덤하게 실행됩니다.
이런것도 주의합니다.
다 독립적입니다. ㅋ...

BeforEach로 독립ㅈ거으로 같이 들어갈 부분 쌉가능.

요게혹시라도 여러개를 만들일이 있다면 주의를 해야한다.
격리를 해야한다.

20분 47초.

27분 시작.
뭔가 실습을 해보고 있다. 따라하면 좋겠죠!
지금 bean definition을 등록하, 빈을 꺼내고 있다.
!!!
29분 40초!!

생성자 주입.
테스트 코드에 생성자 주입을 슥 해버리는 중...

2개

다양한 설정법이 있죠
@Configuration @Bean 쓸수도 있고요
아니면 다양한 방식이 있겠죠.
팩토리고 나발이고 뺍시다!

자 가서, 여기서 얘도 ㅋㅋ, 실패하겠죠. 관리를 안해주고 있으니까요 ㅋㅋ

아이고, 아이고~~
Create PostRepository

Service 하면 터지겠죠, 왜터질까요?
기본적으로
BeanFactory ApplicationContext라는 것을 관리하기도 합니다.

자바 컨피기 방식도 있죠.
컴포넌트스캔같은 것을 쓰도록 할수도 있겠죠.

- 더 복잡한 걸 하는 데
- 얼추, 느낌적인 느낌으로 돌고 있다.

- 점점 복잡한것을 만드는 데, 우리는 간단하게 이렇게 쓸거에요 ㅋㅋ

이거 이렇게 잘 안합니다.

스프링 core, 스프링 web mvc
etc..

커다란 프로젝트를 만들 수 있게 도움을 주는 것이죠.

스프링 코어, spring mvc...
너무 너무 강력하죠 ㅎㅎ..
애플리케이션 커다란 것을 만들어낸다 ㅎㅎ..

내부에서 어떻게 돌아가지? 이거에 대한 이해

모델 메퍼가 만약에 있다.

컨트롤러에서 안심하고 쓸수 있다.
실행할때 잘 안될때, 뭘빼먹었는지 이런것들을 좀 알수 있겠죠.
Infrastructure 외부기술과
application core 핵사고널 아키텍쳐 같은 것을 하나씩 알아보도록 하겠습니다.

## 학습 키워드

- Spring AOP(Aspect Oriented Programming)
- Dependency Injection
- 싱클턴 패턴
- IoC(Inversion of Control)
- Spring Bean
- BeanFactory
