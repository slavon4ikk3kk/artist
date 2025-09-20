import React, { useState, useEffect } from "react";

const Artist = () => {
  const [artistList, setArtistList] = useState([]);
  async function fetchArtists() {
    const response = await fetch(
      "https://sound-wave.b.goit.study/api/artists?limit=10&page=1"
    );
    const res = await response.json();
    console.log(res);
  }
  useEffect(() => {
    fetchArtists();
  }, []);

  return <div></div>;
};

export default Artist;
