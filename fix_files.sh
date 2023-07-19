#!/bin/bash

# Define the target directories
target_dirs=("github-profiles")

for target_dir in "${target_dirs[@]}"; do
  # Check if the target directory exists
  if [ -d "$target_dir" ]; then
    # Rename folder names, replacing '.' with '(dot)' inside the target directory
    find "$target_dir" -mindepth 1 -type d -name "*.*" -exec sh -c '
      for folder; do
        new_name="$(echo "$folder" | sed "s/\./(dot)/")"
        mv -- "$folder" "$new_name"
      done
    ' sh {} +
    
    # Go into the directory
    cd "$target_dir"
    
    # Remove all files that match the .gitignore file.
    # WARNING: This will permanently delete files!
    # Always do a dry run first by using the -n flag, like so: git clean -nXd
    git clean -Xd
  else
    echo "The target directory \"$target_dir\" does not exist. Please check the path."
  fi
  
  # Go back to the previous directory
  cd -
done
