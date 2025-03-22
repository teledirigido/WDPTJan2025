import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { Single } from './pages/Single';

function App() {

  const blogData = [
    { id: 1, title: 'My first Post', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo.', tags: ['demo'] },
    { id: 2, title: 'Hello World', content: 'Hello world, this is my second post', tags: ['personal', 'post'] },
    { id: 3, title: 'History API', content: 'I love the history API, It\'s great', tags: ['web','post'] }
  ];

  return (
    <>
      {/* Navigation */}

      {/* Display Blog Titles */}
      { blogData.map( blogEntry => {
        return (
          <h2>
            <Link to={`/blog/${blogEntry.id}`}>
              {blogEntry.title}
            </Link>
          </h2>
        )
      } ) }

      {/* Routes */}
      <Routes>
        <Route path="/blog/:blogId" element={<Single content={blogData} />} />
      </Routes>


    </>
  )
}

export default App
