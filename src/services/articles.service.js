const articleRepository = (axios) => {

  const getArticles = (offset, pageSize) => {

    return new Promise((resolve, reject) => {
      axios.get(`posts/${offset}/${pageSize}`)
        .then(res => {
          //successful return of posts
          localStorage.setItem('articles', res.data.Posts);
          resolve(res.data.Posts)
        })
        .catch(err => {
          if (err.response) {
            reject(err.response)
          }
        })
    })
  }

  const getArticle = (articleUrl) => {
    return new Promise((resolve, reject) => {
      axios.get(`posts/tag/${articleUrl}`)
        .then(res => resolve(res.data.article))
        .catch(err => {
          if (err.response) {
            reject(err.response)
          }
        })

    });
  }

  const getArticlesByTag = (tag, offset, pageSize) => {
    return new Promise((resolve, reject) => {
      axios.get(`/tags/${tag}/${offset}/${pageSize}`)
        .then(res => {
          localStorage.setItem('tag_articles', res.data.articles);
          resolve(res.data.articles)
        })
        .catch(err => {
          if (err.response) {
            reject(err.response)
          }
        })
    })
  }
  const getTags = () => {

    return new Promise((resolve, reject) => {

      axios.get('/tags').then(res => {
        localStorage.setItem('tags', res.data.tags);
        resolve(res.data.tags)
      }).catch(err => {
        if (err.response) {
          reject(err.response)
        }
      })
    })
  }


  return {
    getArticles,
    getArticle,
    getArticlesByTag,
    getTags
  }
}

export default articleRepository;