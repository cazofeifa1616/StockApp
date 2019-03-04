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
                bat 'rd /S /Q node_modules'
                bat 'cd C:/jenkins/var/www/zeusui-prod'
                bat 'xcopy /y C:\\Users\\Byron\\.jenkins\\workspace\\pipeline-example-from-scm /e'
            }
        }
    }
    
    post {
        always {
            deleteDir()
        }
    }
}
