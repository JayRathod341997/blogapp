/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Content = (props) => {
  console.log(props);
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h4>{props.title1}</h4>
        <h6>{props.description1}</h6>
      </div>
    </>
  );
};

export default Content;
