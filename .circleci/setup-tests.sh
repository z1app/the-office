sed 's/stg/testes/g' ./serverless.yml > ./serverless.test.yml
rm ./serverless.yml
mv ./serverless.test.yml ./serverless.yml