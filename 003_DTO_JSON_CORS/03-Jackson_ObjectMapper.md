# 키워드

## 학습 키워드

- Jackson ObjectMapper 란
- ObjectMapper
- `@JsonProperty`

# 내용

## 학습 키워드

- Jackson ObjectMapper 란
- ObjectMapper
- `@JsonProperty`

# 필기

우린 DTO를 위한 클래스를 만들어줄거임.
JSON 스키마
{
"id": 1,
"title": "제목"
}
그렇다면, 지난번 코드로 가서 슥 만들어 보죠.
게터 필요~
기본 생성자 필요~
writeValueAsString으로 테슽 해보자.

게터 이름 따릅니다.
getContentText 하면 리턴값도 그렇게
서로 다른 값 매핑하려면
JsonProperty를 써서 서로 다른 이름 매핑 가능.

List<POstDto>이렇게 반환값을 컨르롤러에서 쓰는 것도 정말 잘됩니다.
받는쪽, 스트링 받았잖아요, 리드

이제 읽기 해볼게요.

curl -X POST localhost:8080/posts -d ''
아 한글이 문자가 되었네요
그러면 한글을 바꿔야ㅐ할듯..
아 아니였음
applciation/json을 잘못썼었네요 ㅠ

어라 setter는 필요없네..?
우리는 젝슨 직접 쓰는 거랑, 안쓰고 스프링이 알아서 변화하는 것도 살펴보았습니다~

카멜케이스쓰는게 컨벤이라 , 자바든 자바스크립트든 글서
제이슨 프로퍼티 쓸일이 없어요 ㅋㅋ

## 학습 키워드

- Jackson ObjectMapper 란
- ObjectMapper
- `@JsonProperty`
