#!/bin/bash

# Navigate to the directory containing the script using parameter expansion
script_dir="$(dirname -- "${BASH_SOURCE[0]}")"

# Get the current date in YYYY-MM-DD format
current_date=$(date +"%Y-%m-%d")

# Prompt for the suffix for the markdown file name
read -p "Enter the post title for the markdown file name: " name_suffix

# Full markdown file name
file_name="${current_date}-${name_suffix}.md"

# Directory to save the markdown file, relative to /bin
dir="${script_dir}/../src/content/blog/"

# Check if directory exists, create if not
mkdir -p "$dir"

# Current datetime in ISO 8601 format
current_datetime=$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")

# Create the markdown file with default frontmatter
cat <<EOL > "${dir}${file_name}"
---
title: New Post
postSlug: new-post
pubDatetime: ${current_datetime}
ogImage: ../../assets/images/2023
featured: false
draft: false
tags:
  - default
description: Placeholder description for new post
---
EOL

# Confirm file creation
echo "Markdown file ${file_name} has been created in ${dir}"
