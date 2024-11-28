#!/bin/bash
set -e

# This script is used to clean up the node_modules directory from any package in packages/ that is not referenced by any package in e2e-common/

# Get a list of all packages in packages/
PACKAGES=$(find ./packages -maxdepth 1 -type d -name '*' -exec basename {} \;)

echo "Packages in packages/:"
echo "$PACKAGES"


# Remove the unreferenced packages from node_modules/
for package in $PACKAGES; do
    echo "Removing $package from node_modules/"
    rm -rf ./packages/$package/node_modules
done

#

