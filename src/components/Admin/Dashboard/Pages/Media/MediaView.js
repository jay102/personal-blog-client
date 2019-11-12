import React from 'react';
import Card from '../../../../Widgets/Card/Card';
import AddMedia from '../NewPost/FeaturedImg';


const MediaView = (props) => {
  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
      <div className="container">
        <Card
          title={"Add media"}
          view={<AddMedia {...props.state} setImage={props.setImage} />} />
        {props.state.new_media ? <img src={props.state.new_media} alt="new media" height="200" width="200" /> : null}
        {props.state.new_media ? <button onClick={props.addMedia} className="btn btn-primary btn-sm upload">Upload</button> : null}
        <div className="row">
          {props.media}
        </div>
      </div>
    </main>

  );
}

export default MediaView;