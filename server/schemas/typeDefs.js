const typeDefs = `
type Content {
    _id: ID
    videoId: String
    title: String
    desc: String
}

type Query {
    content: [Content]
}
`;

module.exports = typeDefs;
