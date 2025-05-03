const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const bodyParser = require('body-parser');

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

async function startServer() {
    const app = express();

    // Setup CORS with stricter rules (✅ production-safe)
    app.use(cors({
        origin: 'http://localhost:3000', // ✅ Only allow specific origin
        credentials: true
    }));
    
    app.use(bodyParser.json());

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        formatError: (err) => {
            // ✅ Centralized error logging
            console.error('GraphQL Error:', err);
            return {
                message: err.message,
                code: err.extensions?.code || 'INTERNAL_SERVER_ERROR'
            };
        }
    });

    await server.start();

    app.use('/graphql', expressMiddleware(server, {
        context: async ({ req }) => {
            // ✅ Add user, token, etc. here if needed
            return {};
        }
    }));


    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`));
}

startServer().catch((err) => {
    console.error('Server failed to start:', err);
});
