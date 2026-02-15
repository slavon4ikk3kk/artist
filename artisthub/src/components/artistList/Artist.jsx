import React, { useState, useEffect } from "react";
import s from "./Artist.module.css";
import images from "../../assets/index.js";
import LearnMore from "../learnMore/LearnMore";
const Artist = () => {
  const [artistList, setArtistList] = useState([]);
  const [page, setPage] = useState(1);
  const [id, setId] = useState(null);
  const [isModal, setIsModal] = useState(false);
  async function fetchArtists() {
    const response = await fetch(
      `https://sound-wave.b.goit.study/api/artists?limit=10&page=${page}`
    );
    const res = await response.json();
    setArtistList((prev) => {
      return [...prev, ...res.artists];
    });
  }
  useEffect(() => {
    fetchArtists();
  }, [page]);

  return (
    <section id="artists" className={s.section}>
      <div className={s.gradient}></div>
      <div className="container">
        <div className={s.textContainer}>
          <p className={s.pArtists}>Artists</p>
          <p className={s.explore}>Explore Your New Favorite Artists</p>
        </div>
        <ul className={s.ul}>
          {artistList.length > 0 &&
            artistList.map((artist) => {
              return (
                <li className={s.liArtist}> 
                  <img src={artist.strArtistThumb}></img>
                  <ul className={s.ulGenre}>
                    {artist.genres.map((genre) => {
                      return <li className={s.genre}>{genre}</li>;
                    })}
                  </ul>
                  <p className={s.name}>{artist.strArtist}</p>
                  <p className={s.text}>{artist.strBiographyEN}</p>
                  <div className={s.details}>
                    <button
                      className={s.detailText}
                      onClick={() => {
                        setIsModal(true);
                        setId(artist._id);
                      }}
                    >
                      Learn more{" "}
                      <img src={images.arrow} className={s.arrow}></img>
                    </button>
                  </div>
                </li>
              );
            })}
          <button
            className={s.loadMore}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Load more
          </button>
        </ul>
        {isModal && <LearnMore id={id} setIsModal={setIsModal}></LearnMore>}
      </div>
    </section>
  );
};

export default Artist;
