import React from 'react';
import ResponseChecker from '../../NewPost/ResponseChecker';
const AddUserView = (props) => {
  return (
    <>
      <div className="col">
        <form onSubmit={props.submit} style={{ marginBottom: "10px" }}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" name="username" onChange={props.handleInput} value={props.state.username} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="password" name="password" onChange={props.handleInput} value={props.state.password} />
          </div>
          <button className="btn btn-primary">Add user</button>
        </form>
        <ResponseChecker {...props} caller={"User added!"} close={props.close} />
      </div>
    </>
  );
}

export default AddUserView;