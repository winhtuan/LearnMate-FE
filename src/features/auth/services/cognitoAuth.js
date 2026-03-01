import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

// Lazy-initialize the pool to avoid crashing at module load
// when env vars are missing or placeholder values.
let userPool = null;

function getUserPool() {
  if (!userPool) {
    const poolId = import.meta.env.VITE_COGNITO_USER_POOL_ID;
    const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;

    if (!poolId || !clientId) {
      throw new Error(
        "Cognito is not configured. Set VITE_COGNITO_USER_POOL_ID and VITE_COGNITO_CLIENT_ID in .env.local"
      );
    }

    userPool = new CognitoUserPool({
      UserPoolId: poolId,
      ClientId: clientId,
    });
  }
  return userPool;
}

export function cognitoLogin(email, password) {
  return new Promise((resolve, reject) => {
    let pool;
    try {
      pool = getUserPool();
    } catch (err) {
      return reject(err);
    }

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const user = new CognitoUser({
      Username: email,
      Pool: pool,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (session) => {
        const tokens = {
          idToken: session.getIdToken().getJwtToken(),
          accessToken: session.getAccessToken().getJwtToken(),
          refreshToken: session.getRefreshToken().getToken(),
        };
        resolve(tokens);
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
}

export function cognitoSignUp(email, password, name, birthdate) {
  return new Promise((resolve, reject) => {
    let pool;
    try {
      pool = getUserPool();
    } catch (err) {
      return reject(err);
    }

    const attributeList = [
      { Name: "email", Value: email },
      { Name: "name", Value: name },
      { Name: "birthdate", Value: birthdate },
    ];

    pool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.user);
      }
    });
  });
}

export function cognitoConfirmSignUp(email, code) {
  return new Promise((resolve, reject) => {
    let pool;
    try {
      pool = getUserPool();
    } catch (err) {
      return reject(err);
    }

    const user = new CognitoUser({ Username: email, Pool: pool });

    user.confirmRegistration(code, true, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
