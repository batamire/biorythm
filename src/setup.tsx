import ApolloClient from "apollo-boost";
import { GraphQLDateTime } from "graphql-iso-date";

// CSS
import "./App.css";

const client = new ApolloClient({
  uri: "", // no real graphql server, only local state
  clientState: {
    typeDefs: `
      type Person {
        name: String
        birthday: GraphQLDateTime
      }
      type Query {
        people: [Person]
      }
      type Mutation {
        updatePeople(people: [Person]!)
      }
    `,
    defaults: {
      people: []
    },
    resolvers: {
      Mutation: {
        updatePeople: async (_obj, { people }, { cache, getCacheKey }) => {
          await cache.writeData({ data: { people } });
          return null;
        }
      }
    }
  }
});

export { client };
