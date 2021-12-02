import { useParams, useLocation } from "react-router";

const Posts = () => {
  console.log(useParams());
  console.log(useLocation());

  return <div>Id is: </div>;
};

export default Posts;
