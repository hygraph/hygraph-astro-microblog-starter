import React, { useState } from "react";
import PostContent from "./PostContent";

const query = `query MyQuery($cursor: String!, $size: Int!) {
    postsConnection(after:$cursor, first:$size,  orderBy: createdAt_DESC) {
        postsArray:edges {
          cursor
          post: node {
            content {
              html
            }
            id
            createdAt
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
}`





const More = ({currentCursor, size=1}) => {
    const [posts, setPosts] = useState([])
    const [cursor, setCursor] = useState(currentCursor)
    const [hasNext, setHasNext] = useState(true)
    const [loading, setLoading] = useState(false)
    const getMore = async () => {
        setLoading(true)
        const response = await fetch(
            "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clcrreocx0oot01ur229906i3/master",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                query: query,
                variables: {
                    size: size,
                    cursor: cursor
                }
            }
        )});
        const json = await response.json();
        const { data } = json
        const { postsArray, pageInfo } = data.postsConnection
        
        setPosts([...posts, ...postsArray])
        setCursor(pageInfo.endCursor)
        setHasNext(pageInfo.hasNextPage)
        setLoading(false)
    }
    return (
        <>
        {posts.map((post) => (
            <div key={post.cursor} className="prose bg-white  max-w-4xl mb-4 p-4 rounded-md">
                <PostContent post={post.post} />
            </div>
        ))}
        {loading && <div className="bg-white mb-4 p-4 rounded-md text-center">Loading...</div>}
        {hasNext && <button className="bg-white mb-4 p-4 rounded-md" onClick={getMore}>Get More </button>}
       </>
    );
}

export default More