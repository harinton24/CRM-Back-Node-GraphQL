const User = require('../models/User');
const bcryptjs = require('bcryptjs');

  
const resolvers = {
    Query:{
        getCurses:()=>"Algo"

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


        }
    }
};

module.exports = resolvers;