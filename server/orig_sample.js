// const express= require('express')
// const {ApolloServer}= require('@apollo/server')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const {expressMiddleware}= require('@apollo/server/express4')

// async function startServer(){
//     const app= express();
//     const server = new ApolloServer({
//         typeDefs:`
//             type Todo {
//                 id: ID!
//                 title: String!
//                 completed : Boolean
//             }
//             type Query {
//                 getTodos: [Todo]
//             }
//         `,
//         resolvers: {
//             Query: {
//                 getTodos: () => [
//                     { id: "1", title: "Learn GraphQL", completed: false },
//                     { id: "2", title: "Build a project", completed: true }
//                 ]
//             }
//         }
//     });
    
//     await server.start();
    
//     app.use(bodyParser.json());
//     app.use(cors());


//     // app.use('/graphql',expressMiddleware(server));
//     app.use('/graphql', expressMiddleware(server, {
//         context: async ({ req }) => ({}) // ✅ This fixes the req.body issue
//     }));
    

//     app.listen(8000,()=>console.log('Server started at PORT 8000'))
// }

// startServer();