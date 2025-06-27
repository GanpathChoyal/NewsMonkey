import React, {  useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"



const News=(props)=> {

   const [articles,setArticles]=useState([])
   const [loading,setLoading]=useState(true)
   const [page,setPage]=useState(1)
   const [totalResults,setTotalResults]=useState(0)

    document.title=props.category;
          


    
          
        

    useEffect((props) => {
  const fetchInitialData = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
    console.log("URL:", url);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(parsedData.articles);  // avoid `articles.concat` on first load
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  fetchInitialData();  // call the async function
}, []);

    const fetchMoreData = async () => {
  
  setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    try {
      setLoading( true );
      let data = await fetch(url);
      let parsedData = await data.json();
      
        setArticles(articles.concat(parsedData.articles));
        setTotalResults( parsedData.totalResults);
        setLoading( false);
      
    } catch (error) {
      console.error("Failed to fetch more news:", error);
    }
  
};

    const handleNextClick=async()=>{
    if(page+1>Math.ceil(totalResults/props.pageSize)){
      
        

    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
      setLoading( true );
      let data = await fetch(url);
      let parsedData = await data.json();
      
        setArticles(articles.concat(parsedData.articles));
        setTotalResults( parsedData.totalResults);
        setLoading( false);
      
      

    }
  }
     const handlePrevClick=async()=>{
       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page-1}&pageSize=${props.pageSize}`;
      setLoading( true );
      let data = await fetch(url);
      let parsedData = await data.json();
      
        setArticles(articles.concat(parsedData.articles));
        setTotalResults( parsedData.totalResults);
        setLoading( false);
      
      

    }
  
    return (
     

      <div>
  
        
       <div className="container my-3">
         
        <h2>NewsMonkey-Top Headlines</h2>
          {loading && <Spinner/>}
          <InfiniteScroll
          dataLength={(articles || []).length}

          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}>
       
        <div className="row">
          { articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
        </div>
        

          })}
           
           
        
        
        </div>  
         </InfiniteScroll>
        
       </div>
         <div className="container d-flex justify-content-between"> 
          <button disabled={page<=1} type="button" onClick={handlePrevClick} className="btn btn-dark">&larr; previous</button>
          <button type="button" className="btn btn-dark" onClick={handleNextClick}>next &rarr;</button>


         </div>
         
      
        
      </div>
    )
  }

 News.defaultProps={
        country:'in',
        pageSize:8,
        category:'general',
   }
   News.propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,

   }
  

export default News
