pipeline {
    agent any

    environment {
        SONARQUBE_URL = 'http://localhost:9000'
        SONARQUBE_TOKEN = 'chess1'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'chess', url: 'https://gitlab.com/serhataltnmks/chess-ai-game.git'
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'mvn sonar:sonar -Dsonar.projectKey=chess-ai-game -Dsonar.login=$SONARQUBE_TOKEN'
                }
            }
        }
        stage('Run') {
            steps {
                sh 'mvn spring-boot:run'
            }
        }
    }
}
