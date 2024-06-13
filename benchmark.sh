echo "Timing with barrel file"

echo "Run #1"
(time -p node --test tests/* > /dev/null 2>&1)
echo "Run #2"
(time -p node --test tests/* > /dev/null 2>&1)
echo "Run #3"
(time -p node --test tests/* > /dev/null 2>&1)

echo "Timing with subpath imports"

echo "Run #1"
(time -p node --test tests-no-barrel/* > /dev/null 2>&1)
echo "Run #2"
(time -p node --test tests-no-barrel/* > /dev/null 2>&1)
echo "Run #3"
(time -p node --test tests-no-barrel/* > /dev/null 2>&1)

