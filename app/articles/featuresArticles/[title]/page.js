const page = (props) => {
  return (
    <>
      <h1>Article Title as a Params</h1>
      <h1>{props.params.title}</h1>
    </>
  );
};

export default page;
