pipeline {
    agent any
    tools {
        nodejs 'NodeJS-18' //! Instance jenkins
    }
    environment {
        GIT_CREDENTIALS = credentials('github-credentials') //! Id credential github
        CLOUDFLARE_TOKEN = credentials('cloudflare-token') //! Token Cloudflare
        ACCOUNT_ID = '299bc3f0f3a022ec1d5d73c3949dd268'
        PROJECT_NAME = 'architecture-test'
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
                sh 'tar -czf build.tar.gz -C build .'
            }
        }
        stage('Deploy') {
            steps {
                // Commandes pour déployer, ex. vers S3 ou FTP
                sh '''
                curl -X POST "https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}/direct_upload" \
                     -H "Authorization: Bearer ${CLOUDFLARE_TOKEN}" \
                     -F "manifest=@manifest.json" \
                     -F "upload=@build.tar.gz"
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
