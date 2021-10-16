import React from 'react';
import {useParams} from "react-router";

const ArticleDetail = ({articles}) => {
    let {id} = useParams();
    let article = articles.filter((item) => item.id === +id)[0];
    return (
        <div className={"article-detail"}>
            <h2>Article: {article.title}</h2>
            <h4>Category: {article.category}</h4>
            <span>Date: {article.date}</span>
            <p>Img: {article.img}</p>
            <p>Text: {article.text}</p>
        </div>
    )
}

export default ArticleDetail;
