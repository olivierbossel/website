# composer update
echo ""
echo "======================================"
echo "Composer update"
echo "======================================"
php composer.phar update
echo ""

# start php
echo ""
echo "======================================"
echo "Starting PHP"
echo "======================================"
apache2-foreground
echo ""
