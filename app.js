Running with gitlab-runner 17.0.0~pre.88.g761ae5dd (761ae5dd)
  on green-4.saas-linux-small-amd64.runners-manager.gitlab.com/default ntHFEtyX, system ID: s_8990de21c550
Preparing the "docker+machine" executor 00:19
Using Docker executor with image maven:3.8.6-jdk-11 ...
Pulling docker image maven:3.8.6-jdk-11 ...
Using docker image sha256:6c3ab1faec76c92f0867f4b366000d77e8dab5f9d6339fb03c1e394e20f3cb59 for maven:3.8.6-jdk-11 with digest maven@sha256:805f366910aea2a91ed263654d23df58bd239f218b2f9562ff51305be81fa215 ...
Preparing environment 00:01
Running on runner-nthfetyx-project-60925319-concurrent-0 via runner-nthfetyx-s-l-s-amd64-1723916916-e65410ca...
Getting source from Git repository 00:01
Fetching changes with git depth set to 20...
Initialized empty Git repository in /builds/serhataltnmks/chess-ai-game/.git/
Created fresh repository.
Checking out e75a0e7b as detached HEAD (ref is master)...
Skipping Git submodules setup
$ git remote set-url origin "${CI_REPOSITORY_URL}"
Restoring cache 00:01
Checking cache for default-protected...
Downloading cache from https://storage.googleapis.com/gitlab-com-runners-cache/project/60925319/default-protected 
Successfully extracted cache
Downloading artifacts 00:01
Downloading artifacts for build (7605433606)...
Downloading artifacts from coordinator... ok        host=storage.googleapis.com id=7605433606 responseStatus=200 OK token=glcbt-66
Executing "step_script" stage of the job script 00:12
Using docker image sha256:6c3ab1faec76c92f0867f4b366000d77e8dab5f9d6339fb03c1e394e20f3cb59 for maven:3.8.6-jdk-11 with digest maven@sha256:805f366910aea2a91ed263654d23df58bd239f218b2f9562ff51305be81fa215 ...
$ mvn sonar:sonar -Dsonar.projectKey=$SONAR_PROJECT_KEY -Dsonar.login=$SONAR_LOGIN
[INFO] Scanning for projects...
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-parent/2.7.5/spring-boot-starter-parent-2.7.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-parent/2.7.5/spring-boot-starter-parent-2.7.5.pom (9.2 kB at 24 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-dependencies/2.7.5/spring-boot-dependencies-2.7.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-dependencies/2.7.5/spring-boot-dependencies-2.7.5.pom (108 kB at 1.3 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/datastax/oss/java-driver-bom/4.14.1/java-driver-bom-4.14.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/datastax/oss/java-driver-bom/4.14.1/java-driver-bom-4.14.1.pom (4.1 kB at 96 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/io/dropwizard/metrics/metrics-bom/4.2.12/metrics-bom-4.2.12.pom
Downloaded from central: https://repo.maven.apache.org/maven2/io/dropwizard/metrics/metrics-bom/4.2.12/metrics-bom-4.2.12.pom (6.9 kB at 181 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/io/dropwizard/metrics/metrics-parent/4.2.12/metrics-parent-4.2.12.pom
Downloaded from central: https://repo.maven.apache.org/maven2/io/dropwizard/metrics/metrics-parent/4.2.12/metrics-parent-4.2.12.pom (20 kB at 496 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/groovy/groovy-bom/3.0.13/groovy-bom-3.0.13.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/groovy/groovy-bom/3.0.13/groovy-bom-3.0.13.pom (26 kB at 645 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/infinispan/infinispan-bom/13.0.12.Final/infinispan-bom-13.0.12.Final.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/infinispan/infinispan-bom/13.0.12.Final/infinispan-bom-13.0.12.Final.pom (18 kB at 480 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/infinispan/infinispan-build-configuration-parent/13.0.12.Final/infinispan-build-configuration-parent-13.0.12.Final.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/infinispan/infinispan-build-configuration-parent/13.0.12.Final/infinispan-build-configuration-parent-13.0.12.Final.pom (15 kB at 417 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/jboss/jboss-parent/36/jboss-parent-36.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/jboss/jboss-parent/36/jboss-parent-36.pom (66 kB at 1.2 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/jackson-bom/2.13.4.20221013/jackson-bom-2.13.4.20221013.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/jackson-bom/2.13.4.20221013/jackson-bom-2.13.4.20221013.pom (17 kB at 414 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/jackson-parent/2.13/jackson-parent-2.13.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/jackson-parent/2.13/jackson-parent-2.13.pom (7.4 kB at 218 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/oss-parent/43/oss-parent-43.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/oss-parent/43/oss-parent-43.pom (24 kB at 674 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/glassfish/jersey/jersey-bom/2.35/jersey-bom-2.35.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/glassfish/jersey/jersey-bom/2.35/jersey-bom-2.35.pom (19 kB at 552 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/eclipse/ee4j/project/1.0.6/project-1.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/eclipse/ee4j/project/1.0.6/project-1.0.6.pom (13 kB at 370 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/eclipse/jetty/jetty-bom/9.4.49.v20220914/jetty-bom-9.4.49.v20220914.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/eclipse/jetty/jetty-bom/9.4.49.v20220914/jetty-bom-9.4.49.v20220914.pom (18 kB at 477 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/junit/junit-bom/5.8.2/junit-bom-5.8.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/junit/junit-bom/5.8.2/junit-bom-5.8.2.pom (5.6 kB at 166 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/jetbrains/kotlin/kotlin-bom/1.6.21/kotlin-bom-1.6.21.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/jetbrains/kotlin/kotlin-bom/1.6.21/kotlin-bom-1.6.21.pom (9.3 kB at 283 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/jetbrains/kotlinx/kotlinx-coroutines-bom/1.6.4/kotlinx-coroutines-bom-1.6.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/jetbrains/kotlinx/kotlinx-coroutines-bom/1.6.4/kotlinx-coroutines-bom-1.6.4.pom (4.3 kB at 113 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j-bom/2.17.2/log4j-bom-2.17.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j-bom/2.17.2/log4j-bom-2.17.2.pom (8.1 kB at 246 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/logging/logging-parent/5/logging-parent-5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/logging/logging-parent/5/logging-parent-5.pom (3.3 kB at 106 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/24/apache-24.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/24/apache-24.pom (20 kB at 597 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/io/micrometer/micrometer-bom/1.9.5/micrometer-bom-1.9.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/io/micrometer/micrometer-bom/1.9.5/micrometer-bom-1.9.5.pom (7.1 kB at 202 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/mockito/mockito-bom/4.5.1/mockito-bom-4.5.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/mockito/mockito-bom/4.5.1/mockito-bom-4.5.1.pom (3.0 kB at 90 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/io/netty/netty-bom/4.1.84.Final/netty-bom-4.1.84.Final.pom
Downloaded from central: https://repo.maven.apache.org/maven2/io/netty/netty-bom/4.1.84.Final/netty-bom-4.1.84.Final.pom (13 kB at 387 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/oss/oss-parent/7/oss-parent-7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/oss/oss-parent/7/oss-parent-7.pom (4.8 kB at 151 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/squareup/okhttp3/okhttp-bom/4.9.3/okhttp-bom-4.9.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/squareup/okhttp3/okhttp-bom/4.9.3/okhttp-bom-4.9.3.pom (3.0 kB at 68 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/oracle/database/jdbc/ojdbc-bom/21.5.0.0/ojdbc-bom-21.5.0.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/oracle/database/jdbc/ojdbc-bom/21.5.0.0/ojdbc-bom-21.5.0.0.pom (13 kB at 372 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/io/prometheus/simpleclient_bom/0.15.0/simpleclient_bom-0.15.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/io/prometheus/simpleclient_bom/0.15.0/simpleclient_bom-0.15.0.pom (5.8 kB at 165 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/io/prometheus/parent/0.15.0/parent-0.15.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/io/prometheus/parent/0.15.0/parent-0.15.0.pom (12 kB at 367 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/querydsl/querydsl-bom/5.0.0/querydsl-bom-5.0.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/querydsl/querydsl-bom/5.0.0/querydsl-bom-5.0.0.pom (7.2 kB at 231 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/io/r2dbc/r2dbc-bom/Borca-SR2/r2dbc-bom-Borca-SR2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/io/r2dbc/r2dbc-bom/Borca-SR2/r2dbc-bom-Borca-SR2.pom (3.8 kB at 116 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/io/projectreactor/reactor-bom/2020.0.24/reactor-bom-2020.0.24.pom
Downloaded from central: https://repo.maven.apache.org/maven2/io/projectreactor/reactor-bom/2020.0.24/reactor-bom-2020.0.24.pom (4.6 kB at 135 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/io/rest-assured/rest-assured-bom/4.5.1/rest-assured-bom-4.5.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/io/rest-assured/rest-assured-bom/4.5.1/rest-assured-bom-4.5.1.pom (5.8 kB at 171 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/io/rsocket/rsocket-bom/1.1.3/rsocket-bom-1.1.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/io/rsocket/rsocket-bom/1.1.3/rsocket-bom-1.1.3.pom (2.6 kB at 80 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/data/spring-data-bom/2021.2.5/spring-data-bom-2021.2.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/data/spring-data-bom/2021.2.5/spring-data-bom-2021.2.5.pom (5.7 kB at 162 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-framework-bom/5.3.23/spring-framework-bom-5.3.23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-framework-bom/5.3.23/spring-framework-bom-5.3.23.pom (5.7 kB at 42 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/integration/spring-integration-bom/5.5.15/spring-integration-bom-5.5.15.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/integration/spring-integration-bom/5.5.15/spring-integration-bom-5.5.15.pom (9.2 kB at 255 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/security/spring-security-bom/5.7.4/spring-security-bom-5.7.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/security/spring-security-bom/5.7.4/spring-security-bom-5.7.4.pom (5.7 kB at 150 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/session/spring-session-bom/2021.2.0/spring-session-bom-2021.2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/session/spring-session-bom/2021.2.0/spring-session-bom-2021.2.0.pom (3.1 kB at 83 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-maven-plugin/2.7.5/spring-boot-maven-plugin-2.7.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-maven-plugin/2.7.5/spring-boot-maven-plugin-2.7.5.pom (3.1 kB at 80 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-maven-plugin/2.7.5/spring-boot-maven-plugin-2.7.5.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-maven-plugin/2.7.5/spring-boot-maven-plugin-2.7.5.jar (107 kB at 2.0 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-clean-plugin/3.2.0/maven-clean-plugin-3.2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-clean-plugin/3.2.0/maven-clean-plugin-3.2.0.pom (5.3 kB at 161 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/35/maven-plugins-35.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/35/maven-plugins-35.pom (9.9 kB at 291 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/35/maven-parent-35.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/35/maven-parent-35.pom (45 kB at 1.2 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/25/apache-25.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/25/apache-25.pom (21 kB at 622 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-clean-plugin/3.2.0/maven-clean-plugin-3.2.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-clean-plugin/3.2.0/maven-clean-plugin-3.2.0.jar (36 kB at 991 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-resources-plugin/3.2.0/maven-resources-plugin-3.2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-resources-plugin/3.2.0/maven-resources-plugin-3.2.0.pom (8.1 kB at 252 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/34/maven-plugins-34.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/34/maven-plugins-34.pom (11 kB at 334 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/34/maven-parent-34.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/34/maven-parent-34.pom (43 kB at 1.2 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/23/apache-23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/23/apache-23.pom (18 kB at 449 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-resources-plugin/3.2.0/maven-resources-plugin-3.2.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-resources-plugin/3.2.0/maven-resources-plugin-3.2.0.jar (33 kB at 867 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-jar-plugin/3.2.2/maven-jar-plugin-3.2.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-jar-plugin/3.2.2/maven-jar-plugin-3.2.2.pom (7.5 kB at 241 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-jar-plugin/3.2.2/maven-jar-plugin-3.2.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-jar-plugin/3.2.2/maven-jar-plugin-3.2.2.jar (29 kB at 822 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-compiler-plugin/3.10.1/maven-compiler-plugin-3.10.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-compiler-plugin/3.10.1/maven-compiler-plugin-3.10.1.pom (13 kB at 371 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-compiler-plugin/3.10.1/maven-compiler-plugin-3.10.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-compiler-plugin/3.10.1/maven-compiler-plugin-3.10.1.jar (62 kB at 1.5 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-surefire-plugin/2.22.2/maven-surefire-plugin-2.22.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-surefire-plugin/2.22.2/maven-surefire-plugin-2.22.2.pom (5.0 kB at 147 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire/2.22.2/surefire-2.22.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire/2.22.2/surefire-2.22.2.pom (26 kB at 717 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/33/maven-parent-33.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/33/maven-parent-33.pom (44 kB at 1.2 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/21/apache-21.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/21/apache-21.pom (17 kB at 535 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-surefire-plugin/2.22.2/maven-surefire-plugin-2.22.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-surefire-plugin/2.22.2/maven-surefire-plugin-2.22.2.jar (41 kB at 1.1 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-install-plugin/2.5.2/maven-install-plugin-2.5.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-install-plugin/2.5.2/maven-install-plugin-2.5.2.pom (6.4 kB at 201 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/25/maven-plugins-25.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/25/maven-plugins-25.pom (9.6 kB at 308 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/24/maven-parent-24.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/24/maven-parent-24.pom (37 kB at 1.1 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/14/apache-14.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/14/apache-14.pom (15 kB at 432 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-install-plugin/2.5.2/maven-install-plugin-2.5.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-install-plugin/2.5.2/maven-install-plugin-2.5.2.jar (33 kB at 946 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-deploy-plugin/2.8.2/maven-deploy-plugin-2.8.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-deploy-plugin/2.8.2/maven-deploy-plugin-2.8.2.pom (7.1 kB at 223 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-deploy-plugin/2.8.2/maven-deploy-plugin-2.8.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-deploy-plugin/2.8.2/maven-deploy-plugin-2.8.2.jar (34 kB at 975 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-site-plugin/3.3/maven-site-plugin-3.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-site-plugin/3.3/maven-site-plugin-3.3.pom (21 kB at 631 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/24/maven-plugins-24.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/24/maven-plugins-24.pom (11 kB at 318 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/23/maven-parent-23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/23/maven-parent-23.pom (33 kB at 836 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/13/apache-13.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/13/apache-13.pom (14 kB at 451 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-site-plugin/3.3/maven-site-plugin-3.3.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-site-plugin/3.3/maven-site-plugin-3.3.jar (124 kB at 2.5 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/build-helper-maven-plugin/3.3.0/build-helper-maven-plugin-3.3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/build-helper-maven-plugin/3.3.0/build-helper-maven-plugin-3.3.0.pom (7.4 kB at 206 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/mojo-parent/65/mojo-parent-65.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/mojo-parent/65/mojo-parent-65.pom (35 kB at 938 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/junit/junit-bom/5.8.1/junit-bom-5.8.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/junit/junit-bom/5.8.1/junit-bom-5.8.1.pom (5.6 kB at 182 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/build-helper-maven-plugin/3.3.0/build-helper-maven-plugin-3.3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/build-helper-maven-plugin/3.3.0/build-helper-maven-plugin-3.3.0.jar (68 kB at 1.7 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/flywaydb/flyway-maven-plugin/8.5.13/flyway-maven-plugin-8.5.13.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/flywaydb/flyway-maven-plugin/8.5.13/flyway-maven-plugin-8.5.13.pom (4.7 kB at 141 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/flywaydb/flyway-parent/8.5.13/flyway-parent-8.5.13.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/flywaydb/flyway-parent/8.5.13/flyway-parent-8.5.13.pom (31 kB at 890 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/flywaydb/flyway-maven-plugin/8.5.13/flyway-maven-plugin-8.5.13.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/flywaydb/flyway-maven-plugin/8.5.13/flyway-maven-plugin-8.5.13.jar (130 kB at 2.5 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/pl/project13/maven/git-commit-id-plugin/4.9.10/git-commit-id-plugin-4.9.10.pom
Downloaded from central: https://repo.maven.apache.org/maven2/pl/project13/maven/git-commit-id-plugin/4.9.10/git-commit-id-plugin-4.9.10.pom (12 kB at 333 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/pl/project13/maven/git-commit-id-plugin-parent/4.9.10/git-commit-id-plugin-parent-4.9.10.pom
Downloaded from central: https://repo.maven.apache.org/maven2/pl/project13/maven/git-commit-id-plugin-parent/4.9.10/git-commit-id-plugin-parent-4.9.10.pom (12 kB at 352 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/oss/oss-parent/9/oss-parent-9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/oss/oss-parent/9/oss-parent-9.pom (6.6 kB at 219 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/pl/project13/maven/git-commit-id-plugin/4.9.10/git-commit-id-plugin-4.9.10.jar
Downloaded from central: https://repo.maven.apache.org/maven2/pl/project13/maven/git-commit-id-plugin/4.9.10/git-commit-id-plugin-4.9.10.jar (40 kB at 1.1 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/johnzon/johnzon-maven-plugin/1.2.19/johnzon-maven-plugin-1.2.19.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/johnzon/johnzon-maven-plugin/1.2.19/johnzon-maven-plugin-1.2.19.pom (4.0 kB at 118 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/johnzon/johnzon/1.2.19/johnzon-1.2.19.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/johnzon/johnzon/1.2.19/johnzon-1.2.19.pom (29 kB at 824 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/johnzon/johnzon-maven-plugin/1.2.19/johnzon-maven-plugin-1.2.19.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/johnzon/johnzon-maven-plugin/1.2.19/johnzon-maven-plugin-1.2.19.jar (36 kB at 874 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/jooq/jooq-codegen-maven/3.14.16/jooq-codegen-maven-3.14.16.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/jooq/jooq-codegen-maven/3.14.16/jooq-codegen-maven-3.14.16.pom (4.1 kB at 121 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/jooq/jooq-parent/3.14.16/jooq-parent-3.14.16.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/jooq/jooq-parent/3.14.16/jooq-parent-3.14.16.pom (28 kB at 774 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/jooq/jooq-codegen-maven/3.14.16/jooq-codegen-maven-3.14.16.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/jooq/jooq-codegen-maven/3.14.16/jooq-codegen-maven-3.14.16.jar (17 kB at 415 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/jetbrains/kotlin/kotlin-maven-plugin/1.6.21/kotlin-maven-plugin-1.6.21.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/jetbrains/kotlin/kotlin-maven-plugin/1.6.21/kotlin-maven-plugin-1.6.21.pom (5.9 kB at 167 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/jetbrains/kotlin/kotlin-project/1.6.21/kotlin-project-1.6.21.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/jetbrains/kotlin/kotlin-project/1.6.21/kotlin-project-1.6.21.pom (10 kB at 268 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/jetbrains/kotlin/kotlin-maven-plugin/1.6.21/kotlin-maven-plugin-1.6.21.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/jetbrains/kotlin/kotlin-maven-plugin/1.6.21/kotlin-maven-plugin-1.6.21.jar (80 kB at 1.9 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/liquibase/liquibase-maven-plugin/4.9.1/liquibase-maven-plugin-4.9.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/liquibase/liquibase-maven-plugin/4.9.1/liquibase-maven-plugin-4.9.1.pom (2.7 kB at 80 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/liquibase/liquibase-maven-plugin/4.9.1/liquibase-maven-plugin-4.9.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/liquibase/liquibase-maven-plugin/4.9.1/liquibase-maven-plugin-4.9.1.jar (108 kB at 2.2 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-antrun-plugin/3.0.0/maven-antrun-plugin-3.0.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-antrun-plugin/3.0.0/maven-antrun-plugin-3.0.0.pom (4.7 kB at 139 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-antrun-plugin/3.0.0/maven-antrun-plugin-3.0.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-antrun-plugin/3.0.0/maven-antrun-plugin-3.0.0.jar (39 kB at 975 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-assembly-plugin/3.3.0/maven-assembly-plugin-3.3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-assembly-plugin/3.3.0/maven-assembly-plugin-3.3.0.pom (16 kB at 463 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-assembly-plugin/3.3.0/maven-assembly-plugin-3.3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-assembly-plugin/3.3.0/maven-assembly-plugin-3.3.0.jar (242 kB at 3.7 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-dependency-plugin/3.3.0/maven-dependency-plugin-3.3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-dependency-plugin/3.3.0/maven-dependency-plugin-3.3.0.pom (16 kB at 477 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-dependency-plugin/3.3.0/maven-dependency-plugin-3.3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-dependency-plugin/3.3.0/maven-dependency-plugin-3.3.0.jar (187 kB at 3.6 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-release-plugin/2.5.3/maven-release-plugin-2.5.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-release-plugin/2.5.3/maven-release-plugin-2.5.3.pom (11 kB at 357 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/release/maven-release/2.5.3/maven-release-2.5.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/release/maven-release/2.5.3/maven-release-2.5.3.pom (5.0 kB at 162 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/27/maven-parent-27.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/27/maven-parent-27.pom (41 kB at 1.2 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/17/apache-17.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/17/apache-17.pom (16 kB at 502 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-release-plugin/2.5.3/maven-release-plugin-2.5.3.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-release-plugin/2.5.3/maven-release-plugin-2.5.3.jar (53 kB at 1.5 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-enforcer-plugin/3.0.0/maven-enforcer-plugin-3.0.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-enforcer-plugin/3.0.0/maven-enforcer-plugin-3.0.0.pom (7.7 kB at 247 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/enforcer/enforcer/3.0.0/enforcer-3.0.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/enforcer/enforcer/3.0.0/enforcer-3.0.0.pom (8.7 kB at 241 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-enforcer-plugin/3.0.0/maven-enforcer-plugin-3.0.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-enforcer-plugin/3.0.0/maven-enforcer-plugin-3.0.0.jar (27 kB at 798 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-failsafe-plugin/2.22.2/maven-failsafe-plugin-2.22.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-failsafe-plugin/2.22.2/maven-failsafe-plugin-2.22.2.pom (12 kB at 371 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-failsafe-plugin/2.22.2/maven-failsafe-plugin-2.22.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-failsafe-plugin/2.22.2/maven-failsafe-plugin-2.22.2.jar (294 kB at 4.7 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-help-plugin/3.2.0/maven-help-plugin-3.2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-help-plugin/3.2.0/maven-help-plugin-3.2.0.pom (11 kB at 305 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/33/maven-plugins-33.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/33/maven-plugins-33.pom (11 kB at 356 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-help-plugin/3.2.0/maven-help-plugin-3.2.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-help-plugin/3.2.0/maven-help-plugin-3.2.0.jar (86 kB at 2.3 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-invoker-plugin/3.2.2/maven-invoker-plugin-3.2.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-invoker-plugin/3.2.2/maven-invoker-plugin-3.2.2.pom (15 kB at 472 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-invoker-plugin/3.2.2/maven-invoker-plugin-3.2.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-invoker-plugin/3.2.2/maven-invoker-plugin-3.2.2.jar (129 kB at 2.7 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-javadoc-plugin/3.4.1/maven-javadoc-plugin-3.4.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-javadoc-plugin/3.4.1/maven-javadoc-plugin-3.4.1.pom (21 kB at 611 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-javadoc-plugin/3.4.1/maven-javadoc-plugin-3.4.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-javadoc-plugin/3.4.1/maven-javadoc-plugin-3.4.1.jar (523 kB at 6.9 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-shade-plugin/3.3.0/maven-shade-plugin-3.3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-shade-plugin/3.3.0/maven-shade-plugin-3.3.0.pom (13 kB at 407 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-shade-plugin/3.3.0/maven-shade-plugin-3.3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-shade-plugin/3.3.0/maven-shade-plugin-3.3.0.jar (141 kB at 3.5 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-source-plugin/3.2.1/maven-source-plugin-3.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-source-plugin/3.2.1/maven-source-plugin-3.2.1.pom (6.9 kB at 210 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-source-plugin/3.2.1/maven-source-plugin-3.2.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-source-plugin/3.2.1/maven-source-plugin-3.2.1.jar (32 kB at 975 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-war-plugin/3.3.2/maven-war-plugin-3.3.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-war-plugin/3.3.2/maven-war-plugin-3.3.2.pom (9.7 kB at 303 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-war-plugin/3.3.2/maven-war-plugin-3.3.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-war-plugin/3.3.2/maven-war-plugin-3.3.2.jar (83 kB at 2.4 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/versions-maven-plugin/2.10.0/versions-maven-plugin-2.10.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/versions-maven-plugin/2.10.0/versions-maven-plugin-2.10.0.pom (16 kB at 445 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/versions-maven-plugin/2.10.0/versions-maven-plugin-2.10.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/versions-maven-plugin/2.10.0/versions-maven-plugin-2.10.0.jar (316 kB at 5.9 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/xml-maven-plugin/1.0.2/xml-maven-plugin-1.0.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/xml-maven-plugin/1.0.2/xml-maven-plugin-1.0.2.pom (8.6 kB at 276 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/mojo-parent/40/mojo-parent-40.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/mojo-parent/40/mojo-parent-40.pom (34 kB at 1.1 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/xml-maven-plugin/1.0.2/xml-maven-plugin-1.0.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/xml-maven-plugin/1.0.2/xml-maven-plugin-1.0.2.jar (64 kB at 1.7 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/maven-metadata.xml
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-metadata.xml
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-metadata.xml (14 kB at 375 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/maven-metadata.xml (21 kB at 210 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/sonar-maven-plugin/maven-metadata.xml
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/sonar-maven-plugin/maven-metadata.xml (1.4 kB at 44 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/sonar-maven-plugin/4.0.0.4121/sonar-maven-plugin-4.0.0.4121.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/mojo/sonar-maven-plugin/4.0.0.4121/sonar-maven-plugin-4.0.0.4121.pom (1.1 kB at 24 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonarsource/scanner/maven/sonar-maven-plugin/4.0.0.4121/sonar-maven-plugin-4.0.0.4121.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonarsource/scanner/maven/sonar-maven-plugin/4.0.0.4121/sonar-maven-plugin-4.0.0.4121.pom (12 kB at 390 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonarsource/parent/parent/74.0.0.1768/parent-74.0.0.1768.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonarsource/parent/parent/74.0.0.1768/parent-74.0.0.1768.pom (32 kB at 961 kB/s)
[WARNING] The artifact org.codehaus.mojo:sonar-maven-plugin:jar:4.0.0.4121 has been relocated to org.sonarsource.scanner.maven:sonar-maven-plugin:jar:4.0.0.4121: SonarQube plugin was moved to SonarSource organisation
Downloading from central: https://repo.maven.apache.org/maven2/org/sonarsource/scanner/maven/sonar-maven-plugin/4.0.0.4121/sonar-maven-plugin-4.0.0.4121.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonarsource/scanner/maven/sonar-maven-plugin/4.0.0.4121/sonar-maven-plugin-4.0.0.4121.jar (63 kB at 1.8 MB/s)
[INFO] 
[INFO] ---------------------< com.example:chess-ai-game >----------------------
[INFO] Building chess-ai-game 1.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-web/2.7.5/spring-boot-starter-web-2.7.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-web/2.7.5/spring-boot-starter-web-2.7.5.pom (3.0 kB at 84 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter/2.7.5/spring-boot-starter-2.7.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter/2.7.5/spring-boot-starter-2.7.5.pom (3.1 kB at 102 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot/2.7.5/spring-boot-2.7.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot/2.7.5/spring-boot-2.7.5.pom (2.2 kB at 74 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-core/5.3.23/spring-core-5.3.23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-core/5.3.23/spring-core-5.3.23.pom (2.0 kB at 70 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-jcl/5.3.23/spring-jcl-5.3.23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-jcl/5.3.23/spring-jcl-5.3.23.pom (1.8 kB at 66 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-context/5.3.23/spring-context-5.3.23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-context/5.3.23/spring-context-5.3.23.pom (2.6 kB at 83 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-aop/5.3.23/spring-aop-5.3.23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-aop/5.3.23/spring-aop-5.3.23.pom (2.2 kB at 69 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-beans/5.3.23/spring-beans-5.3.23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-beans/5.3.23/spring-beans-5.3.23.pom (2.0 kB at 70 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-expression/5.3.23/spring-expression-5.3.23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-expression/5.3.23/spring-expression-5.3.23.pom (2.1 kB at 71 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-autoconfigure/2.7.5/spring-boot-autoconfigure-2.7.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-autoconfigure/2.7.5/spring-boot-autoconfigure-2.7.5.pom (2.1 kB at 69 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-logging/2.7.5/spring-boot-starter-logging-2.7.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-logging/2.7.5/spring-boot-starter-logging-2.7.5.pom (2.5 kB at 83 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/ch/qos/logback/logback-classic/1.2.11/logback-classic-1.2.11.pom
Downloaded from central: https://repo.maven.apache.org/maven2/ch/qos/logback/logback-classic/1.2.11/logback-classic-1.2.11.pom (9.7 kB at 334 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/ch/qos/logback/logback-parent/1.2.11/logback-parent-1.2.11.pom
Downloaded from central: https://repo.maven.apache.org/maven2/ch/qos/logback/logback-parent/1.2.11/logback-parent-1.2.11.pom (19 kB at 665 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/ch/qos/logback/logback-core/1.2.11/logback-core-1.2.11.pom
Downloaded from central: https://repo.maven.apache.org/maven2/ch/qos/logback/logback-core/1.2.11/logback-core-1.2.11.pom (4.2 kB at 144 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-api/1.7.36/slf4j-api-1.7.36.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-api/1.7.36/slf4j-api-1.7.36.pom (2.7 kB at 91 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-parent/1.7.36/slf4j-parent-1.7.36.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-parent/1.7.36/slf4j-parent-1.7.36.pom (14 kB at 470 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j-to-slf4j/2.17.2/log4j-to-slf4j-2.17.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j-to-slf4j/2.17.2/log4j-to-slf4j-2.17.2.pom (7.3 kB at 242 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j/2.17.2/log4j-2.17.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j/2.17.2/log4j-2.17.2.pom (73 kB at 2.1 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j-api/2.17.2/log4j-api-2.17.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j-api/2.17.2/log4j-api-2.17.2.pom (14 kB at 461 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/slf4j/jul-to-slf4j/1.7.36/jul-to-slf4j-1.7.36.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/slf4j/jul-to-slf4j/1.7.36/jul-to-slf4j-1.7.36.pom (991 B at 34 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/jakarta/annotation/jakarta.annotation-api/1.3.5/jakarta.annotation-api-1.3.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/jakarta/annotation/jakarta.annotation-api/1.3.5/jakarta.annotation-api-1.3.5.pom (16 kB at 520 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/jakarta/annotation/ca-parent/1.3.5/ca-parent-1.3.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/jakarta/annotation/ca-parent/1.3.5/ca-parent-1.3.5.pom (2.8 kB at 97 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/eclipse/ee4j/project/1.0.5/project-1.0.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/eclipse/ee4j/project/1.0.5/project-1.0.5.pom (13 kB at 454 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/yaml/snakeyaml/1.30/snakeyaml-1.30.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/yaml/snakeyaml/1.30/snakeyaml-1.30.pom (37 kB at 1.2 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-json/2.7.5/spring-boot-starter-json-2.7.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-json/2.7.5/spring-boot-starter-json-2.7.5.pom (3.1 kB at 100 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-web/5.3.23/spring-web-5.3.23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-web/5.3.23/spring-web-5.3.23.pom (2.2 kB at 71 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-databind/2.13.4.2/jackson-databind-2.13.4.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-databind/2.13.4.2/jackson-databind-2.13.4.2.pom (17 kB at 591 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/jackson-base/2.13.4/jackson-base-2.13.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/jackson-base/2.13.4/jackson-base-2.13.4.pom (9.9 kB at 366 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/jackson-bom/2.13.4/jackson-bom-2.13.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/jackson-bom/2.13.4/jackson-bom-2.13.4.pom (17 kB at 620 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-annotations/2.13.4/jackson-annotations-2.13.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-annotations/2.13.4/jackson-annotations-2.13.4.pom (6.1 kB at 225 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-core/2.13.4/jackson-core-2.13.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-core/2.13.4/jackson-core-2.13.4.pom (5.5 kB at 205 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jdk8/2.13.4/jackson-datatype-jdk8-2.13.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jdk8/2.13.4/jackson-datatype-jdk8-2.13.4.pom (2.6 kB at 89 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/module/jackson-modules-java8/2.13.4/jackson-modules-java8-2.13.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/module/jackson-modules-java8/2.13.4/jackson-modules-java8-2.13.4.pom (3.2 kB at 111 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jsr310/2.13.4/jackson-datatype-jsr310-2.13.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jsr310/2.13.4/jackson-datatype-jsr310-2.13.4.pom (4.9 kB at 158 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/module/jackson-module-parameter-names/2.13.4/jackson-module-parameter-names-2.13.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/module/jackson-module-parameter-names/2.13.4/jackson-module-parameter-names-2.13.4.pom (4.4 kB at 99 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-tomcat/2.7.5/spring-boot-starter-tomcat-2.7.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-tomcat/2.7.5/spring-boot-starter-tomcat-2.7.5.pom (3.1 kB at 92 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-core/9.0.68/tomcat-embed-core-9.0.68.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-core/9.0.68/tomcat-embed-core-9.0.68.pom (1.8 kB at 59 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-el/9.0.68/tomcat-embed-el-9.0.68.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-el/9.0.68/tomcat-embed-el-9.0.68.pom (1.5 kB at 53 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-websocket/9.0.68/tomcat-embed-websocket-9.0.68.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-websocket/9.0.68/tomcat-embed-websocket-9.0.68.pom (1.8 kB at 58 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-webmvc/5.3.23/spring-webmvc-5.3.23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-webmvc/5.3.23/spring-webmvc-5.3.23.pom (3.0 kB at 98 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/junit/junit/4.13.2/junit-4.13.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/junit/junit/4.13.2/junit-4.13.2.pom (27 kB at 872 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest-core/2.2/hamcrest-core-2.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest-core/2.2/hamcrest-core-2.2.pom (1.4 kB at 48 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest/2.2/hamcrest-2.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest/2.2/hamcrest-2.2.pom (1.1 kB at 42 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-web/2.7.5/spring-boot-starter-web-2.7.5.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter/2.7.5/spring-boot-starter-2.7.5.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-logging/2.7.5/spring-boot-starter-logging-2.7.5.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-autoconfigure/2.7.5/spring-boot-autoconfigure-2.7.5.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot/2.7.5/spring-boot-2.7.5.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-web/2.7.5/spring-boot-starter-web-2.7.5.jar (4.8 kB at 160 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/ch/qos/logback/logback-classic/1.2.11/logback-classic-1.2.11.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter/2.7.5/spring-boot-starter-2.7.5.jar (4.8 kB at 140 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/ch/qos/logback/logback-core/1.2.11/logback-core-1.2.11.jar
Downloaded from central: https://repo.maven.apache.org/maven2/ch/qos/logback/logback-classic/1.2.11/logback-classic-1.2.11.jar (232 kB at 2.4 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-api/1.7.36/slf4j-api-1.7.36.jar
Downloaded from central: https://repo.maven.apache.org/maven2/ch/qos/logback/logback-core/1.2.11/logback-core-1.2.11.jar (449 kB at 3.9 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j-to-slf4j/2.17.2/log4j-to-slf4j-2.17.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-logging/2.7.5/spring-boot-starter-logging-2.7.5.jar (4.8 kB at 37 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j-api/2.17.2/log4j-api-2.17.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-api/1.7.36/slf4j-api-1.7.36.jar (41 kB at 312 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/slf4j/jul-to-slf4j/1.7.36/jul-to-slf4j-1.7.36.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j-to-slf4j/2.17.2/log4j-to-slf4j-2.17.2.jar (18 kB at 121 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/jakarta/annotation/jakarta.annotation-api/1.3.5/jakarta.annotation-api-1.3.5.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/slf4j/jul-to-slf4j/1.7.36/jul-to-slf4j-1.7.36.jar (4.5 kB at 28 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-core/5.3.23/spring-core-5.3.23.jar
Downloaded from central: https://repo.maven.apache.org/maven2/jakarta/annotation/jakarta.annotation-api/1.3.5/jakarta.annotation-api-1.3.5.jar (25 kB at 136 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-jcl/5.3.23/spring-jcl-5.3.23.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-jcl/5.3.23/spring-jcl-5.3.23.jar (24 kB at 110 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/yaml/snakeyaml/1.30/snakeyaml-1.30.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/logging/log4j/log4j-api/2.17.2/log4j-api-2.17.2.jar (303 kB at 1.3 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-json/2.7.5/spring-boot-starter-json-2.7.5.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-json/2.7.5/spring-boot-starter-json-2.7.5.jar (4.7 kB at 18 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-databind/2.13.4.2/jackson-databind-2.13.4.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/yaml/snakeyaml/1.30/snakeyaml-1.30.jar (332 kB at 1.1 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-annotations/2.13.4/jackson-annotations-2.13.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-annotations/2.13.4/jackson-annotations-2.13.4.jar (76 kB at 224 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-core/2.13.4/jackson-core-2.13.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot/2.7.5/spring-boot-2.7.5.jar (1.5 MB at 4.0 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jdk8/2.13.4/jackson-datatype-jdk8-2.13.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-autoconfigure/2.7.5/spring-boot-autoconfigure-2.7.5.jar (1.7 MB at 4.3 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jsr310/2.13.4/jackson-datatype-jsr310-2.13.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jdk8/2.13.4/jackson-datatype-jdk8-2.13.4.jar (35 kB at 87 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/module/jackson-module-parameter-names/2.13.4/jackson-module-parameter-names-2.13.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-core/2.13.4/jackson-core-2.13.4.jar (375 kB at 908 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-tomcat/2.7.5/spring-boot-starter-tomcat-2.7.5.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-core/5.3.23/spring-core-5.3.23.jar (1.5 MB at 3.5 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-core/9.0.68/tomcat-embed-core-9.0.68.jar
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/module/jackson-module-parameter-names/2.13.4/jackson-module-parameter-names-2.13.4.jar (9.5 kB at 22 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-el/9.0.68/tomcat-embed-el-9.0.68.jar
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jsr310/2.13.4/jackson-datatype-jsr310-2.13.4.jar (121 kB at 277 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-websocket/9.0.68/tomcat-embed-websocket-9.0.68.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-tomcat/2.7.5/spring-boot-starter-tomcat-2.7.5.jar (4.8 kB at 11 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-web/5.3.23/spring-web-5.3.23.jar
Downloaded from central: https://repo.maven.apache.org/maven2/com/fasterxml/jackson/core/jackson-databind/2.13.4.2/jackson-databind-2.13.4.2.jar (1.5 MB at 3.2 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-beans/5.3.23/spring-beans-5.3.23.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-el/9.0.68/tomcat-embed-el-9.0.68.jar (256 kB at 501 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-webmvc/5.3.23/spring-webmvc-5.3.23.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-websocket/9.0.68/tomcat-embed-websocket-9.0.68.jar (279 kB at 544 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-aop/5.3.23/spring-aop-5.3.23.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-aop/5.3.23/spring-aop-5.3.23.jar (383 kB at 639 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-context/5.3.23/spring-context-5.3.23.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-beans/5.3.23/spring-beans-5.3.23.jar (699 kB at 1.1 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/spring-expression/5.3.23/spring-expression-5.3.23.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-webmvc/5.3.23/spring-webmvc-5.3.23.jar (1.0 MB at 1.6 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/junit/junit/4.13.2/junit-4.13.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-web/5.3.23/spring-web-5.3.23.jar (1.6 MB at 2.4 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest-core/2.2/hamcrest-core-2.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-expression/5.3.23/spring-expression-5.3.23.jar (289 kB at 421 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest/2.2/hamcrest-2.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest/2.2/hamcrest-2.2.jar (123 kB at 171 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest-core/2.2/hamcrest-core-2.2.jar (1.5 kB at 2.1 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/junit/junit/4.13.2/junit-4.13.2.jar (385 kB at 515 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/spring-context/5.3.23/spring-context-5.3.23.jar (1.3 MB at 1.7 MB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/tomcat/embed/tomcat-embed-core/9.0.68/tomcat-embed-core-9.0.68.jar (3.4 MB at 4.6 MB/s)
[INFO] 
[INFO] --- sonar-maven-plugin:4.0.0.4121:sonar (default-cli) @ chess-ai-game ---
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-sec-dispatcher/1.4/plexus-sec-dispatcher-1.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-sec-dispatcher/1.4/plexus-sec-dispatcher-1.4.pom (3.0 kB at 96 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/spice/spice-parent/12/spice-parent-12.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/spice/spice-parent/12/spice-parent-12.pom (6.8 kB at 227 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/4/forge-parent-4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/4/forge-parent-4.pom (8.4 kB at 280 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.5/plexus-utils-1.5.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.5/plexus-utils-1.5.5.pom (5.1 kB at 177 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.11/plexus-1.0.11.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.11/plexus-1.0.11.pom (9.0 kB at 320 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-cipher/1.4/plexus-cipher-1.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-cipher/1.4/plexus-cipher-1.4.pom (2.1 kB at 74 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonarsource/scanner/api/sonar-scanner-api/2.16.3.1081/sonar-scanner-api-2.16.3.1081.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonarsource/scanner/api/sonar-scanner-api/2.16.3.1081/sonar-scanner-api-2.16.3.1081.pom (5.2 kB at 152 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonarsource/scanner/api/sonar-scanner-api-parent/2.16.3.1081/sonar-scanner-api-parent-2.16.3.1081.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonarsource/scanner/api/sonar-scanner-api-parent/2.16.3.1081/sonar-scanner-api-parent-2.16.3.1081.pom (4.8 kB at 156 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonarsource/parent/parent/60.0.52/parent-60.0.52.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonarsource/parent/parent/60.0.52/parent-60.0.52.pom (32 kB at 939 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/commons-lang/commons-lang/2.6/commons-lang-2.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/commons-lang/commons-lang/2.6/commons-lang-2.6.pom (17 kB at 603 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/17/commons-parent-17.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/17/commons-parent-17.pom (31 kB at 1.0 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/7/apache-7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/7/apache-7.pom (14 kB at 498 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-sec-dispatcher/1.4/plexus-sec-dispatcher-1.4.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.5/plexus-utils-1.5.5.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-cipher/1.4/plexus-cipher-1.4.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/sonarsource/scanner/api/sonar-scanner-api/2.16.3.1081/sonar-scanner-api-2.16.3.1081.jar
Downloading from central: https://repo.maven.apache.org/maven2/commons-lang/commons-lang/2.6/commons-lang-2.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-sec-dispatcher/1.4/plexus-sec-dispatcher-1.4.jar (28 kB at 749 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-cipher/1.4/plexus-cipher-1.4.jar (13 kB at 365 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.5/plexus-utils-1.5.5.jar (251 kB at 5.7 MB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/commons-lang/commons-lang/2.6/commons-lang-2.6.jar (284 kB at 4.4 MB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonarsource/scanner/api/sonar-scanner-api/2.16.3.1081/sonar-scanner-api-2.16.3.1081.jar (625 kB at 8.8 MB/s)
[WARNING] 17:49:52.187 Using an unspecified version instead of an explicit plugin version may introduce breaking analysis changes at an unwanted time. It is highly recommended to use an explicit version, e.g. 'org.sonarsource.scanner.maven:sonar-maven-plugin:4.0.0.4121'.
[INFO] 17:49:52.235 Java 11.0.16 Oracle Corporation (64-bit)
[INFO] 17:49:52.236 Linux 5.15.154+ (amd64)
[INFO] 17:49:52.277 User cache: /root/.sonar/cache
[ERROR] 17:49:52.300 SonarQube server [http://localhost:9000] can not be reached
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  9.787 s
[INFO] Finished at: 2024-08-17T17:49:52Z
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal org.sonarsource.scanner.maven:sonar-maven-plugin:4.0.0.4121:sonar (default-cli) on project chess-ai-game: Unable to execute SonarScanner analysis: Fail to get bootstrap index from server: Failed to connect to localhost/0:0:0:0:0:0:0:1:9000: Connection refused (Connection refused) -> [Help 1]
[ERROR] 
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR] 
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException
Cleaning up project directory and file based variables 00:01
ERROR: Job failed: exit code 1
