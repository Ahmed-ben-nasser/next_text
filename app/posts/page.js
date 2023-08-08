import Link from "next/link";

export const metadata = {
  title: "Posts Page",
};

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  const posts = await res.json();

  const postsJSX = posts.map((post) => {
    return (
      <Link
        href={`/posts/${post.id}`}
        style={{
          width: "70%",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "20px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "6px",
            margin: "10px",
          }}
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <h1>PostsPage</h1>
      {/* posts */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {postsJSX}
      </div>
      {/*== posts ==*/}
    </div>
  );
}
