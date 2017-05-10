const fs = require('fs');

/*
* Available environments:
* - dev
* - prod
*/

const currentEnvironment = process.argv[2] || 'prod';

const commonEnvVars = {
  APP_NAME: 'APP',
  DEFAULT_LANGUAGE: 'en_GB',
  REDIRECT_ON_LOGOUT: 'true',
  SKIP_AUTH_CHECK: 'false',
};

const specificEnvVars = {
  dev: {
    APP_ENV: 'dev',
    API_ENDPOINT: 'https://reqres.in/api',
    LOGOUT_URL: 'https://github.com/toomuchdesign/react-boilerplate',
  },
  prod: {
    APP_ENV: 'prod',
    API_ENDPOINT: 'https://reqres.in/api',
    LOGOUT_URL: 'https://github.com/toomuchdesign/react-boilerplate',
  },
};

const mergedEnvVars = Object.assign({}, commonEnvVars, specificEnvVars[currentEnvironment]);

function convertEnvObjectToString(EnvObject) {
  const vars = EnvObject;
  // eslint-disable-next-line no-var
  var returnString = '';

  Object.keys(vars).forEach((key) => {
    returnString += `${key}=${vars[key]}\n`;
  });
  return returnString;
}

fs.writeFile('.env', convertEnvObjectToString(mergedEnvVars), (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`.env file generated with ${currentEnvironment} environment!`);
  return true;
});
