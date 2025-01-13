#!/bin/bash

# Check if a target directory is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <target_directory>"
  exit 1
fi

# Target directory
TARGET_DIR=$1

# Create the target directory if it doesn't exist
mkdir -p "$TARGET_DIR/templates"

# Create files in the target directory
touch "$TARGET_DIR/templates/book.eta"
touch "$TARGET_DIR/templates/books.eta"
touch "$TARGET_DIR/app.js"
touch "$TARGET_DIR/app-run.js"
touch "$TARGET_DIR/bookController.js"
touch "$TARGET_DIR/bookService.js"

echo "Project structure created successfully in $TARGET_DIR!"

