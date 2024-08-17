curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64



sudo chmod +x /usr/local/bin/gitlab-runner


sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner



sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner


sudo gitlab-runner register




















image: maven:3.8.6-jdk-11

stages:
  - build
  - test
  - sonarqube

variables:
  SONAR_HOST_URL: "http://{YOUR_SONARQUBE_SERVER}"
  SONAR_TOKEN: "sonar-token-ai"  # SonarQube Token

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
    - mvn sonar:sonar -Dsonar.projectKey=chess-ai-game
  only:
    - master

