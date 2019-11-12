import React, { Component } from 'react';
import axios from 'axios';

// view modal
import ViewModal from './ViewModal';

//import spinner 
import Spinner from '../../../../Widgets/Spinner/spinner';

// import service
import mediaservice from '../../../../../services/media.service';

// import view
import MediaView from './MediaView';

const mediaService = mediaservice(axios);
class Media extends Component {
  state = {
    media: [] || localStorage.getItem('media'),
    file: null,
    new_media: null,
    image: '',
    link: ''
  }

  componentDidMount() {
    this.getMedia();
  }

  getMedia = async () => {
    try {
      const result = await mediaService.getAllMedia();
      this.setState({ media: result.allmedia })
    } catch (err) {
      console.log(err)
    }
  }

  deleteMedia = async (e, id) => {
    e.preventDefault();
    const qst = window.confirm('delete media?')
    if (qst) {
      const result = await mediaService.deleteMedia(id);
      if (result) {
        alert('media deleted');
        this.getMedia()
      }
    }
  }
  setImage = (file) => {
    this.setState({
      new_media: URL.createObjectURL(file),
      file
    })
  }

  addMedia = async (e) => {
    e.preventDefault()
    const { file } = this.state;
    const data = new FormData();
    data.append('image', file)
    const result = await mediaService.addMedia(data);
    alert('Media link ' + result.url);
    console.log(result)
    this.setState({ file: null, new_media: null })
    this.getMedia();

  }

  setmedia = (e, url) => {
    e.preventDefault()
    this.setState({
      image: url,
      link: url
    })
  }
  render() {
    const { media } = this.state;

    const Allmedia = media.map(media => {
      return (
        <div className="col-md-4" key={media.id}>
          <div className="card mb-4 shadow-sm">
            <img className="bd-placeholder-img card-img-top media_img" src={media.url} height="100" width="100" alt="media" />
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button onClick={(e) => { this.setmedia(e, media.url) }} type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#viewModal">View</button>
                  <button onClick={(e) => this.deleteMedia(e, media.publicId)} type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                </div>
              </div>
            </div>
          </div>
          <ViewModal
            image={this.state.image}
            imagelink={this.state.link} />
        </div>
      );
    })
    if (media.length === 0 || media === undefined) {
      return <Spinner />
    } else {
      return (
        <MediaView
          media={Allmedia}
          state={this.state}
          setImage={this.setImage}
          addMedia={this.addMedia} />
      );
    }

  }
}

export default Media;