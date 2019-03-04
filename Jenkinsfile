pipeline {
    agent any
    
    environment {
        CI = 'true'
    }

    stages {
        stage('Build on linux') {
            agent {
                label 'linux'
            }
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build on windows') {
            agent {
                label 'windows'
            }
            steps {
                bat 'npm install'
            }
        }
        
        stage('Test on linux') {
            agent {
                label 'linux'
            }
            steps {
                sh 'npm test'
            }
        }
        
        stage('Test on windows') {
            agent {
                label 'windows'
            }
            steps {
                bat 'npm test'
            }
        }
        
        stage('Deploy on linux') {
            agent {
                label 'linux'
            }
            steps {
                echo 'deploy on linux'
            }
        }
        
        stage('Deploy on windows') {
            agent {
                label 'windows'
            }
            steps {
                echo 'deploy on windows'
            }
        }
    }
}
