import { Adeniyi4 } from "../assets/Image";

export const Blog = () => {
  return (
    <div>
      <div className="content content-blog" id="blog">
        <div className="content-header">
          <h2>
            <span>My</span> Blog
          </h2>
        </div>
        <div className="content-details">
          <div className="blog">
            <div className="blog-post">
              <img src={Adeniyi4} alt="" />
              <p className="post-title">How to get Started With Programming</p>
              <p className="post-desc">Coming Soon!!</p>
              <a href="#">&rarr; Read Post</a>
            </div>
            <div className="blog-post">
              <img src={Adeniyi4} alt="" />
              <p className="post-title">How to become a better Programmer</p>
              <p className="post-desc">Coming Soon!!</p>
              <a href="#">&rarr; Read Post</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
