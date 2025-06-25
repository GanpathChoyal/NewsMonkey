import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date,source } = this.props;
    return (
      <div className="mx-3">
        <div className="card" style={{ width: " 18rem" }}>
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:'1'}} >
            {source}
            {/* <span class="visually-hidden">unread messages</span> */}
          </span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {" "}
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
