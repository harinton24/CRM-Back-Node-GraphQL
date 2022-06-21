const { ApolloServer} = require('apollo-server');
const typeDefs = require ('./src/schemas/schema1');
const resolvers = require ('./src/resolvers/resolver1');


const server = new ApolloServer({
    typeDefs, 
    resolvers,
});


server.listen().then(({ url }) => {
  console.log(`Servidor corriendo en la direccion ${url}`);
});
