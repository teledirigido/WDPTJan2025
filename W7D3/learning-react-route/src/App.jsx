import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Archive as Blog } from './pages/Archive'
import { Single } from './pages/Single'

function App() {

  const aboutPageData = {
    name: 'Miguel',
    hobbies: ['gardening', 'programming', 'drawing'],
    favouriteNumber: 32
  }

  const blogData = [
    { id: 1, title: 'My first Post', slug:'my-first-post', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo.', tags: ['demo'] },
    { id: 2, title: 'Hello World', content: 'Hello world, this is my second post', tags: ['personal', 'post'] },
    { id: 3, title: 'History API', content: 'I love the history API, It\'s great', tags: ['web','post'] }
  ];

  return (
    <>
      <h1>My first App with React Route :)</h1>

      {/* 1. Navigation */}
      <Navigation />

      {/* 2. Routes */}
      <Routes>
        {/* 2.1 We define the pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About content={aboutPageData} />} />
        <Route path="/blog" element={<Blog content={blogData} />} />
        {/* 2.2 Route for blog */}
        <Route path="/blog/:blogId" element={<Single content={blogData} />} />
      </Routes>
    </>
  )
}

export default App
