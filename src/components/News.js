import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loding, setLoding] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  

const updateNews = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=170d1dec4cc74441a05f77d8c9718c03&page=${page}&pageSize=${props.pageSize}`;
  props.setProgress(10)
  setLoding(true);
  let data = await fetch(url)
  let PrseData = await data.json();
  props.setProgress(30)
  // console.log(PrseData);
  setArticles(PrseData.articles);
  setTotalResults(PrseData.totalResults);
  props.setProgress(50)
  setLoding(false);
  props.setProgress(100)
}
useEffect(()=>{
  updateNews();
  // eslint-disable-next-line
  document.title = `${capitalizeFirstLetter(props.category)}-NewsMonkey`
},[])


const fetchMoreData = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=170d1dec4cc74441a05f77d8c9718c03&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page + 1)
  let data = await fetch(url)
  let PrseData = await data.json();
  // console.log(PrseData);
  setArticles(articles.concat(PrseData.articles))
  setTotalResults(PrseData.totalResults)
}

return (
  
    <>
      <h1 className='text-center' style={{margin:"35px 0px",marginTop:"90px"}}>{`NewsMonkey - Top ${capitalizeFirstLetter(props.category)} Headlines`}</h1>
      {loding && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} imageUrl={element.urlToImage} description={element.description ? element.description.slice(0, 88) : ""} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  
)
}

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general"

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News;





















//NEXT ++++++++++++++ PREV


{/* <div className="div container d-flex justify-content-between mt-4">
              <button type="button" disabled={this.state.page <= 1} onClick={this.HandlePreviousClick} className="btn btn-dark">&larr; Previous</button>
              <button type="button" disabled={(this.state.page + 1 > (Math.ceil(this.state.totalResults / props.pageSize)))} onClick={this.HandleNextClick} className="btn btn-dark">Next &rarr;</button>
            </div> */}

// HandlePreviousClick = async () => {
//   this.setState({ page: this.state.page - 1 })
//   this.updateNews();
// }
// HandleNextClick = async () => {
//   this.setState({ page: this.state.page + 1 })
//   this.updateNews();
// }