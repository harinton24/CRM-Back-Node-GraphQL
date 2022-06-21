const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config({path:'.env'});

const createToken =(user, secret, expiresIn )=>{
    
    const {id, email, name, lastname} = user;

    return jwt.sign({id, email, name,lastname}, secret, {expiresIn});

}

  
const resolvers = {
    Query:{
        getUser: async (_,{token})=>{
            const userId = await jwt.verify(token, process.env.SECRET);

            return userId;
        }

    },
    Mutation:{
        newUser: async(_,{input})=>{
            const {email, password} = input;

            const userExist= await User.findOne({email}); 
            if(userExist){
                throw new Error('User already exists');
            }

            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);

            try{
                const user = new User(input);
                user.save();
                return user;
            }catch(error){
                console.log(error);
            }
        },

        authUser:async (_, {input})=>{
            
            const {email, password} = input;

            const userExist = await User.findOne({email});
            if(!userExist){
                throw new Error('User not exists');
            }

            const correctPassword = await bcryptjs.compare(password, userExist.password);
            if(!correctPassword){
                throw new Error('Incorrect Password');
            }

            return{
                token: createToken(userExist, process.env.SECRET, '24h')
            }
        }
    }
};

module.exports = resolvers;