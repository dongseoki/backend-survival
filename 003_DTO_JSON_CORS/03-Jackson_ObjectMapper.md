# 키워드

## 학습 키워드

- Jackson ObjectMapper 란
- ObjectMapper
- `@JsonProperty`

# 내용

## 학습 키워드

- Jackson ObjectMapper 란
  - 전 강의에서 말한 직렬화를 하기 위해서 자바진영에서 정말 많이 사용하는 방법.
  - 결국 라이브러리인데 자바 객체 -> json string 사이의 변환을 돕는다.
- ObjectMapper
  - 아무튼 그 중에서 ObjectMapper를 이용할 수 있는데, writeAsValue로 하면 jsonString으로 변환하고, read하면 객체로 만들수 있음.
- `@JsonProperty`
  - 이거는 서로 다른 값을 매핑할 때 쓴다.
  - 이거 없으면 보통은 요청 바디의 키값과 키값에 해당하는 getter를 바로 이어준다.
  - 그런데 경우에 따라서는 다르게 매핑해야할 수 도 있으니, 그럴때 사용하면 좋더라.

# 필기

- 우린 DTO를 위한 클래스를 만들어줄거임.
  JSON 스키마
  {
  "id": 1,
  "title": "제목"
  }

  - 그렇다면, 지난번 코드로 가서 슥 만들어 보죠.
  - 게터 필요~
  - 기본 생성자 필요~
    - writeValueAsString으로 테스트를 해보자.

- 서로 다른 값 매핑하려면

  - JsonProperty를 써서 서로 다른 이름 매핑 가능.

- List<PostDto>이렇게 반환값을 컨르롤러에서 쓰는 것도 정말 잘됩니다.
  받는쪽, 스트링 받았잖아요, 리드

- curl -X POST localhost:8080/posts -d ''

- 어라 setter는 필요없네..?

  - 우리는 젝슨 직접 쓰는 거랑, 안쓰고 스프링이 알아서 변화하는 것도 살펴보았습니다~

- 카멜케이스쓰는게 컨벤이라 , 자바든 자바스크립트든 글서
  - 제이슨 프로퍼티 쓸일이 없어요 ㅋㅋ
