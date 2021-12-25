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
import LoginForm from "./components/LoginForm";
import axios from "axios";

const API_URL = "http://localhost:8000";
const getResourceURL = (suffix) => `${API_URL}/api/${suffix}/`;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            articles: [],
            comments: [],
            accessToken: undefined,
        };
    }

    componentDidMount() {
        axios
        .get(getResourceURL("users"))
        .then((result) => {
            this.setState({
                users: result.data
            })
        })
        .catch((error) => console.log(error));
        axios
        .get(getResourceURL("articles"))
        .then((result) => {
            this.setState({
                articles: result.data
            })
        })
        .catch((error) => console.log(error));
        axios
        .get(getResourceURL("comments"))
        .then((result) => {
            this.setState({
                comments: result.data
            })
        })
        .catch((error) => console.log(error));

    }

    login(username, password){
        console.log('do login', username, password);
        axios
        .post(getResourceURL("token"),
            {"username": username, "password": password})
        .then((result) => {
            let refreshToken = result.data.refresh;
            let accessToken = result.data.access;
            this.saveTokens(refreshToken, accessToken)
            this.setState({accessToken: accessToken}, this.saveTokens)
        })
        .catch((error) => console.log(error));
    }

    saveTokens(refreshToken, accessToken) {
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessToken', accessToken);
        console.log('login result:', localStorage.getItem('accessToken'));
    }

    getHeaders() {

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
                    <Route exact path="/login">
                        <LoginForm login={(username, password) => this.login(username, password)} />
                    </Route>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default App;