import React from 'react'
import { useState, useEffect } from 'react';


interface Anime {
  // data: [];
  "mal_id": 0;
  url: string;
  images: {
    "jpg": {
    "image_url": "string",
    "small_image_url": "string",
    "large_image_url": "string",
    };
    "webp": {
    "image_url": "string",
    "small_image_url": "string",
    "large_image_url": "string",
    }
    };
  "title": "string";
}

const Main = () => {

  const [animes, setAnime] = useState<Anime[]>([]);
  const [search,setSearch]=useState('')

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(String(e.target.value));
  }

  const getAnime = async(animes:Anime[])=>{
    // const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`);
    // const resData = await res.json()
    // setAnime(resData.data)
    setAnime(animes)
  }
  
  // useEffect( ()=>{
  //   // getAnime();
  //   fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`).then(res=>res.json()).then(json=>getAnime(json.data || []))
  // },[search])

  function searchClick() {
    fetch(`https://api.jikan.moe/v4/anime?q=${search || '' }&sfw`).then(res=>res.json()).then(json=>getAnime(json.data || []))

  }

  return(
    <div className="form">
      <h1 className="form-title">AnimeSearch</h1>
      <div className="search">
      <input className="input" type="text" placeholder="Search your anime" onChange={change}/>
      <button className="click" onClick={searchClick}>Search</button>

    </div>

      
    <div className="container">
          {animes.map((anime) => (
            <div className="movie" key={anime.mal_id}>
              <img src={anime.images.jpg.image_url} className="image" alt="..." />
              <div className="">
                <a className="href" href={anime.url}>{anime.title}</a>
              {/* <h1>{anime.title || 'lol'} </h1> */}
              </div>
          </div>
          ))}
    </div>
    </div>
  )

}

export default Main