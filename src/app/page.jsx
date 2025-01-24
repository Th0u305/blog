import { Link } from "lucide-react";

const Home = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return (
    <div>
      <h1 className="text-2xl font-medium">All Posts: {posts.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
        {posts.map((post, index) => (
          <div
            className="card bg-neutral text-neutral-content w-80"
            key={index}
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">{post?.title}</h2>
              <div className="card-actions justify-end">
               <a className="btn btn-primary" href={`/blog/${post.id}`}>View more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
Home.displayName = "MyComponent";
export default Home;
