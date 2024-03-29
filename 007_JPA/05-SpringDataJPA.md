# 키워드

## 학습 키워드

- Spring Data JPA
- Dao 와 Repository 차이
- JPA Repository와 DDD의 Repository
- Spring AOP
- @Transactional

# 내용

- Spring Data Jpa
  - JPA를 지원하는 레포지토리를 제공합니다. JPA 데이터 원천에 접근할 필요가 있는 어플리케이션의 개발을 편리하게 만듭니다.
- Dao vs Repository
  - DAO : 데이터를 관리
  - Repository : 도메인 모델을 다룸.
- JPA Repository와 DDD의 Repository
  - DDD repository : 컬렉션과 마찬가지로 객체를 추가하고, 식별자나 복잡한 기준에 따라 객체를 가져오고, 결국 객체를 제거하는 역할을 합니다
  - JPA Repository
    - JPA specific extension of Repository
- 토비의 Test에 @Transactional을 붙이는 것에 대한 이야기.
  - 하지만 @Transactional 테스트는 테스트 수행 중에 단 한 개의 트랜잭션 경계만 사용이 되고, 그 경계를 테스트 메소드로 확장을 해도 문제가 없는 상황에서만 유효합니다. 말씀하신 케이스처럼 트랜잭션 설정을 제대로 하지 않은 코드도 테스트에서는 문제가 없는 것처럼 보입니다.
  - JPA의 detached 상태 오브젝트의 변경이 자동감지 되지 않는 코드가 @Transactional 테스트에서는 정상 동작하게 보이는 현상이나, @Transactional이 동일 클래스의 메소드 사이의 호출에서는 적용되지 않는(스프링의 기본 프록시AOP를 사용하는 경우라면) 문제, 또 JPA에서는 save한 오브젝트가 영속 컨텍스트에만 존재하고 db로 flush되지 않은 상태로 rollback되기 때문에 명시적으로 flush하지 않으면 실제 db 매핑에 문제가 있어도 검증하지 못한다는 문제 등을 들 수 있습니다.

# 필기

- Spring initilizer를 이용합시다.
- application.yml 할수도 잇죠.
  고고 싱.

  만들었던거 복붙해옵니다 굳굳..
  전부다 모델스로..

JpaTest 만듭니다.

```java
@Test
void findAll(){

}
```

우리는 저것중에 위에꺼만 씁니다.

PersonRepository extends JpaRepository

빨갛게.. ㅋ, 불러줍시다!!
만만세!

```java
@SpringBootTest
public class JpaTest {
    @Autowired
    private PersonRepository personRepository

    @Test
    void findAll(){
        List<Person> people personRepository.findAll();
        assertThat(people).hasSize(2);
    }

//10분 25초.
    @Test
    @Transactional 을 붙여 줍시다.
    void createAndDelete(){
        Person perso = New Person("as"j, 35, Gender.male())
        personRepository.save(person);
        personRepository...
        save
        found
        delete.
    }
}

너무 귀찮다?
귀찮으면 클래스 상단에 쓸수도 있습니다.
@
```

## 2장.

```java
public class CreateItemService(){
    ...
}

public class PersonNotFound(String message){

}

```

04분 20초

```java
CreateItemServiceTest
```

```java
@Test
void createItem(){
    createItemService.createItem("견우")
}
```

이렇게 하기도 합니다!!

@Transactional 쓰면 아주 편하다!
경계 잘 만들어 준다!!

형태가 같으면, 써주면 되고, 안써줘도 된다.
