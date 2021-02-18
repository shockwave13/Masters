declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      SASS_PATH: string;
      REACT_APP_AUDIENCE: string;
      REACT_APP_AUTH0_DOMAIN: string;
      REACT_APP_AUTH0_WEB_CLIENT_ID: string;
      REACT_APP_AUTH0_MOBILE_CLIENT_ID: string;
      REACT_APP_GRAPHQL: string;
      REACT_APP_GA: string;
      REACT_APP_GTAG: string;
      REACT_APP_REFERRER_PARAM: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }