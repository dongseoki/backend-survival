# 학습 키워드

- API(Application Programming Interface)
- 정보은닉(Information Hiding)과 캡슐화(Encapsulation)
  - 그리고 이 둘의 차이(많이들 혼용하니까 잘 알아두세요)
- Architecture와 Architecture Style의 차이
- REST(7가지 제약 조건 위주로 정리)
  - 교재에 나온 `필딩 제약 조건`을 좀 더 풀어서 정리해보세요.
  - 아래 2가지 자료를 보시면 도움이 되실 겁니다.
  - [https://www.youtube.com/watch?v=RP_f5dMoHFc](https://www.youtube.com/watch?v=RP_f5dMoHFc)
  - [https://blog.npcode.com/2017/03/02/바쁜-개발자들을-위한-rest-논문-요약/](https://blog.npcode.com/2017/03/02/%eb%b0%94%ec%81%9c-%ea%b0%9c%eb%b0%9c%ec%9e%90%eb%93%a4%ec%9d%84-%ec%9c%84%ed%95%9c-rest-%eb%85%bc%eb%ac%b8-%ec%9a%94%ec%95%bd/)
  - [https://blog.npcode.com/2017/04/03/rest의-representation이란-무엇인가/](https://blog.npcode.com/2017/04/03/rest%ec%9d%98-representation%ec%9d%b4%eb%9e%80-%eb%ac%b4%ec%97%87%ec%9d%b8%ea%b0%80/)

# 내용.

- API(Application Programming Interface)
  - 어플리케이션을 사용하기 위한 인터페이스. 구체적인 내용을 몰라도, 인터페이스만 알면 쓸수 있다.
- 정보은닉(Information Hiding)과 캡슐화(Encapsulation)
  - 정보은닉 : 정보가 은닉된것.
  - 캡슐화 : 데이터를 한번 그룹화한것. 그리고 이 데이터는 인터페이스를 통해서만 접근가능하게 조치함.
- Architecture와 Architecture Style의 차이
  - Architecture : 이러한 규칙이 있다!~
  - Architecture Style : 이렇게 규칙을 작성해라 라는 가이드.
- REST(7가지 제약 조건 위주로 정리)

  - 교재에 나온 `필딩 제약 조건`을 좀 더 풀어서 정리해보기
  - 아래 2가지 자료를 보시면 도움이 되실 겁니다.
  - [https://www.youtube.com/watch?v=RP_f5dMoHFc](https://www.youtube.com/watch?v=RP_f5dMoHFc)
  - [https://blog.npcode.com/2017/03/02/바쁜-개발자들을-위한-rest-논문-요약/](https://blog.npcode.com/2017/03/02/%eb%b0%94%ec%81%9c-%ea%b0%9c%eb%b0%9c%ec%9e%90%eb%93%a4%ec%9d%84-%ec%9c%84%ed%95%9c-rest-%eb%85%bc%eb%ac%b8-%ec%9a%94%ec%95%bd/)
  - [https://blog.npcode.com/2017/04/03/rest의-representation이란-무엇인가/](https://blog.npcode.com/2017/04/03/rest%ec%9d%98-representation%ec%9d%b4%eb%9e%80-%eb%ac%b4%ec%97%87%ec%9d%b8%ea%b0%80/)

  - 1️⃣ **Starting with the Null Style**
    - 제약조건의 빈 집합에서 설계를 시작해야한다!
  - 2️⃣ **Client-Server**
    - client server구조를 가져야 한다!
  - 3️⃣ **Stateless**
    - 이 api를 통한 통신정보는 상태를 저장하지 않아야 한다!
  - 4️⃣ **Cache**
    - api는 캐싱이 가능해야한다.
  - 5️⃣ **Uniform Interface → 핵심!**
    - 일관된 인터페이스 형식을 가져야 한다-!
  - 6️⃣ **Layered System**
    - 이 api는 계층으로 구성이 가능해야한다! 그 리소스를!
  - 7️⃣ **Code-On-Demand**
    - 서버가 클라이언트에 코드 전달하면, 클라이언트는 실행가능해야 한다. (말 그대로 요구하면 코드 실행) 하지만 옵션임.

# 필기.

- FE와 BE
- 가까이 있는 것은 프론트, 멀리 있는 것은 백엔드.

- 요새 웹 기술 활용해서 하기도 함.

* graphql도 쓰긴 한다.

* 자바 서블릿 그런것도 확인해보자~!
* 자바 서블릿 그림만이라도 집고 넘어가자~
* 커뮤니케이션을 하기위한 명세

* REST API

  - 아키텍처를 위한 아키텍쳐 스타일

* 제약 조건은 뭘까?

* 논문을 보면은...
* layered archtextrue 롤 되어있다.
* 필딩제약조건을 따르냐 안따르냐

* 엘리스가 키가 커지던 작아지던 엘리스다.

* 리소스와 표현을 분리한다.

* 리소스는 서버에 저장된 무언가가 아니다.

* 아 이정도 되는 것을 REST라고 부르는 구나
