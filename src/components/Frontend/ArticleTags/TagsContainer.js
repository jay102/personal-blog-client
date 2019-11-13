import React, { Component } from 'react';
import TagsView from './TagsView'
import axios from 'axios'
import Articles from '../Articles/Article'
import { TemplateFiles } from '../../../App'
import articles_service from '../../../services/articles.service'
import { Container, Link, lightColors, darkColors } from 'react-floating-action-button'

const repository = articles_service(axios)
class TagsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [] || localStorage.getItem('tag_articles'),
      offset: 0,
      pageSize: 10
    }
    this.tag = this.props.match.params.tag
  }


  componentDidMount() {
    const { offset, pageSize } = this.state;
    this.getArticle(this.tag, offset, pageSize);
  }
  componentDidUpdate(prevProps, prevState) {
    const { offset, pageSize } = this.state;
    if (this.state.offset !== prevState.offset) {
      this.getArticle(this.tag, offset, pageSize);
    }
  }
  increment = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => ({
      offset: prevState.offset + 10,
    }));

  }
  decrement = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => ({
      offset: prevState.offset - 10,
    }));

  }

  getArticle = async (tag, offset, pageSize) => {
    try {
      const articles = await repository.getArticlesByTag(tag, offset, pageSize)
      this.setState({ articles })
    } catch (err) {
      if (err.response) {
        console.log(err.response)
      }
    }
  }

  render() {
    const Posts = this.state.articles.map(articles => {
      return (
        <TemplateFiles.Consumer key={articles.id}>
          {data => (
            <Articles {...articles} admin={data.admin} />
          )}
        </TemplateFiles.Consumer>
      );
    })
    return (
      <>
        <Container>
          <Link
            tooltip="Home"
            href="/"
            icon="fas fa-home"
            styles={{ backgroundColor: darkColors.grey, color: lightColors.white }}
          />
        </Container>
        <TagsView
          paginate={{ increment: this.increment, decrement: this.decrement }}
          offset={this.state.offset}
          Posts={Posts}
          tag={this.tag}
          {...this.state} />
      </>
    );
  }
}

export default TagsContainer;