const { gql} = require('apollo-server');


const typeDefsUsers = gql`
    type User{
        id: ID
        name: String
        lastname: String
        email: String
        createdate: String
    }

    type Token{
         token: String
    }

    type Product{
        id: ID
        name: String
        existence: Int
        price: Float
        createdate: String
    }

    input UserInput{
        name: String!
        lastname: String!
        email: String!
        password: String!
    }

    input AuthInput{
        email: String!
        password:String!
    }

    input ProductInput{
        name: String!
        existence: Int!
        price: Float!
    }

    type Query{
        #Users
        getUser(token: String!): User

        #Products
        getProducts:[Product]
    }

    type Mutation{
        #Users
        newUser(input: UserInput): User
        authUser(input: AuthInput): Token

        #Products
        newProduct(input: ProductInput): Product
    }

`;

module.exports = typeDefsUsers;