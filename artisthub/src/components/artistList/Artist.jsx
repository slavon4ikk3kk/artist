import React, { useState, useEffect } from "react";
import s from "./Artist.module.css";
import images from "../../assets/index.js"
const Artist = () => {
    const [artistList, setArtistList] = useState([]);
    async function fetchArtists() {
        const response = await fetch(
            "https://sound-wave.b.goit.study/api/artists?limit=10&page=1"
        );
        const res = await response.json();
        setArtistList(res.artists);
    }
    useEffect(() => {
        fetchArtists();
    }, []);

    return (
        <ul className={s.ul}>
            {artistList.map((artist) => {
                return <li>
                    <img src={artist.strArtistThumb}></img>
                    <ul className={s.ulGenre}>
                        {artist.genres.map((genre) => {
                            return <li className={s.genre}>{genre}</li>
                        })}
                    </ul>
                    <p className={s.name}>{artist.strArtist}</p>
                    <p className={s.text}>{artist.strBiographyEN}</p>
                    <div className={s.details}>
                        <button className={s.detailText}>Learn more</button>
                        <img src={images.icon} className={s.arrow}></img>
                    </div>



                </li>
            })}

        </ul>
    );
};

export default Artist;
