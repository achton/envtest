#!/bin/env bash

# Remove old build
rm -rf .next/

# Compile using experimental NextJS build mode
echo "Building NextJS app (Compile step) ..."
npm run next:compile
echo "Done building NextJS app (Compile step)."

# Export a test env var
export TEST_VAR="value-from-build-script"
export NEXT_PUBLIC_TEST_VAR="value-from-build-script    "

# Run experimental generate command
echo "Generating NextJS app (Generate step) ..."
npm run next:generate
echo "Done generating NextJS app (Generate step)."

# Start the server
npm run start
