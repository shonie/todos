#!/bin/sh

id=2

expected=$(curl -H "Content-Type: application/json" $TODOS_REMOTE_URL/$id)

response=$(curl -L $TODOS_API_URL/$id)

if [ "$response" = "$expected" ]; then
  echo "Pass. API content matches with remote."
  exit 0
else
  echo "Failed. API content does not match with remote."
  exit 1
fi