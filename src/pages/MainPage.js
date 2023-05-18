import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import { useTranslation } from "react-i18next";
import "animate.css";

const fetchData = async () => {
  try {
    let [postsRes, usersRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);
    if (!postsRes.ok || !usersRes.ok || !commentsRes.ok) {
      throw new Error("Failed to fetch data.");
    }

    const [posts, users, comments] = await Promise.all([
      postsRes.json(),
      usersRes.json(),
      commentsRes.json(),
    ]);

    return { posts, users, comments };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const MainPage = () => {
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [show, handleShow] = useState(false);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const fetchDataAndSetData = async () => {
      try {
        const fetchedData = await fetchData();
        setPosts(fetchedData.posts);
        setUsers(fetchedData.users);
        setComments(fetchedData.comments);
        setLoading(false);
      } catch (err) {
        throw new Error(err.message);
      }
    };

    fetchDataAndSetData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-epptec-background overflow-hidden">
      <Navbar show={show} />
      <div className="flex flex-col w-full pt-40  animate__animated animate__fadeInDown">
        <header className="flex  justify-center items-center bg-white w-max m-auto">
          <h1 className="text-xl min-[320px]:text-2xl min-[440px]:text-3xl sm:text-5xl md:text-6xl flex flex-col font-work  text-brandColor items-center">
            {t("header1")}
            <span className="m-3 text-white bg-secondColor p-2 font-work">
              {t("header2")}
            </span>{" "}
          </h1>
        </header>
        <div className="items-center flex justify-center">
          <p className="text-sm min-[320px]:text-base md:text-xl max-w-[85%] lg:max-w-screen-lg text-center py-12 text-brandGray">
            {t("header3")}
          </p>
        </div>
      </div>
      <div className="max-w-screen-md bg-white  mx-auto p:2 md:p-10 rounded-3xl">
        <Post posts={posts} users={users} comments={comments} page={page} />
        <Pagination page={page} setPage={setPage} posts={posts.length} />
      </div>
    </main>
  );
};

export default MainPage;
