


function Score({ scoreData }) {
    const { date, score } = scoreData;
  
    return (
      <li>
        <span>Date: {date}</span> - <span>Score: {score}</span>
      </li>
    );
  }
  
  export default Score;
  