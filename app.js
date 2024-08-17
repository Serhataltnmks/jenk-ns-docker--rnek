stages:
  - clone
  - build
  - sonar

variables:
  SONAR_PROJECT_KEY: "chess-ai-game"
  SONAR_LOGIN: "sonar-token-ai"

cache:
  paths:
    - .m2/repository

clone_repository:
  stage: clone
  script:
    - git clone https://gitlab.com/serhataltnmks/chess-ai-game.git

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
