image: maven:3.8.6-jdk-11

variables:
  SONAR_HOST_URL: "https://4dbd-188-119-27-46.ngrok-free.app"
  SONAR_LOGIN: "sonar-token-ai"
  GIT_SUBMODULE_STRATEGY: recursive

stages:
  - build
  - test
  - sonar

cache:
  paths:
    - .m2/repository

before_script:
  - echo "Maven cache cleared"

build:
  stage: build
  script:
    - mvn clean package

test:
  stage: test
  script:
    - mvn test

sonar:
  stage: sonar
  script:
    - mvn sonar:sonar -Dsonar.projectKey=chess-ai-game -Dsonar.host.url=$SONAR_HOST_URL -Dsonar.login=$SONAR_LOGIN
  only:
    - master
