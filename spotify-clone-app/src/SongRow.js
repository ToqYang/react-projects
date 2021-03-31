import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
  return (
    <div className="songRow">
      <img className="songRow__album" src={track.all} />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists
            .map((artist) => {
              return artist.name;
            })
            .join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;