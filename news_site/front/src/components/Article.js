const Article = (article) => {
//    console.log('article', article);
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
        <table className={"article-list"}>
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
    )
}


export default ArticleList;