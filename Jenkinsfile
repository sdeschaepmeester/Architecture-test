pipeline {
    agent any
    tools {
        nodejs 'NodeJS-18' // Installation NodeJS
    }
    environment {
        GIT_CREDENTIALS = credentials('github-credentials') // ID credential GitHub
        CLOUDFLARE_TOKEN = credentials('cloudflare-token') // Token Cloudflare
        CLOUDFLARE_DEPLOY_HOOK_URL = 'https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/40fce885-c0ba-4390-a842-3a8c4cf5ac42' // URL de Deploy Hook
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
                // Commandes pour déployer vers Cloudflare Pages
                script {
                    def response = sh(script: "curl -X POST ${CLOUDFLARE_DEPLOY_HOOK_URL} \
                                -H 'Authorization: Bearer ${CLOUDFLARE_TOKEN}' \
                                -F 'content=@build.tar.gz'", returnStdout: true)
                    echo "Response from Cloudflare Deploy Hook: ${response}"
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
        }
    }
}