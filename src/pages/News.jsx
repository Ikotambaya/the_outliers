import React, { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import './News.css'; // <-- Add this line to import the News.css

const client = createClient({
  projectId: 'f0vknp83',
  dataset: 'production',
  apiVersion: '2023-07-01',
  useCdn: true,
});

export default function News() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);     // Add error state

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true); // Set loading to true before fetching
        const data = await client.fetch(`*[_type == "post"] | order(publishedAt desc){
          title,
          slug,
          publishedAt,
          "mainImage": mainImage.asset->url, // Fetch image URL if you have it
          "excerpt": body[0].children[0].text // Get a short excerpt from the first block
        }`);
        setPosts(data);
      } catch (err) {
        setError("Failed to load news posts. Please try again later.");
        console.error("Sanity fetch error:", err);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="news-section-container">
        <h2 className="news-heading">Latest News</h2>
        <p className="loading-message">Loading news posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-section-container">
        <h2 className="news-heading">Latest News</h2>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="news-section-container">
        <h2 className="news-heading">Latest News</h2>
        <p className="no-posts-message">No news posts found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <section className="news-section-container"> {/* Semantic class for the main section */}
      <h2 className="news-heading">Latest News</h2> {/* Semantic class for the heading */}
      <ul className="news-list"> {/* Semantic class for the list of posts */}
        {posts.map((post) => (
          <li key={post.slug.current} className="news-post-card"> {/* Semantic class for each post card */}
            {post.mainImage && (
              <div className="news-post-image-wrapper">
                <img src={post.mainImage} alt={post.title} className="news-post-image" />
              </div>
            )}
            <div className="news-post-content">
              <h3 className="news-post-title">{post.title}</h3>
              <p className="news-post-date">{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              {post.excerpt && <p className="news-post-excerpt">{post.excerpt}...</p>}
              {/* You might want a link here to read the full post */}
              {/* <a href={`/news/${post.slug.current}`} className="news-read-more">Read More</a> */}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}