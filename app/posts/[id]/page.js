import { Suspense } from "react";
import PostDetails from "../../components/PostDetails";

const postsDetailsPage = async ({ params }) => {
  const loadingJSX = (
    <div>
      <h3>Loading .....</h3>
    </div>
  );
  return (
    <>
      <h1>Post Details</h1>

      <Suspense fallback={loadingJSX}>
        <PostDetails postId={params.id} />
      </Suspense>
    </>
  );
};

export default postsDetailsPage;
