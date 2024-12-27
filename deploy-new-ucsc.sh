#!/bin/sh

# If a command fails then the deploy stops
set -e

# Set the config file
cp config/_default/config-ucsc.toml config/_default/config.toml

# Build the project.
hugo -t my-academic # if using a theme, replace with `hugo -t <YOURTHEME>`

# after kinit/aklog
# might want to try rsync: https://unix.stackexchange.com/questions/29845/how-can-i-do-a-copy-if-changed-operation
# rsync -r -v public/ lgilpin@unix.ucsc.edu:/afs/cats.ucsc.edu/users/v/lgilpin/public_html/
scp -r public/* lgilpin@peopleweb-shell.prd.web.aws.ucsc.edu:/home/lgilpin/public_html
printf "\033[0;32mFinished loading files to UCSC.\033[0m\n"
