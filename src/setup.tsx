import ApolloClient, { InMemoryCache } from "apollo-boost";
// import { GraphQLDateTime } from "graphql-iso-date";

// CSS
import "./App.css";

const client = new ApolloClient({
  uri: "", // no real graphql server, only local state
  cache: new InMemoryCache(),
  clientState: {
    typeDefs: `
      type Person {
        id: ID
        name: String
        birthday: GraphQLDateTime
      }
      type Query {
        people: [Person]
      }
      type Mutation {
        addPerson(id: ID, name: String!, birthday: String): [Person]
      }
    `,
    defaults: {
      people: []
    },
    resolvers: {
      Mutation: {
        addPerson: async (_obj, args, { cache, getCacheKey }) => {
          // console.log("ARGS", args);
          await cache.writeData({
            data: {
              people: [
                {
                  ...args,
                  __typename: "Person"
                }
              ]
            }
          });
          return null;
        }
      }
    }
  }
});

export { client };
