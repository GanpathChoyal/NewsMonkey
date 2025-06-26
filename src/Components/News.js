import React, {  Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

    static defaultProps={
        country:'in',
        pageSize:8,
        category:'general',
   }
   static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,

   }
    


    constructor(props) {
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0,
            

          };
          document.title=this.props.category;
          
        }

    async componentDidMount(){
     
      this.props.setProgress(0);
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a03550825cf451e93d92d2c2bf612e8&page=1&pageSize=${this.props.pageSize}`;
       console.log("URL:", url);
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log("API Response:", parsedData); 
      this.setState({articles:parsedData.articles,
                  totalResults:parsedData.totalResults,
                  loading:false});
                  this.props.setProgress(100);
      
    }
    fetchMoreData = async () => {
  this.setState({ page: this.state.page + 1 }, async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a03550825cf451e93d92d2c2bf612e8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    try {
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch more news:", error);
    }
  });
};

    handleNextClick=async()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
      
        

    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a03550825cf451e93d92d2c2bf612e8&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json();
   
        this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        loading:false
      })

    }
  }
     handlePrevClick=async()=>{
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a03550825cf451e93d92d2c2bf612e8&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
     
      this.setState({
        page:this.state.page-1,
          articles:parsedData.articles
          ,
          loading:false
      })

    }
  render() {
    return (
      <div>
        
       <div className="container my-3">
         
        <h2>NewsMonkey-Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles!==this.state.totalResults}
          loader={<Spinner/>}>
       
        <div className="row">
          { this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
        </div>
        

          })}
           
           
        
        
        </div>  
         </InfiniteScroll>
        
       </div>
         <div className="container d-flex justify-content-between"> 
          <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&larr; previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>


         </div>
         
      
        
      </div>
    )
  }
}

export default News
