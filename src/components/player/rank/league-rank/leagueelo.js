function calculateElo(rating1, rating2, score1, score2, kFactor = 32) {
    // Calculate the expected score for each team
    const expectedScore1 = 1.0 / (1.0 + Math.pow(10, (rating2 - rating1) / 400));
    const expectedScore2 = 1.0 / (1.0 + Math.pow(10, (rating1 - rating2) / 400));
  
    // Update each team's ratings based on the actual score and the expected score
    const newRating1 = rating1 + kFactor * (score1 - expectedScore1);
    const newRating2 = rating2 + kFactor * (score2 - expectedScore2);
  
    return [newRating1, newRating2];
  }
  
  // Example usage:
  let team1Rating = 1600; // Initial rating for team 1
  let team2Rating = 1600; // Initial rating for team 2
  
  // Assume team 1 wins and team 2 loses
  let score1 = 1; // Score for team 1 (1 for win, 0.5 for draw, 0 for loss)
  let score2 = 0; // Score for team 2
  
  // Calculate new ratings
  let newRatings = calculateElo(team1Rating, team2Rating, score1, score2);
  
  console.log(`New rating for team 1: ${newRatings[0]}`);
  console.log(`New rating for team 2: ${newRatings[1]}`);