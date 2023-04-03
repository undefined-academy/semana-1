#!/bin/bash

# Remove all files with the name '*Zone.Identifier'
find . -name "*Zone.Identifier" -exec rm -rf {} \;
