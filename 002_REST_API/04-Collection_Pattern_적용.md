# 키워드

CQS

# 내용

- CQS
  - Command Query State
    - crud도 2종류로 분류할 수 있더라.
    - Command : 데이터를 변화시키는 것. 다루기 어렵다. ex) create, update, delete
    - Query : 데이터를 읽기만 함. 분산처리나, 캐싱 등등 처리가 쉬움. ex) read.

# 필기

- 실제로는 4가지로 정리가 되더라.
- CQS

  - Command -> Create, Update, Delete
  - Query -> Read

- Collection Pattern 과 HTTP Method를 이용해 CRUD를 표현한다.

- GET /posts

- ID는 지정하지 않고, 생성한다.

- 종종 Bulk update, Bulk delete 등 사용
- 이럴때는 정하기 나름 ㅠ, 그렇지 않으면 어긋나 있을수도..!!

- API 스팩 문서에 정확히 기록.

- 특정 게시물 아래로 표현하는 경우, 전체 댓글 목록 API가 빠지더라, 따로 추가 필요..!

- 리소스를 많이 만들어 보면 좋다-!

덤으로

- 코드 짜는 건 쉽다.
