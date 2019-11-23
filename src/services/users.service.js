
const usersRepository = (axios) => {

  const getAdminAvatar = async (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`/admin/${id}`)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          if (err.response) {
            reject(err.response)
          }
        })
    })
  }

  const addUser = async (user) => {
    return new Promise((resolve, reject) => {
      axios.post('/user', user)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          if (err.response) {
            reject(err.response)
          }
        })
    })

  }
  const deleteUser = async (id) => {
    return new Promise((resolve, reject) => {
      axios.delete(`/user/${id}`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          if (err.response) {
            reject(err.response);
          }
        })
    })

  }
  const editUser = async (user) => {
    return new Promise((resolve, reject) => {
      axios.put(`/user/${user.id}`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          if (err.response) {
            reject(err.response);
          }
        })
    })
  }
  return {
    getAdminAvatar,
    addUser,
    deleteUser,
    editUser
  }
}
export default usersRepository