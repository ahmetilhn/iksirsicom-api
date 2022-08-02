pipeline {
    agent any 
    environment {
        DOCKERHUB=credentials('dockerhub')
	BUILD_NUMBER="${currentBuild.number}"
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker --version'
                sh 'docker build . -t miskin1702/iksirsi:latest'
            }
        }
        stage('Push') {
            steps {
                sh 'echo $DOCKERHUB_PSW | docker login -u $DOCKERHUB_USR --password-stdin'
                sh 'docker push miskin1702/iksirsi:$BUILD_NUMBER'
            }
        }
    }
    post {
		always {
			sh 'docker logout'
		}
	}
}
