pipeline {
    agent any

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
            environment {
                SONAR_TOKEN = credentials('sonar-token-ai')
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "mvn sonar:sonar -Dsonar.projectKey=chess-ai-game -Dsonar.login=${SONAR_TOKEN}"
                }
            }
        }
    }
}
