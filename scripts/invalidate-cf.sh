#!/bin/sh

DISTRIBUTION_ID=E3V4ERMSCSIOH9

aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"