import React from 'react';
import DarkNav from '../../Widgets/CategoriesNav/DarkNav';

const ArticleView = (props) => {
  const Posts = () => {
    if (props.Posts.length === 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h3 style={{ textAlign: "center" }}>No posts</h3>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                {props.Posts}
                <div className="clearfix">
                  {props.offset > 0 ? <button onClick={props.paginate.decrement} className="btn btn-primary float-left" href="#">&larr; Previous Posts</button> : null}
                  <button onClick={props.paginate.increment} className="btn btn-primary float-right" href="#">Older Posts &rarr;</button>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </>
      )
    }
  }

  return (
    <React.Fragment>
      <header className={`${props.header_style}`} style={props.mystyle}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{props.data.header}</h1>
                <span className="subheading">{props.data.subtitle}</span>
              </div>
            </div>
          </div>
        </div>
        <DarkNav />
      </header>
      {Posts()}
    </React.Fragment>
  );
}

export default ArticleView;