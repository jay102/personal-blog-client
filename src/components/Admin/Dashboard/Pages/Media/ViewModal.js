import React from 'react';

const ViewModal = (props) => {
  return (
    <div className="modal" tabIndex="-1" role="dialog" id="viewModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Media Link</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div style={{ textAlign: "center" }}>
              <img src={props.image} alt="media" />
              <p>{props.imagelink}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewModal;