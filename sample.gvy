pipeline {
    agent any
    triggers {
        githubPullRequest {
            triggerPhrase 'retest this please'
            onlyTriggerPhrase false
            useGitHubHooks true
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
    }
}
