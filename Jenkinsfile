pipeline {
    agent any 
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'yarn --version'
                sh 'docker --version'
            }
        }
    }
}
