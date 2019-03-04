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
                // bat 'rd /S /Q node_modules'
                bat 'cd C:\\jenkins\\var\\www'
                bat 'rd /S /Q zeusui-prod'
                // bat 'mkdir zeusui-prod'
                // bat 'cd zeusui-prod'
                // bat 'xcopy C:\\Users\\Byron\\.jenkins\\workspace\\pipeline-example-from-scm /e'
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
