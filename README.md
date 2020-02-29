# How to use

## Installation

```
  npm install aws-cognito-validate-user-id-by-access-token
```

## Usage

Replace:

* `ACCESS_TOKEN_FROM_COGNITO` with the access token you get from AWS Cognito 
* `SUB_FROM_COGNITO` with the the sub/user id of the user in AWS Cognito User Pools

```js

  const validateUserId = require('aws-cognito-validate-user-id-by-access-token');

  validateUserId(ACCESS_TOKEN_FROM_COGNITO, SUB_FROM_COGNITO).then(res => {
    // ... do something
  })

```


## As a Lambda layer

```
  mkdir nodejs
  cd nodejs
  npm init -y
  npm install aws-cognito-validate-user-id-by-access-token
```

Then `zip` the nodejs folder and upload to lambda
