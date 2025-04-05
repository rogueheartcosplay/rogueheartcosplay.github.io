import React from 'react';
import Hero from '../../components/Hero/Hero.jsx'
import { Link } from 'react-router-dom';
import './Blog.css'

function Blog() {

  return (
    <div className="blog">
      <Hero/>
      <h1>Blog</h1>
      <h2>
          <Link to="/blog/wavemother">Wavemother's Robe</Link> - Build Log
      </h2>
      <h2>
          <Link to="/blog/sorbet">Exorcism Sorbet</Link> - Tutorial
      </h2>
    </div>
  )
};

export default Blog