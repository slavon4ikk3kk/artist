import React, { useState, useEffect } from "react";
import s from "./LearnMore.module.css";
import images from "../../assets/index";
const LearnMore = ({ id, setIsModal }) => {
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

  const formatDuration = (milliseconds) => {
    if (!milliseconds) return "0:00"; // Защита от null или 0

    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${minutes}:${formattedSeconds}`;
  };

  return (
    <div className={s.overlay}>
      {artist && (
        <div className={s.modal}>
          <p className={s.artistName}>{artist.strArtist}</p>
          <img src={images.close} className={s.close} onClick={()=>{setIsModal(false)}}></img>
          <div className={s.artistWrap}>
          <div className={s.photo}>
          <img src={artist.strArtistThumb} className={s.artistPhoto}></img>
          </div>
          <div className={s.info}>
          <div className={s.infoFirstWrap}>
            <div>
          <p className={s.yearActive}>Years active:</p>
          <p className={s.year}>{artist.intFormedYear}</p>
          </div>
          <div>
          <p className={s.sex}>Sex</p>
          <p className={s.gender}>{artist.strGender}</p>
          </div>
          </div>
          <div className={s.secondInfoWrap}>
            <div>
          <p className={s.members}>Members</p>
          <p className={s.membersValue}>{artist.intMembers}</p>
          </div>
          <div>
          <p className={s.countryTitle}>Country</p>
          <p className={s.countryValue}>{artist.strCountry}</p>
          </div>
          </div>
          <p className={s.biographyTitle}>Biography</p>
          <p className={s.biographyValue}>{artist.strBiographyEN}</p>
          <ul className={s.ulGenre}>
            {artist.genres.map((genre) => {
              return <li className={s.genre}>{genre}</li>;
            })}
          </ul>
          </div>
          </div>
          <ul className={s.albums}>
            {albums &&
              albums.albumsList.map((album) => {
                return (
                  <li className={s.album}>
                    <p className={s.albumName}>{album.strAlbum}</p>
                    <div className={s.titleList}>
                      <p>Track</p>
                      <div className={s.titleWrap}>
                        <p>Time</p>
                        <p className={s.titleLink}>Link</p>
                      </div>
                    </div>
                    <ul>
                      {album.tracks.map((track) => {
                        return (
                          <div className={s.trackInfo}>
                            <p className={s.strTrack}>{track.strTrack}</p>
                            <p className={s.intDuration}>
                              {formatDuration(track.intDuration)}
                            </p>
                            {track.movie ? (
                              <a
                                className={s.trackLink}
                                href={track.movie}
                                target="_blank"
                              >
                                <img
                                  src={images.youtube}
                                  className={s.youtube}
                                ></img>
                              </a>
                            ) : (
                              <p className={s.none}>-</p>
                            )}
                          </div>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default LearnMore;
