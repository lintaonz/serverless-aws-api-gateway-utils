# serverless-aws-api-gateway-utils

## Description

Add some useful AWS API Gateway deployment features which Serverless is missing.

1. [AWS::ApiGateway::Deployment](http://docs.aws.amazon.com/pt_br/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html) description
1. [AWS::ApiGateway::Authorizer](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html) name

## Requirements

[Serverless Framework](https://github.com/serverless/serverless) 1.0 or higher

## Installation

```
npm i serverless-aws-api-gateway-utils
```

## Configuration

### serverless.yml

```yaml
provider:
  name: aws
  runtime: nodejs6.10

plugins:
  - serverless-aws-api-gateway-utils

custom:
  authorizerName: my-authorizer
  stageDescription: "My deployment stage description"
```
### Supported runtimes
* nodejs6.10

# Authors

Created and maintained by Tao Lin (lamsyi99@gmail.com)

# License

MIT License (see [LICENSE](https://github.com/lintaonz/serverless-aws-api-gateway-utils/blob/master/LICENSE))