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
  return (
    <div className={s.overlay}>
      <div className={s.modal}></div>
    </div>
  );
};
export default LearnMore;
