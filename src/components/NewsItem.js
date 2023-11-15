import React from 'react'

const NewsItem = (props)=> {

  

        let { title, description, imageUrl, newsUrl, author, publishedAt,source } =props;
        return (
            <div className='my-3'>
                <div className="card" >
                    {/* <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
                        {source}                     
                    </span> */}
                    <img src={!imageUrl ? "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/0/0/Light-Bulb-2.jpg?ve=1&tl=1" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...<span className="badge rounded-pill bg-danger my-1">{source}</span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem
