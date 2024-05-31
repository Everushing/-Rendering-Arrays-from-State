import React from 'react';
import Score from '../Score/Score';

function Learner({ learnerData }) {
  const { name, bio, scores } = learnerData;

  return (
    <div className="learner">
      <h2>{name}</h2>
      <p>{bio}</p>
      <h3>Scores:</h3>
      <ul>
        {scores.map((score) => (
          <Score key={score.date} scoreData={score} />
        ))}
      </ul>
    </div>
  );
}

export default Learner;
