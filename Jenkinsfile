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
                echo 'deploy on windows'
            }
        }
    }
    
    post {
        always {
            publishHTML(
                [
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: false,
                    reportDir: 'coverage',
                    reportFiles: 'index.html',
                    reportName: 'HTML Report',
                    reportTitles: ''
                ]
            )
        }
    }
}
