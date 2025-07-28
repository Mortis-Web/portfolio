import React from "react";
import { FaRegImage, FaGithub, FaBoxOpen } from "react-icons/fa6";
import { PiSubtitlesBold } from "react-icons/pi";
import { MdLiveTv } from "react-icons/md";
import { useDashContext } from "../../hooks/Dashboard.Context";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const BlogPannel = () => {
  const { posts, setEditBlog, editBlog, deletePost } = useDashContext();
  const handleEdit = (post) => {
    setEditBlog(post);
    window.scrollTo({ top: "0", behavior: "smooth" });
  };

  return (
    <section className="overflow-x-auto px-4">
      <div className="xl:max-w-[95%] min-w-6xl xl:min-w-0 mx-auto  rounded-2xl overflow-hidden flex flex-col ">
        <ul className="grid w-full  rounded-b-none grid-cols-10 divide-y-2 divide-x-2 divide-black/10 text-lg font-bold text-center bg-(--colorPrime)">
          <li className="p-2 justify-center flex items-center gap-1"># id</li>
          <li className="col-span-3 justify-center flex items-center gap-1">
            <FaRegImage /> image
          </li>
          <li className="p-2 col-span-2 flex justify-center items-center gap-1">
            <PiSubtitlesBold /> title
          </li>
          <li className="p-2 flex justify-center items-center gap-1">
            <FaGithub /> GitHub
          </li>
          <li className="p-2 flex justify-center items-center gap-1">
            <MdLiveTv className="min-w-5"/> LiveDemo
          </li>
          <li className="p-2 flex justify-center items-center gap-1">
            <FaEdit /> Edit
          </li>{" "}
          <li className="p-2 flex justify-center items-center gap-1">
            <FaTrashAlt /> Delete
          </li>
        </ul>

        <article className="h-full text-black rounded-t-none isolate relative bg-[whitesmoke] min-h-70">
            {posts.length === 0 && <p  style={{margin:'auto'}} className="text-4xl  absolute flex items-center gap-2 inset-0 max-w-fit max-h-fit"><FaBoxOpen className="mt-2"/>No Data</p>}
          {posts.map((post, index) => {
            const postBG = index % 2 === 0 ? "bg-white" : "bg-[whitesmoke]";

            return (
              <ul
                key={index}
                className={`${postBG} grid-cols-10 font-bold min-h-20 grid divide-black/10 divide-y-2 divide-x-2 w-full`}
              >
                <li className="p-2 flex justify-center items-center ">
                  {post.id}
                </li>
                <li className="col-span-3 p-4 flex justify-center max-h-70 min-h-70 items-center ">
                  <img
                    src={post.base64}
                    alt="img"
                    className="rounded-2xl bg-(--colorPrime) w-full h-full object-cover"
                  />
                </li>
                <li className="p-2 col-span-2 flex justify-center max-h-70 items-center overflow-y-auto text-balance">
                  {post.title}
                </li>
                <li className="p-2 flex justify-center overflow-x-auto items-center">
                  {post.gitLink}
                </li>
                <li className="p-2 flex justify-center overflow-x-auto items-center">
                  {post.demoLink}
                </li>
                <li className="p-2 flex justify-center items-center">
                  <button
                    onClick={() => handleEdit(post)}
                    className={`px-6 py-4  cursor-pointer border-2 duration-300 border-yellow-300 rounded-xl hover:text-yellow-300 bg-yellow-300 hover:bg-transparent ${
                      editBlog ? "grayscale-100 pointer-events-none" : ""
                    }`}
                  >
                    Edit
                  </button>
                </li>
                <li className="p-2 flex justify-center items-center">
                  <button
                    onClick={() => deletePost(post.id)}
                    className="px-6 py-4  cursor-pointer border-2 duration-300 border-red-700 text-white hover:text-red-700 rounded-xl bg-red-700 hover:bg-transparent "
                  >
                    delete
                  </button>
                </li>
              </ul>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default BlogPannel;
