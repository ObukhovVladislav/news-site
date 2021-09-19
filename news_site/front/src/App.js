import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/Article";


const articles = [
    {'name': "Article 1", 'date': "2000"},
    {'name': "Article 2", 'date': "2001"},
    {'name': "Article 3", 'date': "2002"}
];

class App extends React.Component {
    constructor(props) {
        super(props);  // parent constructor
        this.state = {
            users: [],
            articles: [],
//            articles: articles,
            comments: []
        };
    }

    componentDidMount() {
        this.setState({
            articles: articles
        })
    }

    render() {
        console.log('state', this.state);
        return (
            <div>
                <Header />
                News-site
                <ArticleList articles={this.state.articles} />
                <Footer />
            </div>

        )
    }
}

export default App;