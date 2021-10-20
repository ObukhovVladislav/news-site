const Comment = ({comment}) => {
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

const CommentList = ({comments}) => {
//    console.log('comments', comments);
    return (
    <div className="comment-list">
        <h1>Comments</h1>
        <table className="comment-list__table">
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
            {comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
            </tbody>
        </table>
    </div>
    )
}


export default CommentList;