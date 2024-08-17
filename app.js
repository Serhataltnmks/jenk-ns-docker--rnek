pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://gitlab.com/yourusername/chess-ai-game.git'
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Run') {
            steps {
                sh 'mvn spring-boot:run'
            }
        }
    }
}
