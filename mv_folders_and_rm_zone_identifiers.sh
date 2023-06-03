#!/bin/bash

# Define the target directory
target_dir="github-profiles"

# Check if the target directory exists
if [ -d "$target_dir" ]; then
  # Rename folder names, replacing '.' with '(dot)' inside the target directory
  find "$target_dir" -mindepth 1 -type d -name "*.*" -exec sh -c '
    for folder; do
      new_name="$(echo "$folder" | sed "s/\./(dot)/")"
      mv -- "$folder" "$new_name"
    done
  ' sh {} +

  # Remove all files with the name '*Zone.Identifier'
  find . -name "*Zone.Identifier" -exec rm -rf {} \;
else
  echo "The target directory \"$target_dir\" does not exist. Please check the path."
fi