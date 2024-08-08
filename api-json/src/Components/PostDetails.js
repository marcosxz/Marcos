import React from 'react'

function PostDetails({ post }) {
    if (!post) {
        return <div>Slecione um post para ver os detalhes</div>
    }
    return (
        <div>
            <h2>{post.tittle}</h2>
            <p>{post.body}</p>
        </div>

    )
}

export default PostDetails