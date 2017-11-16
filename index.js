'use strict';

class SetDeploymentDescription {
  constructor(serverless, options) {
    this.hooks = {
      // this is where we declare the hook we want our code to run
      'before:package:finalize': function() {
        setDescription(serverless);
      }
    };
  }
}

function setDescription(serverless) {
  // shorten the name of the "Resources" section of the template
  const resources = serverless.service.provider.compiledCloudFormationTemplate.Resources;
  const authorizerName = serverless.service.custom.authorizerName;
  const stageDescription = serverless.service.custom.stageDescription;
  for (let key in resources) {
    if (resources[key].Type === 'AWS::ApiGateway::Deployment' && stageDescription) {
      const desc = stageDescription;
      // this is the real feature: where we change deployment description
      resources[key].Properties.Description = desc;
    }

    if (resources[key].Type === 'AWS::ApiGateway::Authorizer' && authorizerName) {
      resources[key].Properties.Name = authorizerName;
    }
  }
}

// now we need to make our plugin object available to the framework to execute
module.exports = SetDeploymentDescription;
