pipeline {
	agent any
	stages {
	stage('Clone Repository'){
	steps {
		git branch: 'main', url: 'https://github.com/Serhataltnmks/jenkins-docker-example.git'
		}
	}
	stage('Build Docker Image'){
	steps {
		script {
			dockerImage = docker.build("jenkins-docker-example")
			}
		}
	}
	stage('Run Docker Container'){
	steps {
		script {
			dockerImage.run("-p 3000:3000")
				}
			}
		}
	}
}

