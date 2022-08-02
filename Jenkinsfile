pipeline {
    agent any 
    environment {
        DOCKERHUB=credentials('docker-cred')
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
                sh 'echo "$DOCKERHUB_PSW" | docker login -u $DOCKERHUB_USR --password-stdin'
                sh 'docker push miskin1702/iksirsi:latest'
            }
        }
    }
    post {
		always {
			sh 'docker logout'
		}
	}
}
