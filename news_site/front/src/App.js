import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserList from "./components/User";
import ArticleList from "./components/Article";
import ArticleDetail from "./components/ArticleDetail";
import CommentList from "./components/Comment";


const users = [
    {
        "id": 1,
        "username": "user1",
        "img": null,
        "gender": "m"
    },
    {
        "id": 2,
        "username": "user2",
        "img": null,
        "gender": "m"
    },
    {
        "id": 3,
        "username": "user3",
        "img": null,
        "gender": "m"
    },
    {
        "id": 4,
        "username": "user4",
        "img": null,
        "gender": "m"
    },
    {
        "id": 5,
        "username": "user5",
        "img": null,
        "gender": "m"
    },
    {
        "id": 6,
        "username": "user6",
        "img": null,
        "gender": "m"
    },
    {
        "id": 7,
        "username": "user7",
        "img": null,
        "gender": "m"
    },
    {
        "id": 8,
        "username": "user8",
        "img": null,
        "gender": "m"
    },
    {
        "id": 9,
        "username": "user9",
        "img": null,
        "gender": "m"
    },
    {
        "id": 10,
        "username": "user10",
        "img": null,
        "gender": "m"
    },
    {
        "id": 11,
        "username": "admin",
        "img": null,
        "gender": "m"
    }
];

const articles = [
    {
        "id": 1,
        "title": "Новость 1",
        "category": "IT",
        "img": null,
        "short_text": "Короткий текст 1",
        "text": "Текст 1",
        "date": "2021-09-12T12:57:50.016324+05:00"
    },
    {
        "id": 2,
        "title": "Новость 2",
        "category": "CE",
        "img": null,
        "short_text": "Короткий текст 2",
        "text": "Текст 2",
        "date": "2021-09-12T13:02:47.816941+05:00"
    },
    {
        "id": 3,
        "title": "Новость 3",
        "category": "SY",
        "img": null,
        "short_text": "Короткий текст 3",
        "text": "Текст 3",
        "date": "2021-09-12T13:06:17.104615+05:00"
    }
];

const comments = [
    {
        "id": 1,
        "text": "Текст комментария 1",
        "created": "2021-09-12T12:58:30+05:00",
        "article": 1,
        "name": [
            1
        ]
    },
    {
        "id": 2,
        "text": "Текст комментария 2",
        "created": "2021-09-12T13:02:51+05:00",
        "article": 2,
        "name": [
            1,
            2
        ]
    },
    {
        "id": 3,
        "text": "Текст комментария 3",
        "created": "2021-09-12T13:06:22+05:00",
        "article": 3,
        "name": [
            5,
            6,
            7,
            8
        ]
    }
];


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            articles: [],
//            articles: articles,
            comments: []
        };
    }

    componentDidMount() {
        this.setState({
            users: users,
            articles: articles,
            comments: comments
        })
    }

    render() {
        console.log('state', this.state);
        return (
            <div className="main">
                <Router>
                    <Header />
                    <Navbar />
                    <Route exact path="/users">
                        <UserList users={this.state.users} />
                    </Route>
                    <Route exact path="/articles">
                        <ArticleList articles={this.state.articles} />
                    </Route>
                    <Route exact path="/articles/detail/:id">
                        <ArticleDetail articles={this.state.articles} />
                    </Route>
                    <Route exact path="/comments">
                        <CommentList comments={this.state.comments} />
                    </Route>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default App;