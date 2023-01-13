import React from "react";
import Article from "./Article";

function ArticleList({bPosts}) {
  return (
    <main>{
         bPosts.map((post)=>{
            return (<Article
                key={bPosts.id}
                aTitle={bPosts.title}
                aDate={bPosts.date}
                aPreview={bPosts.preview}
                aMinutes={bPosts.minutes}
            />)
         })
    }
      
    </main>
  );
}

export default ArticleList;
