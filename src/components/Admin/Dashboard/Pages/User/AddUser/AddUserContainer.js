import React, { useState } from 'react';
import usersRepository from '../../../../../../services/users.service';
import axios from 'axios';
import AddUserView from './AddUserView';

const repository = usersRepository(axios);
const AddUserContainer = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    error: "",
    success: ""
  });

  const hideResponse = () => {
    document.getElementById('alertOut').style.display = "none"
    this.setState({ success: false, error: false })
  }
  const handleInput = (e) => {
    const { name } = e.target;
    setState({
      ...state, [name]: e.target.value
    })
  }
  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await repository.addUser(state);
      console.log(result)
      setState({ success: true });
    } catch (err) {
      setState({ error: true });
    }
    console.log(state)

  }
  return (
    <div className="container">
      <div className="row">
        <AddUserView
          state={state}
          handleInput={handleInput}
          submit={submit}
          close={hideResponse} />
      </div>
    </div>

  );
}

export default AddUserContainer;