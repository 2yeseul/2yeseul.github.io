---
title: week7
date: 2020-12-30 00:00:00
categories:
- Java
- 자바 온라인 스터디
tags:
- Java
- package
- import
- classpath
---

# 7주차

- package 키워드
- import 키워드
- 클래스패스
- CLASSPATH 환경변수
- classpath 옵션
- 접근지시자

# package

## 정의

관련된 클래스 혹은 인터페이스들의 묶음이다. 파일 디렉토리의 폴더라고 생각하면 된다. 

## 사용 이유

- `name confilcts` 피함 → 클래스명의 고유성 보장
- 코드의 더 나은 `유지보수`를 위해

### com.example과 같은 패키지명 형태

- `com.example` 과 같은 최상위 패키지명을 사용하는 이유?

  패키지 이름의 `고유성을 보장`하기 위해 인터넷 도메인 주소를 거꾸로 사용하기도 한다. 인터넷 도메인은 이미 고유성을 가지고 있기 때문에, 다른 충돌을 걱정할 필요가 없다.

## 종류

### Built-in Packages

![https://www.studytonight.com/java/images/package-in-java.jpg](https://www.studytonight.com/java/images/package-in-java.jpg)

Java API는 Java Development Environment에 포함된, 미리 작성된 클래스 라이브러리이다. math, util, i/o와 같은 기본 패키지들이 내장되어있다.

![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fuf4y9%2FbtqRTRLf0Za%2FhoyQVor5PTG1TKwwSyecZk%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fuf4y9%2FbtqRTRLf0Za%2FhoyQVor5PTG1TKwwSyecZk%2Fimg.png)

![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fq5dbd%2FbtqRTSQXIrB%2FtSPxs5931CcCGHxDUR69CK%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fq5dbd%2FbtqRTSQXIrB%2FtSPxs5931CcCGHxDUR69CK%2Fimg.png)

IntelliJ에서 프로젝트를 생성하면, `External Libraries` 에서  `built-in` 패키지와 그에 속한 클래스들을 볼 수 있다.

라이브러리는 `packages`와 `classes`로 나뉜다. 즉 단일 클래스(메소드와 속성을 포함하는)를 가져오거나 특정 패키지에 속하는 모든 클래스를 포함하는 패키지를 가져올 수 있다.

### User-Defined-Package

사용자가 클래스와 인터페이스를 카테고리화하여 사용자 정의 자바 패키지를 생성할 수 있다.

생성하기 위해서, 우선 프로젝트에 디렉토리를 만든 뒤, `package 폴더명;`을 써준다.

# import

## 다른 클래스 사용하는 방법

### 패키지 주소 전체를 이용하기

```java
java.util.Date today = new java.util.Date();
java.util.Date yesterday = new java.util.Date();
```

이 사용법은 클래스 사용시마다 매번 주소를 입력해야하므로 번거롭다.

### import 키워드 사용

```java
import java.util.*;
import java.math.BigInteger;
```

- `*` 를 이용하여 패키지의 모든 하위 클래스에도 적용이 가능하다.
- 만약 서로 다른 패키지가 같은 이름을 가진 클래스를 가지고 있다면, 이는 컴파일 에러로 이어진다.
  - 따라서 이를 피하기 위해 특정 클래스의 주소를 import 하는 방식으로 사용해야 한다.

```java
import java.util.*;
import java.sql.*;
// ERROR
public class Test {
 public static void main(String[] args) {
  Date newDate = new Date();
 }
}
```

`Date` 클래스는 `java.util`과 `java.sql` 패키지 모두에 존재하기 때문에 컴파일 에러가 발생한다.

이런 경우에는 

```java
java.util.Date utilDate = new java.util.Date();
java.sql.Date sqlDate = new java.sql.Date(0);
```

와 같이 패키지의 전체 주소를 이용하는 방식을 사용해야한다.

## static

`import` 는 static 클래스, 메소드, 데이터 필드에도 적용가능하다.

```java
import static java.lang.System.out;
public class example {
	public static void main(String... args){
		out.println("EXAMPLE");
		}
}
```

이와같이 자주 사용하게 되는 `System.out` 객체는 static 클래스인 `System`을 import하거나, `System.out`을 import하여 간소화할 수 있다.
