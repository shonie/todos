#!/bin/sh

expected=$(cat $PWD/fixtures/todos.json)

response=$(curl -L $TODOS_API_URL)

if [ "$response" = "$expected" ]; then
  echo "Pass. API content matches with remote."
  exit 0
else
  echo "Failed. API content does not match with remote."
  exit 1
fi