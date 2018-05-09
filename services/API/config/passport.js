const PassportJWT = require('passport-jwt'),
    ExtractJWT = PassportJWT.ExtractJwt,
    Strategy = PassportJWT.Strategy,
    config = require('./index'),
    models = require('@Budg/app/setup');

module.exports = (passport) => {
    const User = models.User;
    const parameters = {
        secretOrKey: config.secret,
        jwtFromReqeust: ExtractJWT.fromAuthHeaderAsBearerToken()
    };

    passport.use(new Strategy(parameters, (payload, done)=> {
        User.findOne({id: payload.id}, (error, user) => {
            if (error) return done(error, false);
            if (user) return done(null, user);
            else done(null,false)
        });
    }));
}