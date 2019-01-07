#!/bin/sh

todo=$(cat $PWD/fixtures/new-todo.json)

response=$(curl --data-binary @$PWD/fixtures/new-todo.json -H "Content-Type: application/json" -L -X POST $TODOS_API_URL)

if [ "$response" ]; then
  echo "Pass. New todo was created."
  exit 0
else
  echo "Failed. Todo creation failed."
  exit 1
fi