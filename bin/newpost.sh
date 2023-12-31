#!/bin/bash

# Navigate to the directory containing the script using parameter expansion
script_dir="$(dirname -- "${BASH_SOURCE[0]}")"

# Get the current date in YYYY-MM-DD format
current_date=$(date +"%Y-%m-%d")

# Get the current year in YYYY format
year=$(date +"%Y")

# Get the current month in MM format
month=$(date +"%m")

# Get the current day in DD format
day=$(date +"%d")

# Prompt for the suffix for the markdown file name
read -p "Enter the post title for the markdown file name: " name_suffix

title=${name_suffix}

# Replace spaces with dashes
name_suffix=${name_suffix// /-}

# Replace uppercase with lowercase
name_suffix=${name_suffix,,}

# Full markdown file name
file_name="${current_date}-${name_suffix}.md"

# Directory to save the markdown file, relative to /bin
dir="${script_dir}/../src/content/blog/${year}/${month}/"

# Check if directory exists, create if not
mkdir -p "${dir}"

# create ogImage directory string
ogImageDir="/assets/images/${year}/${month}/"

# Create ogImage directory if it doesn't exist
mkdir -p "${script_dir}/../static${ogImageDir}"

# Current datetime in ISO 8601 format
current_datetime=$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")

# Create the markdown file with default frontmatter
cat <<EOL > "${dir}${file_name}"
---
title: ${title}
postSlug: new-post
pubDatetime: ${current_datetime}
# ogImage: ${ogImageDir}
featured: false
draft: false
tags:
  - default
description: Placeholder description for new post
---
EOL

# Confirm file creation
echo "Markdown file ${file_name} has been created in ${dir}"
