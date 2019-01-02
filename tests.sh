#!/bin/sh

export TODOS_API_URL=http://$HOST:$PORT/api/todos

# find tests, located in tests directory
tests=$(find ./tests -iname "*.sh" | sort -h)

passed=$((0))

failed=$((0))

for test in $tests
do
  echo Running $test

  # execute test script
  sh $test

  # $? reads the exit status of the last test executed.
  exit_code="$?"

  # -ne is an operator of algebraical inequality
  if [ "$exit_code" -ne 0 ]; then
    ((failed++))
  else
    ((passed++))
  fi

  # simple indentation
  echo ""
done

echo "Passed: $passed"
echo "Failed: $failed"