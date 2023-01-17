const PostContent = ({ post }) => {

const { content, id, slug, createdAt } = post

const dateString = new Date(createdAt).toLocaleDateString("en-US", {
    dateStyle: "full",
})
const timeString = new Date(createdAt).toLocaleTimeString("en-US", {
    timeStyle: "short",
})

return (
    <>
    <div dangerouslySetInnerHTML={{__html: content.html}}></div>
    <time dateTime="{createdAt}"><a href={`/posts/${slug}`}>{dateString} at {timeString}</a></time>
    </>
)
}

export default PostContent