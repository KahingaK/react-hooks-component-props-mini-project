import React from "react";
import Article from "./Article";

function ArticleList({blogPosts}) {
  return (
    <main>{
         blogPosts.bPosts.map((post)=>{
            return (<Article
                key={posts.id}
                aTitle={posts.title}
                aDate={posts.date}
                aPreview={posts.preview}
                aMinutes={posts.minutes}
            />)
         })
    }
      
    </main>
  );
}

export default ArticleList;
