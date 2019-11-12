import React, { Component } from 'react';
import articlesRepository from '../../../services/articles.service'
import { TemplateFiles } from '../../../App'
import ArticleView from './ArticleView'
import Article from './Article'
import axios from 'axios'

const repository = articlesRepository(axios)
class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [] || localStorage.getItem('articles'),
            offset: 0,
            pageSize: 2
        }
    }
    componentDidMount() {
        const { offset, pageSize } = this.state;
        this.getArticles(offset, pageSize);
    }
    componentDidUpdate(prevProps, prevState) {
        const { offset, pageSize } = this.state;
        if (this.state.offset !== prevState.offset) {
            this.getArticles(offset, pageSize);
        }
    }
    getArticles = async (offset, pageSize) => {
        try {
            const posts = await repository.getArticles(offset, pageSize)
            this.setState({
                articles: posts
            })
        } catch (err) {
            console.log(err)
        }
    }
    increment = (e) => {
        e.preventDefault();
        this.setState((prevState, props) => ({
            offset: prevState.offset + 2,
        }));
    }
    decrement = (e) => {
        e.preventDefault();
        this.setState((prevState, props) => ({
            offset: prevState.offset - 2,
        }));
    }

    render() {
        const Posts = this.state.articles.map(articles => {
            return (
                <TemplateFiles.Consumer key={articles.id}>
                    {data => (
                        <Article {...articles} admin={data.admin} />
                    )}
                </TemplateFiles.Consumer>
            );
        })
        return (
            <TemplateFiles.Consumer>
                {value => (
                    <ArticleView
                        paginate={{ increment: this.increment, decrement: this.decrement }}
                        offset={this.state.offset}
                        header_style="masthead"
                        Posts={Posts} mystyle={{
                            backgroundImage: "url(" + value.siteData.Main.bg + ")"
                        }} data={value.siteData.Main} />)}
            </TemplateFiles.Consumer>
        );
    }

}
export default Articles;