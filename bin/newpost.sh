#!/bin/bash

# Navigate to the directory containing the script
script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Get the current date in YYYY-MM-DD format
current_date=$(date +"%Y-%m-%d")

# Prompt for the suffix for the markdown file name
read -p "Enter the suffix for the markdown file name: " name_suffix

# Full markdown file name
file_name="${current_date}-${name_suffix}.md"

# Directory to save the markdown file, relative to /bin
dir="${script_dir}/../src/content/blog/"

# Check if directory exists, create if not
mkdir -p $dir

# Current datetime in ISO 8601 format
current_datetime=$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")

# Create the markdown file with default frontmatter
echo "---" > "${dir}${file_name}"
echo "title: New Post" >> "${dir}${file_name}"
echo "postSlug: new-post" >> "${dir}${file_name}"
echo "pubDatetime: ${current_datetime}" >> "${dir}${file_name}"
echo "ogImage: ../../assets/images/2023" >> "${dir}${file_name}"
echo "featured: false" >> "${dir}${file_name}"
echo "draft: false" >> "${dir}${file_name}"
echo "tags:" >> "${dir}${file_name}"
echo "  - default" >> "${dir}${file_name}"
echo "description: Placeholder description for new post" >> "${dir}${file_name}"
echo "---" >> "${dir}${file_name}"

# Confirm file creation
echo "Markdown file ${file_name} has been created in ${dir}"
