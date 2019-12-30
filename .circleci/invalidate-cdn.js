const AWS = require('aws-sdk')
const cloudfront = new AWS.CloudFront()

const { PRODUCTION_DISTRIBUTION_ID } = process.env

const params = {
  DistributionId: PRODUCTION_DISTRIBUTION_ID,
  InvalidationBatch: {
    CallerReference: String(new Date().getTime()),
    Paths: {
      Quantity: '1',
      Items: ['/*']
    }
  }
}
cloudfront
  .createInvalidation(params, (err, data) => {
    if (err) {
      console.log(err, err.stack)
      throw err
    } else {
      console.log(data)
    }
  })
