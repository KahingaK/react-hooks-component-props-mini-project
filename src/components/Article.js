import React from 'react'

function Article({title, date = "January 1, 1970" , preview}) {
  return (
    <article>
        <h3> {title.aTitle}</h3>
        <small>
            {date.aDate}
        </small>
        <p>{preview.aPreview}</p>
    </article>  )
}

export default Article