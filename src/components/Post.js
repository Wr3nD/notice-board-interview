import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Post = ({ posts, users, comments, page }) => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className=" flex flex-col justify-center items-center ">
      {posts.slice((page - 1) * 10, page * 10).map((post, i) => {
        const specificUser = users.find((user) => user.id === post.userId).name;
        const fadeSelection = i % 2 === 0 ? "fade-right" : "fade-left";
        return (
          <article
            className="max-w-2xl  hover:border-brandColor border  p-8 m-5 rounded-lg "
            key={post.id}
            data-aos={fadeSelection}
          >
            <h3 className="text-base first-letter:uppercase min-[320px]:text-lg md:text-xl min-h-[7rem] sm:min-h-[4rem] text-brandColor font-work my-2">
              {post.title}
            </h3>

            <h4 className="italic text-sm md:text-base my-2 text-secondColor">
              {specificUser}
            </h4>

            <p className="text-sm md:text-base text-brandGray min-h-[5rem]">
              {post.body.slice(0, 120)}...
            </p>
            <div className="flex flex-col min-[320px]:flex-row justify-between items-baseline my-4">
              <Link
                to={`post/${post.id}`}
                className="text-sm min-[420px]:text-lg underline italic cursor-pointer text-link "
              >
                {t("postLink")}
              </Link>
              <span className="text-sm min-[420px]:text-lg italic text-brandGray">
                {t("postComment")} (
                {
                  comments.filter((comment) => comment.postId === post.id)
                    .length
                }
                )
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Post;
