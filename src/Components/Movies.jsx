import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import Pagination from "./Pagination";
// import image from "../assets/image.jpg";

function Movies() {
  let [movies, setMovies] = useState([]);
  let [pageNum, setPageNum] = useState(1);
  let [hovered, setHovered] = useState("");
  let [favourites, setFavourites] = useState([]);
  //making api request
  useEffect(
    function () {
      (function () {
        axios
          .get(
            "https://api.themoviedb.org/3/trending/all/day?api_key=b8e13bc35c92571939fa3d75e6b18838&&page=" +
              pageNum
          )
          .then((res) => {
            console.table(res.data.results);
            setMovies(res.data.results);
          });
      })();
    },
    [pageNum]
  );

  //Pagination Handlers
  const onPrev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const onNext = () => {
    setPageNum(pageNum + 1);
  };

  //Emoji Show and Hide on hover
  const showEmoji = (id)=>{
    setHovered(id);
  }

  const hideEmoji = ()=>{
    setHovered("");
  }

  //adding, removing images to favourites
  const addEmoji = (id) => {
    const newFavoueites  = [...favourites,id];
    setFavourites(newFavoueites);
  }

  const removeEmoji = (id)=> {
    //whichever element/movie is not in favourites should be include in new array
    const filteredFavourites  = favourites.filter(elem =>{
      return elem !== id;
    })
  }

  return (
    <div className="">
      <h3 className="text-xl text-center font-bold mb-8"> Trending Movies</h3>

      <div className="flex justify-center flex-wrap ">
        {movies.length === 0
          ? ((<h1>Loading</h1>),
            (
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
            ))
          : movies.map((movie) => {
              console.log(movie);
              return (
                <div
                  onMouseOver={
                    ()=>{
                      showEmoji(movie.id);
                    }
                  }
                  onMouseLeave={
                    ()=>{
                      hideEmoji();
                    }
                  }

                  key={movie.id}
                  className="
          bg-[url(https://image.tmdb.org/t/p/original//dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg)]

        bg-center bg-cover
        w-[150px]
        h-[30vh]
        md:h-[40vh]
        md:w-[180px]
        m-4
        rounded-xl
        hover:scale-110
        duration: 300
        flex items-end
        relative
        " 
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                  }}
                >

                  
                  <div 
                  className="
                  p-2
                  bg-gray-800
                  absolute top-2 right-2
                  rounded-xl
                  
                  "
                  style={{
                    display:hovered === movie.id ? "block": "none"
                  }}
                  >
                  {
                    !favourites.includes(movie.id) ?
                     <div className=""
                     onClick={ ()=> { addEmoji(movie.id) }}
                     >
                        😍
                    </div>:
                     <div className="
                     onClick={ ()=> { removeEmoji(movie.id) }}
                     ">
                        ❌
                    </div>
                  }
                  </div>
                  

                  <div
                    className="
            font-bold
             text-white
              text-center
               bg-gray-900
                bg-opacity-90
                 py-2
                 w-full
                 rounded-b-xl
          "
                  >
                    {movie.title || movie.name}
                  </div>
                </div>
              );
            })}
      </div>
      <Pagination
        pageNum={pageNum}
        onPrev={onPrev}
        onNext={onNext}
      ></Pagination>
    </div>
  );
}

export default Movies;
