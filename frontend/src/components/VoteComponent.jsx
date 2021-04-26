import React from "react";
import { Link } from "react-router-dom";
import userThumbnail from "../assets/img/mockup/user-thumbnail.png";

export default function VoteComponent() {
  return (
    <div className="vote-container">
      <div>
      <p>🔥</p>
        <p>Fire</p>
      </div>
      <div> </div> {/* empty div on purpose to align buttons */}
      <div>
      <p>🙄</p>
        <p>Naaah</p>
      </div>
    </div>
  );
}
