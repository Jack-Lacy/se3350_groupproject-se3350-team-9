const LocalStrat = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initPassport(passport, getUser){
    const auth = async (username, password, done) => {
        const user = getUser(username);

        if (user === null){
            return done(null, false, {message: "User not found"});
        };
        
        try {
            if (await bcrypt.compare(password, user.password)){
                return done(null, user);
            }
            else {
                return done(null, false, {message: "Password is incorrect"});
            }
        } catch (error) {
            return error;
        }


    }

    passport.use(new LocalStrat(), auth);
    passport.serializeUser((user, done) = {

    });

    passport.deserializeUser((id, done) => {

    })
}

module.exports = initPassport;