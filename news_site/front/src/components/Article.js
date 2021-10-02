const Article = (article) => {
    return(
        <tr className="article-row">
            <td>
                {article.id}
            </td>
            <td>
                {article.title}
            </td>
            <td>
                {article.date}
            </td>
        </tr>
    )
}

const ArticleList = (articles) => {
//    console.log('articles', articles);
    return (
    <div className="article-list">
        <h1>Articles</h1>
        <table className="article-list__table">
            <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>date</th>
            </tr>
            </thead>
            <tbody>
                {articles.articles.map(Article)}
            </tbody>
        </table>
    </div>
    )
}


export default ArticleList;