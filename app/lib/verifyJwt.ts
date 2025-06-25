import { createRemoteJWKSet, jwtVerify, JWTVerifyResult } from "jose"

// const miloginJWKS = createRemoteJWKSet(
//   new URL("https://miloginqa.michigan.gov/v1.0/endpoint/default/.well-known/jwks")
// )

// export async function verifyMILoginIdToken(
//   token: string
// ): Promise<JWTVerifyResult["payload"]> {
//   const { payload } = await jwtVerify(token, miloginJWKS, {
//     issuer:   "https://miloginqa.michigan.gov/v1.0/endpoint/default",
//     audience: process.env.NEXT_PUBLIC_MILOGIN_CLIENT_ID,
//     algorithms: ["RS256"],
//   });
//   return payload;
// }

  const cognitoJWKS = createRemoteJWKSet(
    new URL(`https://cognito-idp.us-east-1.amazonaws.com/us-east-1_m2KpPkSDQ/.well-known/jwks.json`)
  )

  export async function verifyCognitoIdToken(token: string) {
    const { payload } = await jwtVerify(token, cognitoJWKS, {
      issuer: `https://cognito-idp.us-east-1.amazonaws.com/us-east-1_m2KpPkSDQ`,
      audience: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
      algorithms: ["RS256"],
    });

    // Optionally verify token_use claim
    if (payload.token_use !== 'id') {
      throw new Error('Token is not an ID token');
    }

    return payload;
  }