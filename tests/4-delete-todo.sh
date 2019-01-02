#!/bin/sh

id=1

response=$(curl -X "DELETE" $TODOS_API_URL/$id)

if [[ "$response" ]]; then
  echo "Pass. Todo $id was successfully deleted."
  exit 0
else
  echo "Failed. Todo $id deletion failed."
  exit 1
fi