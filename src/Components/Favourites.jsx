import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";
import up from "../assets/icons8-external-24.png";
import down from "../assets/icons8-move-down-24.png";


let genre_ids = {
  28: "Action",
  12: "Adventure",
  16: "Animation", 35:"Comedy",
  80: "Crime", 98: "Documentary",
  18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History",
  27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance",
  878: "Sci-fi", 10770: "TV",
  53: "TV", 53: "Thriller",
  10752:"War", 37:"Western"
}

let movies = [
  {
      "adult": false,
      "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      "id": 505642,
      "title": "Black Panther: Wakanda Forever",
      "original_language": "en",
      "original_title": "Black Panther: Wakanda Forever",
      "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      "media_type": "movie",
      "genre_ids": [
          28,
          12,
          878
      ],
      "popularity": 10722.223,
      "release_date": "2022-11-09",
      "video": false,
      "vote_average": 7.498,
      "vote_count": 2577
  },
  {
      "adult": false,
      "backdrop_path": "/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg",
      "id": 646389,
      "title": "Plane",
      "original_language": "en",
      "original_title": "Plane",
      "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
      "poster_path": "/2g9ZBjUfF1X53EinykJqiBieUaO.jpg",
      "media_type": "movie",
      "genre_ids": [
          28,
          12,
          53
      ],
      "popularity": 423.816,
      "release_date": "2023-01-13",
      "video": false,
      "vote_average": 6.721,
      "vote_count": 145
  },
  {
      "adult": false,
      "backdrop_path": "/1RZlwRdVbKav9O153vWbYCn54Nk.jpg",
      "id": 615777,
      "title": "Babylon",
      "original_language": "en",
      "original_title": "Babylon",
      "overview": "A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films and to sound films in the late 1920s.",
      "poster_path": "/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
      "media_type": "movie",
      "genre_ids": [
          18,
          35
      ],
      "popularity": 1344.657,
      "release_date": "2022-12-22",
      "video": false,
      "vote_average": 7.693,
      "vote_count": 807
  },
  {
      "adult": false,
      "backdrop_path": "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
      "id": 100088,
      "name": "The Last of Us",
      "original_language": "en",
      "original_name": "The Last of Us",
      "overview": "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
      "poster_path": "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
      "media_type": "tv",
      "genre_ids": [
          18,
          10759
      ],
      "popularity": 5003.05,
      "first_air_date": "2023-01-15",
      "vote_average": 8.845,
      "vote_count": 1418,
      "origin_country": [
          "US"
      ]
  },
  {
      "adult": false,
      "backdrop_path": "/1pDYetDF3r9V7ZB5SeyoPcUkBiB.jpg",
      "id": 788752,
      "title": "Viking Wolf",
      "original_language": "no",
      "original_title": "Vikingulven",
      "overview": "After witnessing a grotesque murder at a party in her new town, a teenager starts having strange visions and bizarre desires.",
      "poster_path": "/9CxWs95VQWlOAdgE0iadrz3RPwH.jpg",
      "media_type": "movie",
      "genre_ids": [
          27,
          53,
          9648
      ],
      "popularity": 95.039,
      "release_date": "2022-11-18",
      "video": false,
      "vote_average": 5.842,
      "vote_count": 60
  },
  {
      "adult": false,
      "backdrop_path": "/lzAgQ6PDLtQ5gGrflTu3SzJaKBk.jpg",
      "id": 739986,
      "title": "True Spirit",
      "original_language": "en",
      "original_title": "True Spirit",
      "overview": "When the tenacious young sailor Jessica Watson sets out to be the youngest person to sail solo, nonstop and unassisted around the world, many expect her to fail. With the support of her sailing coach and mentor Ben Bryant and her parents, Jessica is determined to accomplish what was thought to be impossible, navigating some of the world’s most challenging stretches of ocean over the course of 210 days.",
      "poster_path": "/B7m21gukMeVK3NAuk1PLCo9C8p.jpg",
      "media_type": "movie",
      "genre_ids": [
          12,
          18,
          10751
      ],
      "popularity": 97.712,
      "release_date": "2023-01-26",
      "video": false,
      "vote_average": 6.816,
      "vote_count": 19
  },
  {
      "adult": false,
      "backdrop_path": "/lKK5OrmQHGPrPE1k1vebT7Af2hl.jpg",
      "id": 210757,
      "name": "The Knockout",
      "original_language": "zh",
      "original_name": "狂飙",
      "overview": "20 years of perseverance, hot-blooded teenagers finally become the people's hero.",
      "poster_path": "/SIY6lVRZ9W1C4GU3Dvi3l4MSFs.jpg",
      "media_type": "tv",
      "genre_ids": [
          80,
          9648,
          18,
          10759
      ],
      "popularity": 321.147,
      "first_air_date": "2023-01-14",
      "vote_average": 8.115,
      "vote_count": 26,
      "origin_country": [
          "CN"
      ]
  },
  {
      "adult": false,
      "backdrop_path": "/zxfBtHz5UmSTfIEC4O4GngyjHwa.jpg",
      "id": 204541,
      "name": "Three-Body",
      "original_language": "zh",
      "original_name": "三体",
      "overview": "Nanotechnology researcher Wang Miao is taken to the Joint Operations Center by police officer Shi Qiang, who's investigating the mysterious suicide wave among scientists worldwide,  and recruited to sneak into an organization called the Frontiers of Science to help the investigation. When Wang Miao is contacted by the leader of the organization, Shen Yufei, she introduces him to a sophisticated VR video game called Three-Body, but soon he discovers that it's more than just a game.",
      "poster_path": "/vvKuYw2vmaBbWNgNxEQkuYYpX2l.jpg",
      "media_type": "tv",
      "genre_ids": [
          18,
          10765
      ],
      "popularity": 1623.99,
      "first_air_date": "2023-01-15",
      "vote_average": 8.3,
      "vote_count": 67,
      "origin_country": [
          "CN"
      ]
  },
  {
      "adult": false,
      "backdrop_path": "/7TelXvAFWfIGppmnplhfJpzqfd.jpg",
      "id": 1072567,
      "title": "Infiesto",
      "original_language": "es",
      "original_title": "Infiesto",
      "overview": "As the coronavirus upends their lives, two detectives doggedly pursue those responsible for an abduction they realize is part of a sinister pattern.",
      "poster_path": "/83o0IzCimc3HJLrXTvrq08h4oMf.jpg",
      "media_type": "movie",
      "genre_ids": [
          53,
          80,
          18
      ],
      "popularity": 100.121,
      "release_date": "2023-02-03",
      "video": false,
      "vote_average": 5.984,
      "vote_count": 31
  },
  {
      "adult": false,
      "backdrop_path": "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
      "id": 536554,
      "title": "M3GAN",
      "original_language": "en",
      "original_title": "M3GAN",
      "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
      "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
      "media_type": "movie",
      "genre_ids": [
          878,
          27,
          35
      ],
      "popularity": 3864.943,
      "release_date": "2022-12-28",
      "video": false,
      "vote_average": 7.587,
      "vote_count": 1318
  },
  {
      "adult": false,
      "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
      "id": 76600,
      "title": "Avatar: The Way of Water",
      "original_language": "en",
      "original_title": "Avatar: The Way of Water",
      "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      "media_type": "movie",
      "genre_ids": [
          878,
          12,
          28
      ],
      "popularity": 2298.707,
      "release_date": "2022-12-14",
      "video": false,
      "vote_average": 7.742,
      "vote_count": 5046
  },
  {
      "adult": false,
      "backdrop_path": "/v2GqQcm4Yg54ADrdbEi4Y1FZZhz.jpg",
      "id": 746524,
      "title": "Blood",
      "original_language": "en",
      "original_title": "Blood",
      "overview": "Jess, a newly separated mother and nurse, moves into her old family farmhouse with Tyler, her teenage daughter, and Owen, her eight-year-old son. One night, the family dog senses something in the woods and runs off to find it. He returns a couple of days later and attacks Owen, savagely biting him before Jess is able to intervene. Owen is rushed to the hospital. His condition worsens, and no one can figure out why... until Jess discovers a disturbing cure...",
      "poster_path": "/gCUFtTvjK4gbmjVxhx8bhyOhAeW.jpg",
      "media_type": "movie",
      "genre_ids": [
          53,
          27
      ],
      "popularity": 20.537,
      "release_date": "2023-01-12",
      "video": false,
      "vote_average": 5.2,
      "vote_count": 10
  },
  {
      "adult": false,
      "backdrop_path": "/faXT8V80JRhnArTAeYXz0Eutpv9.jpg",
      "id": 315162,
      "title": "Puss in Boots: The Last Wish",
      "original_language": "en",
      "original_title": "Puss in Boots: The Last Wish",
      "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      "media_type": "movie",
      "genre_ids": [
          16,
          12,
          35,
          10751,
          14
      ],
      "popularity": 5840.194,
      "release_date": "2022-12-07",
      "video": false,
      "vote_average": 8.569,
      "vote_count": 3304
  },
  {
      "adult": false,
      "backdrop_path": "/cSjccCESfkHq2AltVkY3WRYXqdg.jpg",
      "id": 850028,
      "title": "Alice, Darling",
      "original_language": "en",
      "original_title": "Alice, Darling",
      "overview": "A young woman trapped in an abusive relationship becomes an unwitting participant in an intervention staged by her two closest friends.",
      "poster_path": "/ybqS7I4tuMs1TIssvuLMk2lYlLe.jpg",
      "media_type": "movie",
      "genre_ids": [
          18,
          53
      ],
      "popularity": 40.694,
      "release_date": "2022-12-30",
      "video": false,
      "vote_average": 7.0,
      "vote_count": 20
  },
  {
      "adult": false,
      "backdrop_path": "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
      "id": 631842,
      "title": "Knock at the Cabin",
      "original_language": "en",
      "original_title": "Knock at the Cabin",
      "overview": "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
      "poster_path": "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
      "media_type": "movie",
      "genre_ids": [
          27,
          9648,
          53
      ],
      "popularity": 558.827,
      "release_date": "2023-02-01",
      "video": false,
      "vote_average": 6.683,
      "vote_count": 134
  },
  {
      "adult": false,
      "backdrop_path": "/PFJ2wNS3m5A85CFNPszc3bbDsc.jpg",
      "id": 1075519,
      "title": "The Locksmith",
      "original_language": "en",
      "original_title": "The Locksmith",
      "overview": "A thief fresh out of prison, tries to work his way back into the life of his daughter and ex-fiancé. Determined, he is forced to use the skills he has as a gifted locksmith. Things take a tumultuous turn after an unexpected disappearance.",
      "poster_path": "/kNQ9Z3TQ5vU5fvwuHqZvLooFcCI.jpg",
      "media_type": "movie",
      "genre_ids": [
          18,
          53,
          80
      ],
      "popularity": 59.599,
      "release_date": "2023-02-03",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 2
  },
  {
      "adult": false,
      "backdrop_path": "/1Cdu5HKjG8mQeBNKZfTB0dxvvVR.jpg",
      "id": 1003580,
      "title": "Legion of Super-Heroes",
      "original_language": "en",
      "original_title": "Legion of Super-Heroes",
      "overview": "Kara, devastated by the loss of Krypton, struggles to adjust to her new life on Earth. Her cousin, Superman, mentors her and suggests she leave their space-time to attend the Legion Academy in the 31st century, where she makes new friends and a new enemy: Brainiac 5. Meanwhile, she must contend with a mysterious group called the Dark Circle as it searches for a powerful weapon held in the Academy’s vault.",
      "poster_path": "/3whQLi8RI7h2h2Si2KTDFJxfEcR.jpg",
      "media_type": "movie",
      "genre_ids": [
          16,
          28,
          878
      ],
      "popularity": 107.632,
      "release_date": "2023-02-07",
      "video": false,
      "vote_average": 6.333,
      "vote_count": 9
  },
  {
      "adult": false,
      "backdrop_path": "/4q8yxTRcztBW8eMgoqziiELyHhQ.jpg",
      "id": 1008374,
      "title": "Baby Ruby",
      "original_language": "en",
      "original_title": "Baby Ruby",
      "overview": "After welcoming her baby, Ruby, home, the tightly scripted world of lifestyle influencer Jo starts to unravel. As increasingly sinister happenings mount, Jo is plunged into a waking fever dream where everyone is a threat and nothing is what it seems.",
      "poster_path": "/xsQyj1RWeKYafKaDRDfA3x5IVcZ.jpg",
      "media_type": "movie",
      "genre_ids": [
          18,
          27
      ],
      "popularity": 64.26,
      "release_date": "2023-02-03",
      "video": false,
      "vote_average": 5.6,
      "vote_count": 5
  },
  {
      "adult": false,
      "backdrop_path": "/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg",
      "id": 758009,
      "title": "Shotgun Wedding",
      "original_language": "en",
      "original_title": "Shotgun Wedding",
      "overview": "Darcy and Tom gather their families for the ultimate destination wedding but when the entire party is taken hostage, “’Til Death Do Us Part” takes on a whole new meaning in this hilarious, adrenaline-fueled adventure as Darcy and Tom must save their loved ones—if they don’t kill each other first.",
      "poster_path": "/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
      "media_type": "movie",
      "genre_ids": [
          28,
          10749,
          35
      ],
      "popularity": 3291.567,
      "release_date": "2022-12-28",
      "video": false,
      "vote_average": 6.372,
      "vote_count": 253
  },
  {
      "adult": false,
      "backdrop_path": "/3LsHvo8VTSrcN7nZSy3jyNYGdCW.jpg",
      "id": 931954,
      "title": "Venus",
      "original_language": "es",
      "original_title": "Venus",
      "overview": "Lucía, a club dancer on the run, takes refuge in a sinister building on the outskirts of Madrid where her sister Rocío lives with her daughter Alba.",
      "poster_path": "/yGpJbft7JQpQHHHasRr4wWdVcuJ.jpg",
      "media_type": "movie",
      "genre_ids": [
          18,
          27,
          53
      ],
      "popularity": 59.437,
      "release_date": "2022-12-02",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 15
  }
]


function Favourites() {
  let [genres, setGenres] = useState([]);

  useEffect(()=>{
    let temp = movies.map( (movie) => genre_ids[movie.genre_ids[0]])
    temp = new Set(temp)
    setGenres(["All Genres", ...temp]);
  },[])

  return (
    <>
      <div className="mt-6 flex space-x-2 justify-center">
        {genres.map((genre => {
          return(
          <button className="py-1 px-2 bg-gray-400 rounded-lg text-lg font-bold text-white hover:bg-blue-400">
            {genre}
          </button>
          )
        }))}
        
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        <input
          type="text"
          placeholder="search"
          className="border-2 py-1 px-2 text-center"
        />

        <input
          type="number"
          className="border-2 py-1 text-center px-2"
          value={1}
        />
      </div>

      
      <DataTable></DataTable>
      <Pagination></Pagination>
    </>
  );
}

function DataTable() {
  return (
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              <div className="flex">
                <img src={up}></img>
                <div>Rating</div>
                <img src={down}></img>
              </div>
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            <div className="flex">
                <img src={up}></img>
                <div>Popularity</div>
                <img src={down}></img>
              </div>
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Genre
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Remove</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
        {
          movies.map((movie) => {
            {console.log(movie)};
          return <tr class="hover:bg-gray-50" key={movie.id}>
            <th class="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
              
                <img
                  class="h-[6rem] object-fit"
                  src = {`https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path}`}
                  alt=""
                />
                
                <div class="text-sm font-medium text-gray-700 align-middle">{movie.title || movie.name}</div>
            </th>
            <td class="px-6 pl-12 py-4 ">
             {movie.vote_average}
            </td>
            <td class="px-6 pl-12 py-4">{movie.popularity.toFixed(2)}</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  {genre_ids[movie.genre_ids[0]]}
                </span>
                
              </div>
            </td>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1 rounded-full  px-2 py-1 text-xs font-semibold text-red-600">
                    Delete
                </span>
            </td>
          </tr>
          })
        }
        </tbody>
      </table>
    </div>
  );
}

export default Favourites;
