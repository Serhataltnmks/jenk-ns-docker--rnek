stages:
  - build
  - test
  - sonar

sonar:
  stage: sonar
  image: maven:3.8.1-jdk-11
  script:
    - mvn verify sonar:sonar -Dsonar.projectKey="chess-ai-game" -Dsonar.host.url="https://sonarqube.example.com" -Dsonar.login="$SONAR_TOKEN"
  only:
    - merge_requests
    - master
  variables:
    SONAR_TOKEN: "chess1" # Jenkins'te ayarladığınız token adı
