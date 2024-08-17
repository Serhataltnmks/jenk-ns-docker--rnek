image: maven:3.8.6-eclipse-temurin-17

stages:
  - build
  - test
  - sonar

variables:
  SONAR_TOKEN: $SONAR_TOKEN_AI  # Sonar token GitLab CI/CD'den çekilecek

build:
  stage: build
  script:
    - echo "Building the project..."
    - mvn clean package

test:
  stage: test
  script:
    - echo "Running tests..."
    - mvn test

sonar:
  stage: sonar
  script:
    - echo "Running SonarQube analysis..."
    - mvn sonar:sonar -Dsonar.projectKey=chess-ai-game -Dsonar.host.url=https://4dbd-188-119-27-46.ngrok-free.app -Dsonar.login=$SONAR_TOKEN
  only:
    - master
