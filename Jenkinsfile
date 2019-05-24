pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                echo("hello from Pipeline");
                sh 'npm --version'
            }
        }
    }
}
