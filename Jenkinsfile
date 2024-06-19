pipeline {
    agent any
    tools {
        nodejs 'NodeJS-18' //! Instance jenkins
    }
    environment {
        GIT_CREDENTIALS = credentials('github-credentials') //! Id credential github
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sdeschaepmeester/Architecture-test.git', credentialsId: 'github-credentials'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                // Commandes pour déployer, ex. vers S3 ou FTP
                sh '''
                aws s3 sync build/ s3://ton-bucket-s3/ --delete
                '''
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
        }
    }
}
