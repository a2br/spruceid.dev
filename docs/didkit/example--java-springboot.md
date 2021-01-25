---
id: example--java-springboot
title: Spring Boot Java Installation
---

This project demonstrates use of verifiable credentials and presentation to enable
user authentication for an application.

## Dependencies

1. Java 11
2. DIDKit compiled locally & linked from the classpath
3. The DIDKit Java artifact (`didkit.jar`), usually built by DIDKit installation.
4. A MySQL database

### Java Build tool

If you are trying to use DIDKit with an external Java project, you will have
to point your build tool (Gradle, Maven, etc) to the `didkit.jar` file. Please refer
to those tools' documentation to find out more. Here is an excerpt of how we have
listed it in this projects `pom.xml` for Maven:

```xml
<dependency>
  <groupId>com.spruceid.didkit</groupId>
  <artifactId>didkit</artifactId>
  <version>0.1</version>
  <scope>system</scope>
  <systemPath>${basedir}/didkit.jar</systemPath>
</dependency>
```

### Database Configuration (MySQL)

This project uses a MySQL database to store the user entity. One easy way to run
an instance is by using docker:

```bash
# docker run \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=didkit \
  -p 3306:3306 \
  --name didkit-java-db \
  -d mysql:5
```

If you need to modify the database credentials you will need to update the
relevant fields in `src/main/resources/application.properties`.

```
spring.datasource.url=jdbc:mysql://localhost:3306/didkit
spring.datasource.username=root
spring.datasource.password=root
```

## Execution

To run this example project you can execute this command from the root folder:

```bash
$ ./mvnw spring-boot:run
```

You can then load `http://localhost:8080` to see the web application.


To verify that DIDKit has been setup correctly, you can then run:

```bash
$ curl -v http://localhost:8080/version
```

And you should expect to see a version string in the response.