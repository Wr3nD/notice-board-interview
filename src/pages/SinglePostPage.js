import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

const fetchData = async (id, userId = false) => {
  try {
    if (userId) {
      let usersRes = await fetch(
        `https://jsonplaceholder.typicode.com/users/${[userId]}`
      );
      if (!usersRes.ok) {
        throw new Error("Failed to fetch data.");
      }
      const user = await usersRes.json();

      return { user };
    } else {
      let [postRes, commentsRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${[id]}`),
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`),
      ]);
      if (!postRes.ok || !commentsRes.ok) {
        throw new Error("Failed to fetch data.");
      }
      const [post, comments] = await Promise.all([
        postRes.json(),
        commentsRes.json(),
      ]);
      return { post, comments };
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const SinglePostPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [firstFetch, setfirstFetch] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      try {
        const fetchedData = await fetchData(id, post?.userId);

        if (fetchedData.user) {
          setUser(fetchedData?.user);
          setLoading(false);
        } else {
          setPost(fetchedData?.post);
          setComments(fetchedData?.comments);
          setfirstFetch(false);
        }
      } catch (err) {
        throw new Error(err.message);
      }
    };

    fetchDataAndSetData();
  }, [firstFetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-epptec-background">
      <Navbar />
      <div className="max-w-screen-md bg-white text-brandColor mt-40  mx-auto p-2 sm:p-10 rounded-3xl">
        <header className="p-2">
          <Link to={"/"} className="underline italic text-link">
            {t("returnToMain")}
          </Link>
          <h3 className="first-letter:uppercase text-2xl md:text-4xl font-bold mt-5">
            {post?.title}
          </h3>
          <h4 className="text-lg mt-5 text-secondColor  italic">
            {user?.username}
          </h4>
          <p className="mt-5 first-letter:uppercase">{post?.body}</p>
          <h3 className="text-2xl font-bold mt-5 first-letter:uppercase">
            {t("postComment")}
          </h3>
        </header>
        <div>
          {comments?.map((comment) => {
            const { id, name, email, body } = comment;
            return (
              <article
                key={id}
                className="max-w-2xl hover:border-brandColor border  p-8 m-5 rounded-lg"
              >
                <h5 className="text-lg  font-bold">{name}</h5>
                <h6 className="text-xs md:text-base text-secondColor  italic">
                  {email}
                </h6>
                <p className="mt-5 text-brandGray">{body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
