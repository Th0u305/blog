import Link from "next/link";

const Home = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()

  return (
    <div>
      <h1 className="text-2xl font-medium">All Posts: {posts.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {posts.map((post, index) => (
          <Link className="block hover:text-cyan-500" href={`/blog/${post?.id}`} key={post.id}>{index + 1}. {post.title}</Link>
        ))}
      </div>
    </div>
  );
};
Home.displayName = "MyComponent";
export default Home;
