pipeline {
    agent any
    
    environment {
        CI = 'true'
    }

    stages {
        
        stage('Build') {
            steps {
                // bat 'npm install'
                echo 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                // bat 'npm test'
                echo 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                // bat 'npm run build'
                bat 'if exist node_modules rd /S /Q node_modules'
                bat 'xcopy /y /s ".\*" C:\\jenkins\\var\\www\\zeusui-prod /E'
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
