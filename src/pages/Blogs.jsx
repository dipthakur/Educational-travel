import React, { useState } from 'react';
import { Pagination } from '@mui/material';

const blogPosts = [
  { id: 1, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/beautiful-shot-udaipur-from-window-city-palace.jpg", updated: "5 mins ago" },
  { id: 2, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/alpine-landscape-cows-france-summer.avif", updated: "10 mins ago" },
  { id: 3, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/beautiful-shot-deer-standing-grassy-field-with-blurred-natural.jpg", updated: "15 mins ago" },
  { id: 4, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/colorful-vibrant-indian-landscape.jpg", updated: "20 mins ago" },
  { id: 5, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/lake-house.jpg", updated: "25 mins ago" },
  { id: 6, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/beautiful-shot-deer-standing-grassy-field-with-blurred-natural.jpg", updated: "30 mins ago" },
  { id: 7, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/sunrise-dal-lake-kashmir-india.jpg", updated: "35 mins ago" },
  { id: 8, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/buildings-edge-river.jpg", updated: "40 mins ago" },
  { id: 9, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/beautiful-shot-deer-standing-grassy-field-with-blurred-natural.jpg", updated: "45 mins ago" },
  { id: 10, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/buildings-edge-river.jpg", updated: "50 mins ago" },
  { id: 11, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/dashashwamedh-ghat-varanasi-uttar-pradesh-city-hero.jpeg", updated: "55 mins ago" },
  { id: 12, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/cloudy-blue-s_181624-47184.jpg", updated: "60 mins ago" },
  { id: 13, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/happy-valley-tea-estate-darjeeling-west bengal-1-hero.jpeg", updated: "65 mins ago" },
  { id: 14, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/view-river-flowing-through-rocks_1048944-27565392.jpg", updated: "70 mins ago" },
  { id: 15, title: "Lorem", description: "Lorem ipsum dolor sit amet.", image: "/assets/destinations-img/hidimba-temple-manali-himachal-pradesh-1-attr-hero.jpeg", updated: "75 mins ago" },
];

const postsPerPage = 12;

const Blogs = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => setPage(value);

  const startIndex = (page - 1) * postsPerPage;
  const selectedPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="main-blogs">
      <div className="blogs-banner">
        <img src="#" alt="Banner" />
      </div>

      <div className="container blogs-cards">
        <div className="blogs-head">
          <h1>New Travel Blog Posts</h1>
        </div>

        <div className="blogs-grid">
          {selectedPosts.map((post) => (
            <div className="card-blogs" key={post.id}>
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated {post.updated}</small>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-container">
          <Pagination count={Math.ceil(blogPosts.length / postsPerPage)} page={page} onChange={handleChange} color="primary" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;