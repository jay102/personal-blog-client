import React from 'react';
let ResponseChecker = (props) => {
  const { error, success } = props;
  if (error) {
    return (
      <div className="alert alert-danger" role="alert" id="alertOut">
        An Error occured
        <button onClick={props.close} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  } else if (success) {
    return (
      <div className="alert alert-success" role="alert" id="alertOut">
        {props.caller}
        <button onClick={props.close} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  } else {
    return null
  }
}
export default ResponseChecker;