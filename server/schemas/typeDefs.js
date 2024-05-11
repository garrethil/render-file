const typeDefs = `
type User {
    _id: ID
    username: String!
    email: String!
    password: String
    onMailList: Boolean
}
`;

module.exports = typeDefs;
