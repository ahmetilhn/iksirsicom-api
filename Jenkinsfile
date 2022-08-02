pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
                sh 'docker --version'
                sh 'docker build . -t iksirsi:1'
            }
        }
    }
}
