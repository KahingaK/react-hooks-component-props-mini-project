import React from 'react'

function Article({aTitle, aDate = "January 1, 1970" , aPreview}) {
  return (
    <article>
        <h3> {aTitle}</h3>
        <small>
            {aDate}
        </small>
        <p>{aPreview}</p>
    </article>  )
}

export default Article