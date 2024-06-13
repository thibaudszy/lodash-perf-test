#!/bin/bash

# Function to capture the user time
get_total_time() {
  { time -p node --test $1 > /dev/null 2>&1; } 2>&1 | grep "real" | awk '{print $2}'
}

echo "Timing with barrel file"

# Initialize arrays to hold user times
barrel_times=()
subpath_times=()

# Run tests with barrel file
for i in {1..3}; do
  user_time=$(get_total_time "tests-with-barrel/*")
  barrel_times+=($user_time)
done

echo "Timing with subpath imports"

# Run tests with subpath imports
for i in {1..3}; do
  user_time=$(get_total_time "tests-no-barrel/*")
  subpath_times+=($user_time)
done

# Print the results in a table format
echo ""
echo "Results:"
echo "-------------------------------------------"
echo "|                 | Barrel (s)| Subpath (s)|"
echo "|-----------------|-----------|------------|"

for i in {0..2}; do
  printf "| Run #%d          | %s     | %s       |\n" $((i + 1)) ${barrel_times[i]} ${subpath_times[i]}
done

echo "--------------------------------------------"
