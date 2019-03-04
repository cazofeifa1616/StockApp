pipeline {
    agent any
    
    environment {
        CI = 'true'
    }

    stages {
        
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                bat 'npm run build'
                bat 'rmdir node_modules'
            }
        }
    }
    
    post {
        always {
            // deleteDir()
            echo 'finished'
        }
    }
}
