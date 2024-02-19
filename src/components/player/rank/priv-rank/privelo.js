function calculateElo(ratings1, ratings2, score1, score2, kFactor = 32) {
    // Calculate the average rating for each team
    const avgRating1 = ratings1.reduce((a, b) => a + b, 0) / ratings1.length;
    const avgRating2 = ratings2.reduce((a, b) => a + b, 0) / ratings2.length;
  
    // Calculate the expected score for each team
    const expectedScore1 = 1.0 / (1.0 + Math.pow(10, (avgRating2 - avgRating1) / 400));
    const expectedScore2 = 1.0 / (1.0 + Math.pow(10, (avgRating1 - avgRating2) / 400));
  
    // Update each player's ratings based on the actual score and the expected score
    const newRatings1 = ratings1.map(rating => rating + kFactor * (score1 - expectedScore1));
    const newRatings2 = ratings2.map(rating => rating + kFactor * (score2 - expectedScore2));
  
    return [newRatings1, newRatings2];
  }
  
  // Example usage:
  let team1Ratings = [1600, 1500, 1700]; // Initial ratings for team 1 players
  let team2Ratings = [1600, 1600, 1600]; // Initial ratings for team 2 players
  
  // Assume team 1 wins and team 2 loses
  let score1 = 1; // Score for team 1 (1 for win, 0.5 for draw, 0 for loss)
  let score2 = 0; // Score for team 2
  
  // Calculate new ratings
  let newRatings = calculateElo(team1Ratings, team2Ratings, score1, score2);
  
  console.log(`New ratings for team 1: ${newRatings[0]}`);
  console.log(`New ratings for team 2: ${newRatings[1]}`);