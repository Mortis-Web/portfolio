import { useEffect, useRef, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { useDashContext } from "../hooks/Dashboard.Context";
import BlogPannel from "../components/Dashboard/BlogPannel";

const DashBoard = () => {
  const { addPost, updateData, editBlog, setEditBlog, deleteALLPosts } =
    useDashContext();
  const [title, setTitle] = useState("");
  const [base64, setBase64] = useState("");
  const [gitLink, setGitLink] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const pannelRef = useRef(null);
  const fileRef = useRef();
  useEffect(() => {
    if (editBlog) {
      setTitle(editBlog.title);
      setBase64(editBlog.base64);
      setGitLink(editBlog.gitLink);
      setDemoLink(editBlog.demoLink);
    }
  }, [editBlog]);

  const handleImage64 = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setBase64(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { base64, title, gitLink, demoLink };
    if (!base64 || !title) {
      alert("Image and title are required.");
      return;
    }

    if (editBlog) {
      await updateData(editBlog.id, payload);
    } else {
      await addPost(payload);
      pannelRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setBase64("");
    setTitle("");
    setGitLink("");
    setDemoLink("");
    setEditBlog(null);
    fileRef.current?.form?.reset();
  };

  const handleCancle = () => {
    setBase64("");
    setTitle("");
    setGitLink("");
    setDemoLink("");
    setEditBlog(null);
    fileRef.current?.form?.reset();
  };
  return (
    <main className="py-10 min-h-screen flex flex-col">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container flex flex-col gap-10">
          <h1
            style={{ fontSize: "3.25rem" }}
            className="flex gap-1 text-(--colorPrime) justify-center items-center"
          >
            <MdDashboard /> Dashboard
          </h1>
          <article className="flex flex-col gap-8 justify-center items-center">
            <div className="w-full max-w-200">
              <label
                className="flex items-center gap-0.5 text-xl"
                htmlFor="file"
              >
                Image PlaceHolder <span className="text-(--colorPrime)">*</span>
              </label>
              <input
                ref={fileRef}
                onChange={handleImage64}
                accept="image/*"
                type="file"
                name="file"
                className="p-4 bg-white text-black file:bg-(--colorPrime) rounded-xl file:text-white file:font-bold file:px-2 file:rounded-lg w-full"
              />
              {base64 && (
                <div className="w-full max-w-200 mt-2">
                  <img
                    src={base64}
                    alt="Preview"
                    className="rounded-lg bg-(--colorPrime) object-cover max-w-80 max-h-60"
                  />
                </div>
              )}
            </div>
            <div className="w-full max-w-200">
              <label
                className="flex items-center gap-0.5 text-xl"
                htmlFor="file"
              >
                Title PlaceHolder <span className="text-(--colorPrime)">*</span>
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="enter title"
                name="text"
                className="p-4 bg-white text-black file:bg-(--colorPrime) rounded-xl  w-full"
              />
            </div>

            <div className="flex flex-col w-full max-w-200">
              <label
                className="flex items-center mx-auto gap-0.5 my-2 text-3xl"
                htmlFor="text"
              >
                Links PlaceHolders{" "}
                <span className="text-(--colorPrime)">*</span>
              </label>
              <span className="flex  gap-8">
                <input
                  type="text"
                  value={gitLink}
                  placeholder="enter github link"
                  name="text"
                  onChange={(e) => setGitLink(e.target.value)}
                  className="p-4 bg-white text-black file:bg-(--colorPrime) rounded-xl  w-full"
                />
                <input
                  type="text"
                  placeholder="enter live demo link"
                  name="text"
                  value={demoLink}
                  onChange={(e) => setDemoLink(e.target.value)}
                  className="p-4 bg-white text-black file:bg-(--colorPrime) rounded-xl  w-full"
                />
              </span>
            </div>
            <div className="flex justify-between w-full max-w-200 text-xl items-center">
              <button
                type="submit"
                className="btn btnPrime"
                style={{ margin: "0px" }}
              >
                {editBlog ? <p style={{margin:'0'}}>update post</p> : <p style={{margin:'0'}}>add post</p>}
              </button>
              {editBlog && (
                <button
                  style={{ margin: "0" }}
                  type="button"
                  onClick={handleCancle}
                  className="btn text-yellow-200 "
                >
                  cancle edit
                </button>
              )}
              <button
                onClick={deleteALLPosts}
                type="button"
                className="bg-red-800 rounded-md cursor-pointer border border-transparent hover:bg-transparent duration-300 hover:border-red-700 hover:text-red-700 p-[0.75rem_1.25rem]"
              >
                Delete All
              </button>
            </div>
          </article>
        </div>
      </form>
      <div ref={pannelRef}>
        <BlogPannel />
      </div>
    </main>
  );
};
export default DashBoard;
