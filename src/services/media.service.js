const mediaRepository = (axios) => {

  const getAllMedia = () => {
    return new Promise((resolve, reject) => {
      axios.get(`/media`)
        .then(res => {
          localStorage.setItem('media', res.data);
          resolve(res.data)
        })
        .catch(err => {
          if (err.response) {
            reject(err.response)
          }
        })
    })
  }

  const deleteMedia = (id) => {
    return new Promise((resolve, reject) => {
      axios.delete(`/media/`, { data: { id: id } })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          if (err.response) {
            reject(err.response)
          }
        })
    });
  }

  const addMedia = (data) => {
    return new Promise((resolve, reject) => {
      axios.post('/media/', data)
        .then(res => {
          resolve(res.data.data);
        })
        .catch(err => {
          if (err.response) {
            reject(err.response)
          }
        });
    });
  }

  return {
    getAllMedia,
    deleteMedia,
    addMedia
  }
}
export default mediaRepository;