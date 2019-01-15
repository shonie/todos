#!/bin/sh

id=1

expected=$(cat $PWD/fixtures/todo-$id.json)

response=$(curl -L $TODOS_API_URL/$id)

if [ "$response" = "$expected" ]; then
  echo "Pass. API content matches with remote."
  exit 0
else
  echo "Failed. API content does not match with remote."
  exit 1
fi