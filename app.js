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
            tools {
                // Make sure the tool name matches exactly what you configured in Jenkins
                sonarQubeScanner 'SonarQubeScanner'
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'mvn sonar:sonar -Dsonar.projectKey=chess-ai-game -Dsonar.login=chess2'
                }
            }
        }
        stage('Run') {
            when {
                expression { return currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                sh 'mvn spring-boot:run'
            }
        }
    }
}
