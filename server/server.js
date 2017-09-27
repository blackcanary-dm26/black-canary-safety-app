require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , session = require('express-session')
    , cors = require('cors')
    // , passport = require('passport')
    // , Auth0Strategy = require('passport-auth0')
    // , Auth0 = require('react-native-auth0')
    , app = express()
    , http = require('http')
    , server = http.createServer(app)
    , io = sockets(server)
    , port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
// app.use(express.static(__dirname + './../build')) //npm build to deploy app

massive({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: true
  }).then( db => {
    app.set('db', db); 
  })


  
//native auth0 authentication

// auth0
//   .webAuth
//   .authorize({scope: 'openid email', audience: 'https://blackcanarysafetyapp.auth0.com/userinfo'})
//   .then(credentials =>
//     console.log(credentials)
//     // Successfully authenticated
//     // Store the accessToken
//   )
//   .catch(error => console.log(error));


//   passport.use(new Auth0Strategy({
//     domain: process.env.AUTH_DOMAIN,
//     clientID: process.env.AUTH_CLIENT_ID,
//     clientSecret: process.env.AUTH_CLIENT_SECRET,
//     callbackURL: process.env.AUTH_CALLBACK
// },  function(accessToken, refreshToken, extraParams, profile, done) {
//         const db = app.get('db');

//         db.find_user([profile.identities[0].user_id])
//         .then( user => {
//             if(user[0]) {
//                 // console.log('user found',user)
//                 return done(null, {id: user[0].id})
//             } else {
//                 db.create_user([profile.name.givenName, profile.emails[0].value, profile.picture, profile.identities[0].user_id])
//                 .then(user => {
//                     return done(null, {id: user[0].id});
//                 })
//             }
//         })
//     }
// ));




//server listening for sockets  
server.listen(port, ()=> console.log(`Listening on port ${port}`));