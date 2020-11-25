var jwt = require("express-jwt");
var jwks = require("jwks-rsa");

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://dev-crg4pmj4.us.auth0.com/.well-known/jwks.json",
    }),
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER,
    algorithms: ["RS256"],
  });

module.exports = jwtCheck;
