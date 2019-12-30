const AWS = require('aws-sdk')
const cloudfront = new AWS.CloudFront()

const params = {
  DistributionId: 'E3V4ERMSCSIOH9',
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
