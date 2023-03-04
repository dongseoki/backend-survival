# 키워드

## 학습 키워드

- 통합 테스트(Integration Test)
- `@Autowired`
- `@SpyBean`
- MockMvc
- MockBean
- `@WebMvcTest`

# 내용

## 학습 키워드

- 통합 테스트(Integration Test)
  - 통합하여 테스트 하는 것. 여러 객체에 의존적임. 무거움. 단위 테스트보다 오래걸림.
- `@Autowired`
  - 의존성을 주입할때 씀. 필드에도 가능하고, 생성자에도 가능함. 생성자에 쓰고, 그것이 하나면 생략이 가능함.
- `@SpyBean`

  - 스파이 역할을 함. 특정한 메서드가 호출되는 횟수를 셀수도 있음.

- MockMvc
  - mvc를 목킹한것. 일단 이것을 이용하면, http api를 호출할 수 있다. 그리고 내부적으로 일부 동작을 스텁으로 대체할 수 도 있다.
- MockBean
  - 목 역할을 하도록 스프링 빈에 등록하는 것..?
- `@WebMvcTest`
  - 웹단만 테스트 하는 방법.
  - 그니까, 서비스나 레포지토리 빈은 안올리고, 웹과 관련된 빈만 올림.

# 필기

Unit Testing 써봐라 ㅎㅎ
객체들을 끌어다 쓸 수 있도록 지원을 해줍니다.

목킹 이 문제!!

스프링의 힘을 빌려서 할수 있고, 그런것을 통합 테스트라고한다!
띄울때 랜덤 포트로 잡ㅇ아줘 도 가능,.

필드로 쓸게요.
@Value
@Autowired같은 것도 있죠.

저희는 restTemplate을 써볼게요. 가장 많이 쓰는게 저거입니다. 7분50초.

restTemplate getForObject 하죠 ㅋㅋㅋ\
local.server.port

import static 이렇게 쓰면 좀 짧게 쓸수 있겠죠?

TestRestTemplate : 테스트할때만 제공되는 의존성이다.
만약에 posts가 아니었다..? 그러면 hello world?

```java
    //제일 단순해요
    getForObject, postForLocation etc...

    Pattern pattern = Pattern.compile("")


```

정말로 순간ㅈ거으로 띄우는 것입니다 ㅋㅋ
ㄷ해서 50447 포트를 연거에요 ㅋㅋ
인수테스트에 가깝게 한 것이죠

통합테스트 할때 doseNotContain 이런거 쓰고 있음 ㅋㅋ
assertThat(body).contains("제곧내");

TestRestTemplate
테스트를 위해서 태어난 녀석이다.
@AutoCongirueMockMvc
class PostsControllerTest {
@Autowired
private Mockmvc mockMvc;

    @Test
    void list(){
        mockMvc.perform(get())
    }
    아무튼 저렇게

    // containsString 제목.

    // 이녀석이 예외를 줄 수 있거든여
    <!-- 예외나는 것들은 expect -->
    Web
    utf8 은 기본값이라 안써도...
    우리 mockMvc 이렇게 테스 해볼수 있죠 현재는 35분 15초.

    assertThat(newSize).isEqualTo(oldSize + 1);

    우리가 할거는 SpyBean을 활용하려고 합니다.
    원래는 Spy라는 거를...
    PostController postController = spy(postController)
    굉장히 직접 잡아주는 것은 좀 불편하요.
    호출에 대한 기록을 하는 것.'
    spybean

    mockito verify r고르세요!!!
    verify(postRepository).findAll();
    자 이렇게 하면 ... 실패하죠. save가 되야하죠 ㅋㅋ

    자 와서
    verify(postRepostiryo).delete(new PostId())

    verify(postRepository).save()

    reflection으로 쓸수도 있어요.
    이렇게 하면 클래스 오브젝ㅡ에서 필드 얻어 옵니다.
    reflection 쓰는 중, 47분 41초.

}

## 학습 키워드

- 통합 테스트(Integration Test)
- `@Autowired`
- `@SpyBean`
- MockMvc
- MockBean
- `@WebMvcTest`
