#!/bin/sh

update="\"completed\": true"

id=3

response=$(curl -d "{ $update }" -H "Content-Type: application/json" -L -X PATCH $TODOS_API_URL/$id)

echo $response

# test if a $update is a substring of $response
if [[ "$response"=*"$update"* ]]; then
  echo "Pass. Todo $id was successfully updated."
  exit 0
else
  echo "Failed. Todo $id update failed."
  exit 1
fi