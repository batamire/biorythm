import ApolloClient, { InMemoryCache } from "apollo-boost";
import { GET_PEOPLE, People } from "./constants/people";
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
        birthday: GraphQLDate
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
        addPerson: async (_obj, args, { cache }) => {
          const query = GET_PEOPLE;
          const { people }: People = cache.readQuery({ query });
          await cache.writeQuery({
            query,
            data: {
              people: [
                ...people,
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
