import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

const Post = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = async () => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2023-07-09&sortBy=publishedAt&apiKey=dd2b35d691f348bd83cb9551c7d39491";

    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error();
      }
      const result = await response.json();
      console.log(result.articles);
      setData(result.articles);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <section className="post">
      <div className="container py-5">
        <div className="d-flex align-items-center pb-5">
          <span className="dot"></span>
          <p className="post-header ps-2">TRENDING POST</p>
        </div>
        <div className="card-con">
          {isLoading && <>Loading...</>}
          {error ??
            (!isLoading &&
              data
                .slice(0, 6)
                .map((post) => <Card post={post} key={post.content} />))}
        </div>
      </div>
    </section>
  );
};

export default Post;
