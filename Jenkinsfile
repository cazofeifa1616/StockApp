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
                bat 'rd /S /Q node_modules 2>nul'
                // bat 'rd /S /Q C:\\jenkins\\var\\www\\zeusui-prod'
                // bat 'mkdir zeusui-prod'
                // bat 'cd zeusui-prod'
                bat 'xcopy C:\\Users\\Byron\\.jenkins\\workspace\\pipeline-example-from-scm C:\\jenkins\\var\\www\\zeusui-prod'
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
