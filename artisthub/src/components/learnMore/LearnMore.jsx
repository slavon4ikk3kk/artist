import React, { useState, useEffect } from "react";
import s from "./LearnMore.module.css";

const LearnMore = ({ id }) => {
  const [artist, setArtist] = useState(null);
  const [albums, setalbums] = useState(null);
  async function fetchArtist() {
    const response = await fetch(
      `https://sound-wave.b.goit.study/api/artists/${id}`
    );
    const res = await response.json();
    setArtist(res);
  }
  useEffect(() => {
    fetchArtist();
  }, [id]);

  async function fetchAlbums() {
    const response = await fetch(
      `https://sound-wave.b.goit.study/api/artists/${id}/albums`
    );
    const res = await response.json();
    setalbums(res);
  }
  useEffect(() => {
    fetchAlbums();
  }, [id]);
  console.log(artist);
  return (
    <div className={s.overlay}>
      {artist && <div className={s.modal}>
        <p>{artist.strArtist}</p>
        <img src={artist.strArtistThumb}></img>
        <p className={s.yearActive}>Years active:</p>
        <p className={s.year}>{artist.intFormedYear}</p>
        <p>Sex</p>
        <p>{artist.strGender}</p>
        <p>Members</p>
        <p>{artist.intMembers}</p>
        <p>Country</p>
        <p>{artist.strCountry}</p>
        <p>Biography</p>
        <p>{artist.strBiographyEN}</p>
        <ul>
          {artist.genres.map((genre) => {
            return <li className={s.genre}>{genre}</li>
          })}
        </ul>
        <ul>
          {artist.albumsList.map((album) => {
            return <li>
              <p>{album.strAlbum}</p>
              <ul>
                {album.tracks.map((track)=>{
                  <div className={s.trackInfo}>
                      <p>{track.name}</p>
                      <p>{track.time}</p>
                      <p>{track.link}</p>
                  </div>
                })}
              </ul>
            </li>
          })}
        </ul>
      </div>
      }
    </div>
  );
};
export default LearnMore;
