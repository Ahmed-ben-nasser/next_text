const PostDetails = async ({ postId }) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const post = await res.json();

  return (
    <>
      <dvi>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "70%",
              padding: "20px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "6px",
              margin: "10px",
            }}
          >
            <h1>{post.title}</h1>
            {post.body}
          </div>
        </div>
      </dvi>
    </>
  );
};

export default PostDetails;
