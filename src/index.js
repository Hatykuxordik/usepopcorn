import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxLength={8} onSetRating={setMovieRating} />
//       <p>The movie was rated {movieRating} star</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxLength={7} />
    <StarRating maxLength={10} color="red" size={32} />
    <StarRating size={128} setDefault={4} mo />

    <Test /> */}
  </React.StrictMode>
);
