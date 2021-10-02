const Comment = (comment) => {
//    console.log('comment', comment);
    return(
        <tr className="article-row">
            <td>
                {comment.id}
            </td>
            <td>
                {comment.article}
            </td>
            <td>
                {comment.name}
            </td>
            <td>
                {comment.text}
            </td>
            <td>
                {comment.created}
            </td>
        </tr>
    )
}

const CommentList = (comments) => {
//    console.log('comments', comments);
    return (
        <table className={"comment-list"}>
            <thead>
            <tr>
                <th>id</th>
                <th>article</th>
                <th>user id</th>
                <th>text</th>
                <th>created</th>
            </tr>
            </thead>
            <tbody>
            {comments.comments.map(Comment)}
            </tbody>
        </table>
    )
}


export default CommentList;