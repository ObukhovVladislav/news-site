import React from 'react';
import {useParams} from "react-router";

const ArticleDetail = ({articles}) => {
    let {id} = useParams();
    console.log('id', id);
    console.log('articles', articles);
    let article = articles.filter((item) => item.id === +id)[0];
    console.log('this article', article);
    return (
        <h3>Article</h3>
    )
}

export default ArticleDetail;