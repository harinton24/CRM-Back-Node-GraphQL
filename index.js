const { ApolloServer} = require('apollo-server');
const typeDefs = require ('./src/schemas/Schemas');
const resolvers = require ('./src/resolvers/Resolvers');


const conectDB = require('./src/config/db');


conectDB();


const server = new ApolloServer({
    typeDefs, 
    resolvers,

});


server.listen().then(({ url }) => {
  console.log(`Servidor corriendo en la direccion ${url}`);
});
