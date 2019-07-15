import ApolloClient, { InMemoryCache } from "apollo-boost";
import { GET_PEOPLE, People, Person } from "./constants/people";
// import { persistCache } from "apollo-cache-persist";
// import { GraphQLDateTime } from "graphql-iso-date";

// CSS
import "./app.css";

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
        person($id: ID): Person!
        people: [Person]
      }
      type Mutation {
        addPerson(id: ID, name: String!, birthday: String): [Person]
      }
    `,
    defaults: {
      people: [
        {
          id: "1",
          name: "Mirko Kirović",
          birthday: "1982-11-23",
          __typename: "Person"
        }
      ]
    },
    resolvers: {
      Query: {
        person: (_, { id }, { cache }) => {
          const { people } = cache.readQuery({ query: GET_PEOPLE });
          return people.find((p: Person) => p.id === id);
        }
      },
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
