const { gql} = require('apollo-server');


const typeDefs = gql`
    type Query{
        getCurses: String       
    }
`;

module.exports = typeDefs;