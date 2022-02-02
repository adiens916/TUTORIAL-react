import { useParams } from "react-router-dom";
import Nav from "./Nav";

function MovieDetail() {
  const params = useParams()
  // console.log(params);

  return (
    <div>
      <Nav />
      <h1>Detail</h1>
      <p>movie id: {params.id}</p>
    </div>
  );
}

export default MovieDetail;