import React from 'react';
import {useParams} from "react-router";

const ArticleDetail = ({articles}) => {
    let {id} = useParams();
    let article = articles.filter((item) => item.id === +id)[0];
    return (
        <div className={"article-detail"}>
            <span>Date: {article.date}</span>
            <h2>Article: {article.title}</h2>
            <h4>Category: {article.category}</h4>
            <p>Img: {article.img}</p>
            <p>Text: {article.text}</p>
        </div>
    )
}

export default ArticleDetail;
