#!/bin/sh

DISTRIBUTION_ID=ELL1569YNVY73

echo "Starting invalidation"

aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "Ended invalidation"
