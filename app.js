image: maven:3.8.6-jdk-11

stages:
  - build
  - sonar

cache:
  paths:
    - .m2/repository

build:
  stage: build
  script:
    - mvn clean package
  artifacts:
    paths:
      - target/*.jar

sonarqube_analysis:
  stage: sonar
  script:
    - mvn sonar:sonar -Dsonar.projectKey=$SONAR_PROJECT_KEY -Dsonar.login=$SONAR_LOGIN
  only:
    - master
