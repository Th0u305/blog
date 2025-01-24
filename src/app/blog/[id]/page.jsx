export async function generateMetadata({ params }) {
    const { id } = await params;

    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog = await data.json();

    return {
        title: "Tariqul || " + blog?.title,
        description: blog?.body,
    };
}


const page = async ({ params }) => {
    const { id } = await params;

    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog = await data.json();

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-medium">{blog?.title}</h2>
            <p>{blog?.body}</p>
        </div>
    );
};

export default page;