import {NavLink as Link} from "react-router-dom";
import React from "react";

const Article = ({article}) => {
    return(
        <tr className="article-row">
            <td>
                {article.id}
            </td>
            <td>
                <Link to={`/articles/detail/${article.id}`} className="nav-item nav-link">
                        {article.title}
                </Link>
            </td>
            <td>
                {article.date}
            </td>
            <td>
                {article.text}
            </td>
            <td>
                <Link to={`/articles/delete/${article.id}`} className="nav-item nav-link">
                        delete
                </Link>
            </td>
        </tr>
    )
}

const ArticleList = ({articles}) => {
    return (
    <div className="article-list">
        <h1>Articles</h1>
        <table className="article-list__table">
            <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>date</th>
                <th>text</th>
                <th>actions</th>
            </tr>
            </thead>
            <tbody>
            {articles.map((article) => <Article key={article.id} article={article}/>)}
            </tbody>
        </table>
    </div>
    )
}


export default ArticleList;