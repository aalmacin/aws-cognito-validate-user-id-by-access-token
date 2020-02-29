const AWS = require('aws-sdk');

exports.validateUserId = (accessToken, userId, region = 'us-east-1') => {
    return new Promise(function(resolve, reject) {
        AWS.config.region = region;
        const cisp = new AWS.CognitoIdentityServiceProvider()
        cisp.getUser({ AccessToken: accessToken }, (err, data) => {
          if (!err) {
            const user = data.UserAttributes;
            const sub = user.find(u => u.Name === 'sub').Value;
            const success = userId === sub;
            resolve({success});
          } else {
            resolve({...err, error: true, success: false, accessToken});
          }
        })
    })
}
