import React from "react";

const Posts = [
  {
    id: "post1",
    blogTitle: "Dinterdum pretium es loremous dorus condimentus",
    blogDate: "by Halo Theme on May 29, 2018",
    blogImg: "./images/blog_Pics/blogPic1.jpg",
    blogText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, fugit? Itaque consectetur tenetur reprehenderit nihil similique impedit libero veritatis dolorem....",
  },
  {
    id: "post2",
    blogTitle: "Naminos elementum disumos an cosmo tincidunts loremous",
    blogDate: "by Halo Theme on May 30, 2018",
    blogImg: "./images/blog_Pics/blogPic2.jpg",
    blogText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, fugit? Itaque consectetur tenetur reprehenderit nihil similique impedit libero veritatis dolorem....",
  },
  {
    id: "post3",
    blogTitle: "Dinterdum pretium es loremous dorus condimentus",
    blogDate: "by Halo Theme on May 31, 2018",
    blogImg: "./images/blog_Pics/blogPic3.jpg",
    blogText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, fugit? Itaque consectetur tenetur reprehenderit nihil similique impedit libero veritatis dolorem....",
  },
];
const BlogPosts = () => {
  return (
    <>
      <div className="grid place-content-center py-10  ">
        {Posts.map((post) => (
          <div key={post.id} className="grid gap-y-2 py-8 px-4">
            <div className="font-semibold text-xl"> {post.blogTitle}</div>
            <div className="font-light font-mono"> {post.blogDate}</div>
            <img src={post.blogImg} alt="blog-post" />
            <div className="laptop:w-2/3 w-full"> {post.blogText}</div>
            <button className="px-6 w-40 py-4 rounded font-semibold hover:bg-primary hover:text-white">
              Read More
            </button>
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
};

export default BlogPosts;
