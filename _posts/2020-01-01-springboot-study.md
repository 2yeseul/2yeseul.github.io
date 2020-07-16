---
title: Spring boot 정리 01
date: 2020-01-01 00:00:00
categories:
- java
- springboot
tags:
- java
- springboot
---

(*[이동욱님 spring boot 강좌](<https://github.com/jojoldu/springboot-webservice>)를 공부하고 개인적으로 정리해 둔 것 입니다.)

**application.java** → spring boot 실행

{% highlight java %}

package com.example.webservice;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringWebserviceApplicationTests {

	@Test
	void contextLoads() {
	}

}
{% endhighlight %}

------

### @Controller vs @RestContrller

| @Controller                    | @RestContorller(Spring Restful Controller)                   |
| ------------------------------ | ------------------------------------------------------------ |
| Client 요청에 따라 View를 반환 | Spring MVC Controller  + @ResponseBody  : **JSON/XML 형태로 객체 데이터 반환** |

------

**Posts.java**

{% highlight java %}

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Posts {

    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 500, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    private String author;

    @Builder
    public Posts(String title, String content, String author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }
}

{% endhighlight %}

- annotation 설명 

  - JPA 

     **ORM**은 "관계형 데이터베이스의 구조화된 데이터와 자바와 같은 객체 지향 언어 간의 __구조적 불일치를 어떻게 해소__할 수 있을까"라는 질문에서 나온 객체-관계 매핑 프레임워크입니다. 즉, **객체와 릴레이션을 매핑할 때 생기는 다양한 문제들을 해결할 수 있는 솔루션**이라 생각하면 됩니다.  **JPA은 ORM을 위한 자바 EE 표준**이며 Spring-Data-JPA는 JPA를 쉽게 사용하기 위해 스프링에서 제공하고 있는 프레임워크입니다.

    [^출처]: https://engkimbs.tistory.com/790 [새로비]

  - Lombok 라이브러리

    JAVA에서 클래스를 만들 때(VO,DTO..)  작성해야하는 반복적인 코드들(getter,setter,toString...)을 annotation 사용을 통해 간편하게 하는 것

### **JPA**

| annotation      | 설명                                                         |
| --------------- | ------------------------------------------------------------ |
| @Entity         | 테이블과 링크될 클래스임을 나타냄                            |
| @Id             | 해당 테이블의 PK 필드                                        |
| @GeneratedValue | PK의 생성규칙. 기본값 - AUTO, 자동증가하는 정수형 값 but 스프링부트 2.0 에선 [옵션](<https://jojoldu.tistory.com/295>)  추가해야 auto_increment됨 |
| @Column         | 별다른 옵션이 없다면 생략해도 OK 기본값 외에 추가로 변경 필요한 옵션 있을 때 사용 ex) 문자열의 사이즈 변경 or 타입 변경 etc.. |

------

### **Lombok**

| annotation               | 설명                                                         |
| ------------------------ | ------------------------------------------------------------ |
| @NoArgsConstructor       | 기본 생성자 자동 추가(파라미터 X) access = AccessLevel.PROTECTED : 기본 생성자의 접근 권한 - protected로 제한 |
| @AllArgsConstructor      | 모든 필드 값을 파라미터로 받는 생성자 생성                   |
| @RequiredArgsConstructor | final or @NonNull인 필드값만 파라미터로 받는 생성자 생성     |
| @Getter                  | 클래스 내 모든 필드의 Getter 메소드 자동생성                 |
| @Builder                 | 해당 클래스의 빌더 패턴 클래스를 생성                        |
| @ToString                | toString() 메소드 생성 (exclude = "필드명") 하면 지정 필드 toString() 결과에서 제외 |
| @EqualsAndHashCode       | equals : 두 객체의 **내용**이 같은지 비교 hashCode : 두 객체가 **같은 객체**인지 비교 |
| @Data                    | @ToString, @EqualsAndHashCode, @Getter, @Setter, @RequiredArgsConstructor을 한번에 사용하는 강력한 어노테이션 |

------

### JpaRepository

Entity에 있는 data 조회/저장/변경/삭제할 때,  인터페이스를 정의해서 Entity의 데이터를 사용할 수 있음

JpaRepository<Entity 클래스, PK 타입> 상속 → CRUD 메소드 자동생성

(CRUD - Create, Read, Update, Delete)

PostsRepository.java

{% highlight java%}

public interface PostsRepository extends JpaRepository<Posts, Long>{
}

{% endhighlight %}

------

### DTO(Data Transfer Object)

- 데이터가 포함된 객체를 한 시스템에서 다른 시스템으로 전달하는 객체.
- DB에서 데이터를 얻어 Service나 Controller로 보낼 때 사용
- 데이터 저장 담당
-  logic이 없는 순수한 데이터 객체, getter와 setter 메소드를 가짐

### DAO(Data Access Object)

DB를 사용하여 데이터에 접근하여 조회/조작. 실제로 DB에 접근하는 객체

ex) JpaRepository..

------

{% highlight java %}

@Getter
@Setter
@NoArgsConstructor
public class PostsSaveRequestDto {

    private String title;
    private String content;
    private String author;

    public Posts toEntity(){
        return Posts.builder()
                .title(title)
                .content(content)
                .author(author)
                .build();
    }
}

{% endhighlight %}

- **Entity 클래스와 유사한 형태임에도 DTO 클래스를 추가 생성한 이유**
  - 절대로 테이블과 매핑되는 Entity 클래스를 Request / Response 클래스로 사용해선 안됨.
  - Entity : 가장 Core한 클래스
    - 수많은 서비스 클래스나 비즈니스 로직이 Entity를 기준으로 동작
    - **따라서 Entity가 변경되면 여러 클래스에 영향을 끼짐**
    - 하지만 View를 위한 Request / Response 용 DTO는 자주 변경이 필요하므로 View Layer와 DB Layer 분리해야함

------
### Model 객체

- Controller에서 생성한 data를 담아서 View로 전달할 때 사용
- Servlet의 request.setAttribute()와 유사한 역할
- addAttribute("키", "값") 메소드 사용하여 전달할 데이터 세팅
  - HashMap 형태를 가지고 있어서 key - value 값 처럼 사용 가능

[^참조]: https://lopicit.tistory.com/224, https://memories95.tistory.com/109

### 트랜잭션이란?
Service 메소드 : 일반적으로 DB 데이터를 등록/수정/삭제함
-	@Transactional 어노테이션 필수적으로 가져감
	- 메소드 내에서 Exception 발생 → 해당 메소드 내에서 이루어진 DB 작업 전부 초기화
