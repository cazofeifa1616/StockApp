pipeline {
    agent any
    
    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                // bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                // bat 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo netstat -ano | findStr "3001"
            }
        }
    }
}
