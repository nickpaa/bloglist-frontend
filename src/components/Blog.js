import React, { useState } from 'react'

const Blog = ({ blog, handleLike, handleDelete, own }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [visible, setVisible] = useState(false)

  const toggleDisplay = () => {
    setVisible(!visible)
  }

  if (visible) {
    return (
      <div style={blogStyle}>
        <div>
          {blog.title} by {blog.author}
          <button onClick={toggleDisplay}>hide</button>
        </div>
        <div>
          {blog.url}
        </div>
        <div>
          Likes: {blog.likes}
          <button onClick={handleLike}>like</button>
        </div>
        <div>
          added by {blog.user.name}
        </div>
        <div>
          {own && <button onClick={handleDelete}>delete</button>}
        </div>
      </div>
    )
  } else {
    return (
      <div style={blogStyle}>
        {blog.title}
        <button onClick={toggleDisplay}>view</button>
      </div>
    )
  }
}

export default Blog
