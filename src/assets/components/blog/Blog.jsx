import React from 'react'
import BlogCard from './BlogCard';
import Back from '../common/back/Back';
import "./blog.css";

function blog() {
  return (
    <>
      <Back title={"Noticias"} />
      <section className="blog padding">
        <div className="container grid2">
        <BlogCard />
        </div>
      </section>
    </>
  );
}

export default blog