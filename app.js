image: maven:3.8.6-eclipse-temurin-17

stages:
  - build
  - test
  - analyze

cache:
  paths:
    - .m2/repository

variables:
  SONAR_HOST_URL: "https://4dbd-188-119-27-46.ngrok-free.app"
  SONAR_TOKEN: "sonar-token-ai"

build:
  stage: build
  script:
    - echo "Maven cache cleared"
    - mvn clean install

test:
  stage: test
  script:
    - echo "Running tests"
    - mvn test

sonarqube-check:
  stage: analyze
  script:
    - mvn sonar:sonar -Dsonar.projectKey=chess-ai-game -Dsonar.host.url=$SONAR_HOST_URL -Dsonar.login=$SONAR_TOKEN
  only:
    - master
