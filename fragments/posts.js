export const postsFragment = `
pageInfo {
    hasNextPage
    endCursor
}
postsArray: edges {
    cursor
    post: node {
        slug
        id
        createdAt
        content {
            html
        }
    }
}`;

export const postFragment = `
id
slug
content {
    html
}
createdAt
`;
