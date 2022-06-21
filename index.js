const { ApolloServer} = require('apollo-server');
const typeDefs = require ('./src/schemas/UserSchema');
const resolvers = require ('./src/resolvers/UserResolver');

const conectDB = require('./src/config/db');


conectDB();


const server = new ApolloServer({
    typeDefs, 
    resolvers,
});


server.listen().then(({ url }) => {
  console.log(`Servidor corriendo en la direccion ${url}`);
});
