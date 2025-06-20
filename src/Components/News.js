import React, { Component } from 'react'
import NewsItem from './NewsItem'
 



export class News extends Component {
    articles= [
{
"source": {
"id": "bbc-news",
"name": "BBC News"
},
"author": "BBC News",
"title": "Labubu: How the Pop Mart dolls conquered the world",
"description": "The dolls have almost tripled their maker's profits - and, according to some, energised Chinese soft power.",
"url": "https://www.bbc.co.uk/news/articles/cy4ydxlm9n9o",
"urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/0ac1/live/95061140-4cc0-11f0-9641-750766f20854.jpg",
"publishedAt": "2025-06-20T01:22:19.6542248Z",
"content": "Some analysts seem surprised that Chinese companies - from EV makers and AI developers to retailers - are so successful despite Western unease over Beijing's ambitions.\r\n\"BYD, DeepSeek, all of these … [+1240 chars]"
},
{
"source": {
"id": "bbc-news",
"name": "BBC News"
},
"author": "BBC News",
"title": "Leeds maternity services now 'inadequate' after inspectors act on parents' concerns",
"description": "Trust told to take immediate action to improve after unannounced inspections prompted by parent concerns.",
"url": "https://www.bbc.co.uk/news/articles/cdx5rp4y42yo",
"urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/8acc/live/0441b110-4d28-11f0-9efb-9fc6c4760a4c.jpg",
"publishedAt": "2025-06-20T00:22:19.6075588Z",
"content": "One family who told the BBC they believe their child would have survived had they received better treatment is Amarjit Kaur and Mandip Singh Matharoo, whose baby was stillborn in January 2024.\r\nThe C… [+1209 chars]"
},
{
"source": {
"id": "bbc-news",
"name": "BBC News"
},
"author": "BBC News",
"title": "Newspaper headlines: 'A good death' and 'Royal AscHot'",
"description": "The looming vote on the assisted dying bill features prominently on the front pages of Friday's papers.",
"url": "https://www.bbc.co.uk/news/articles/cgq78x78w2go",
"urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/d322/live/db01fad0-4d5e-11f0-a466-d54f65b60deb.jpg",
"publishedAt": "2025-06-20T00:22:16.8113789Z",
"content": "Image caption, The Daily Mail follows with an \"emotional appeal\" from shadow justice secretary Robert Jenrick, who says he will not support the assisted dying bill. Writing in the Mail, Jenrick says … [+335 chars]"
},
{
"source": {
"id": "bbc-news",
"name": "BBC News"
},
"author": "BBC News",
"title": "BBC Breakfast boss Richard Frediani takes extended leave after bullying allegations",
"description": "It comes after reports of an internal investigation into allegations of bullying.",
"url": "https://www.bbc.co.uk/news/articles/c2d0p6z8910o",
"urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/dc87/live/c3c0c990-4d41-11f0-86d5-3b52b53af158.jpg",
"publishedAt": "2025-06-19T20:52:21.6079604Z",
"content": "A BBC statement added: \"We have robust processes in place and would encourage any staff with concerns to raise them directly with us so they can be addressed.\"\r\nBBC News has asked Mr Frediani for com… [+471 chars]"
},
{
"source": {
"id": "bbc-news",
"name": "BBC News"
},
"author": "BBC News",
"title": "Government whip Vicky Foxcroft quits over disability benefit cuts",
"description": "The Labour MP says she could not vote for the welfare bill published by the government earlier this week.",
"url": "https://www.bbc.co.uk/news/articles/cpd1qgpw08do",
"urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/20a2/live/67d2cb50-4d47-11f0-95ba-d530ebabae6e.png",
"publishedAt": "2025-06-19T20:07:29.2026384Z",
"content": "Labour MP Vicky Foxcroft has resigned as a whip over the government's plans to cut disability benefits.\r\nIn a letter to the prime minister,, external Foxcroft said she understood the need to address … [+365 chars]"
},
{
"source": {
"id": "bbc-news",
"name": "BBC News"
},
"author": "BBC News",
"title": "Woman, 66, arrested in Camden on suspicion of 'Rolex murder'",
"description": "Jennifer Abbott was found by her niece and neighbours with tape across her mouth at her home.",
"url": "https://www.bbc.co.uk/news/articles/cvg1d4g3vg7o",
"urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/0ea8/live/3fbc95e0-4c4a-11f0-a403-397b1d8545e6.jpg",
"publishedAt": "2025-06-19T19:37:24.3582598Z",
"content": "The 69-year-old, also known as Sarah Steinberg, was last seen walking her pet corgi in Camden on 10 June, before she was found fatally injured three days later.\r\nA post-mortem examination gave the ca… [+471 chars]"
},
{
"source": {
"id": "bbc-news",
"name": "BBC News"
},
"author": "BBC News",
"title": "Is the UK about to get dragged in to Iran-Israel conflict?",
"description": "Britain is almost certain to be affected if the US gets involved - but what role could it play?",
"url": "https://www.bbc.co.uk/news/articles/c36x1d071k8o",
"urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/ae65/live/70f8e800-4d23-11f0-9efb-9fc6c4760a4c.jpg",
"publishedAt": "2025-06-19T17:07:21.9045223Z",
"content": "First off, Britain is very far from being a central player in this fight between Israel and Iran. \r\nThe UK, along with other G7 allies, has called for de-escalation, but Israel is unlikely to be list… [+1155 chars]"
},
{
"source": {
"id": "bbc-news",
"name": "BBC News"
},
"author": "BBC News",
"title": "PhD student Zhenhao Zou, who raped 10 women, jailed for 24 years",
"description": "Zhenhao Zou, who drugged and raped women in London and China, has been called \"one of the most prolific predators\" in the UK.",
"url": "https://www.bbc.co.uk/news/articles/c4g8dy38qxjo",
"urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/2ff3/live/b15de540-4d18-11f0-86d5-3b52b53af158.jpg",
"publishedAt": "2025-06-19T16:07:29.2475212Z",
"content": "During sentencing, she added: \"You told (the victims) that resistance was futile. \r\n\"Sometimes you would be begged to stop. You sought power over them - these women you treated callously - and used t… [+762 chars]"
},
{
"source": {
"id": "bbc-news",
"name": "BBC News"
},
"author": "BBC News",
"title": "Royal Ascot 2025: Dozens fall ill on second day of event",
"description": "One person was taken to hospital on day two of the event, racecourse officials confirm.",
"url": "https://www.bbc.co.uk/news/articles/c04dpxqxn45o",
"urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/caa6/live/afc2c0c0-4cf5-11f0-b48b-8b6357a99d04.jpg",
"publishedAt": "2025-06-19T14:37:25.012856Z",
"content": "They also said additional gazebos and parasols had been installed.\r\nHorses are kept cool using misting fans and a mobile water bowser with a 1,000-litre (264-gallon) capacity.\r\nIn total, more than 25… [+365 chars]"
},
{
"source": {
"id": "bbc-news",
"name": "BBC News"
},
"author": "BBC News",
"title": "Amber heat health alerts issued as temperatures above 30C likely",
"description": "Alerts have been issued across England and will come into place at midday on Thursday.",
"url": "https://www.bbc.co.uk/news/articles/cm2z4rmyl0yo",
"urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/bff7/live/42fbfa70-4cef-11f0-81a8-0dd4b9474c5a.jpg",
"publishedAt": "2025-06-19T10:37:18.4359081Z",
"content": "Elsewhere, temperatures will climb to between 23C and 27C though along the coast it will feel cooler, with temperatures sitting around 20C.\r\nIt follows a period of high temperatures across the UK wit… [+951 chars]"
}
]
    


    constructor() {
        super();
        this.state={
            articles:this.articles,
            loading:false,

          };
        }
  render() {
    return (
      <div>
        this is news 
       <div className="container my-3">
        <h2>NewsMonkey-Top Headlines</h2>
        <div className="row">
        <div className="col-md-4">
        <NewsItem title="myTitle" description="mydesc" imageurl="https://nypost.com/wp-content/uploads/sites/2/2025/06/newspress-collage-ahywml3sz-1750216367183.jpg?quality=75&strip=all&1750202005&w=1024"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="mydesc"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="mydesc"/>
        </div>
        
        </div>
        
      </div>
        
      
        
      </div>
    )
  }
}

export default News
