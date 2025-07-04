import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageurl, newsUrl, author, date,source } = props;
    return (
      <div className="mx-3">
        <div className="card" >
          <div
  style={{
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0
  }}
>
   <span className=" badge rounded-pill bg-danger" >
            {source}
            {/* <span class="visually-hidden">unread messages</span> */}
          </span>
</div>
         
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
export default NewsItem;
