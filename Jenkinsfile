pipeline {
  agent any
      tools {nodejs "node"}

  stages {
    stage('Cloning Git') {
      steps {
        git branch: 'main', url: "https://github.com/deividcingolani/cypress-dashboard.git"
      }
    }

    stage('Install dependencies') {
        steps {
            sh 'npm ci'
        }
    }

    stage('Test Cypress') {
       steps {
             sh 'npm run $script'
       }
    }
  }
}