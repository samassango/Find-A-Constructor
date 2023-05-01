
    export const typeDefs = `
    type Author {
      surname: String
      name: String
    }
    type Query {
      authors: [Author]
    }
  `;
  
  const authors = [
      {
        name: 'Kate',
        surname: 'Chopin',
      },
      {
        name: 'Paul',
        surname: 'Auster',
      },
    ];
  
  export const resolvers = {
      Query: {
        authors: () => authors,
      },
    };