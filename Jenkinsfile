pipeline {
    agent any
    
    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                echo 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                bat netstat -ano | findStr 3001
            }
        }
    }
}
