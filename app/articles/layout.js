const layout = ({ children }) => {
  return (
    <>
      <h2
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          fontSize: "35px",
        }}
      >
        Articles
      </h2>
      <div
        style={{
          marginTop: "50px",
          padding: "20px",
          borderRadius: "6px",
          backgroundColor: "#f9f9f9",
          color: "black",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default layout;
