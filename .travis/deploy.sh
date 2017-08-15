#!/bin/bash

# print outputs and exit on first failure
set -xe

if [ $TRAVIS_BRANCH == "master" ] ; then

    # setup ssh agent, git config and remote
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/travis_rsa
    ssh -o "StrictHostKeyChecking no" almandsky@192.241.204.199 "./deploy.sh"

elif [ $TRAVIS_BRANCH == "staging" ] ; then

    # setup ssh agent, git config and remote
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/travis_rsa
    ssh -o "StrictHostKeyChecking no" almandsky@192.241.204.199 "./deploy.sh"

else

    echo "No deploy script for branch '$TRAVIS_BRANCH'"

fi
