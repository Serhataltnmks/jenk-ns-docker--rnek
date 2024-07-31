pipeline {
	agent any
	stages {
	stage('Clone Repository'){
	steps {
		git branch: 'main', url: 'https://github.com/Serhataltnmks/jenkins-docker-example.git'
		}
	}
	stage('Buîld Docker Image'){
	steps {
		script {
			dockeImage = docker.build("jenkins-docker-example")
			}
		}
	}
	stage('Run Docker Container'){
	steps{
		script {
			dockerImage.run("-p 3000:3000")
				}
			}
		}
	}
}

