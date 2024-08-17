image: maven:3.8.6-jdk-11

stages:
  - build
  - test
  - sonarqube

variables:
  SONAR_HOST_URL: "http://192.168.1.100:9000"  # Buraya SonarQube sunucunuzun IP adresini girin
  SONAR_TOKEN: "sonar-token-ai"

build:
  stage: build
  script:
    - mvn clean package

test:
  stage: test
  script:
    - mvn test

sonarqube:
  stage: sonarqube
  script:
    - mvn sonar:sonar -Dsonar.projectKey=chess-ai-game -Dsonar.host.url=$SONAR_HOST_URL -Dsonar.login=$SONAR_TOKEN
  only:
    - master
