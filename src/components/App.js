import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList.js"
import About from "./About.js"
import Header from "./Header.js"


console.log(blogData);

function App() {
  return (
    <div className="App">
    <Header blogName = {blogData.name}/>
    <ArticleList bPosts = {blogData.posts}/>
    <About bImage = {blogData.image} aboutText = {blogData.about} />
    </div>
  );
}

export default App;
