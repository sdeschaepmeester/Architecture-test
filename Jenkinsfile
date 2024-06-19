pipeline {
    agent any
    tools {
        nodejs 'ReactJS-Build-Deploy' // Remplace par le nom de l'installation NodeJS dans Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ton_nom_utilisateur/ton_projet.git'
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
                // Déployer les fichiers buildés
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
