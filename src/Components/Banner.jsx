import { React, useEffect, useState } from "react";
import axios from "axios";
import bannerimg from "../assets/image.jpg";
import { Oval } from "react-loader-spinner";

function Banner() {
  let [bannerMovie, setBannerMovie] = useState("");

  useEffect(function () {
    (function () {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/all/day?api_key=b8e13bc35c92571939fa3d75e6b18838"
        )
        .then((res) => {
          console.table(res.data.results);
          setBannerMovie(res.data.results[0]);
        });
    })();
  }, []);
  return (
    <>
      {bannerMovie === "" ? (
        <div className="flex justify-center">
          <Oval
            height="80"
            width="80"
            radius="9"
            color="gasy"
            secondaryColor="gray"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <div
          className={`md:h-[60vh]
      
      h-[40vh]
      bg-center
      bg-cover
      flex items-end
      `}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${bannerMovie.backdrop_path}`,
          }}
        >
          {/* {console.log()} */}
          {/* </div> */}

          <div className="md:text-3xl text-xl text-white text-center bg-gray-900 bg-opacity-90 p-4 w-full">
            {bannerMovie.title}
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
