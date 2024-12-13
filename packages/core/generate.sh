#!/bin/bash

# Get all directory names from src/modules/admin and store directly in array
array=($(find ./src/modules/admin -maxdepth 1 -type d -exec basename {} \; | grep -v "admin"))

# Generate services for each folder
for folder in "${array[@]}"
do
    if [ ! -z "$folder" ]; then
        echo "Generating service for $folder"
        mkdir -p ./src/modules/admin/$folder/entities
    fi
done

