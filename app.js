curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64



sudo chmod +x /usr/local/bin/gitlab-runner


sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner



sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner


sudo gitlab-runner register




















image: maven:3.8.6-jdk-11

stages:
  - build
  - sonar_analysis

build:
  stage: build
  script:
    - mvn clean package
  artifacts:
    paths:
      - target/*.jar

sonar_analysis:
  stage: sonar_analysis
  script:
    - mvn sonar:sonar -Dsonar.projectKey=$SONAR_PROJECT_KEY -Dsonar.host.url=http://192.168.1.100:9000 -Dsonar.login=$SONAR_LOGIN

