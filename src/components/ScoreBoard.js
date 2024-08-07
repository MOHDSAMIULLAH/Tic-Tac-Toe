import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({ oScore = 0, xScore , xPlaying }) => {
  console.log("oScore");
  console.log(oScore);
  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}
