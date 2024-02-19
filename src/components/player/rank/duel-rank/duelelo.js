function calculateElo(rating1, rating2, score1, kFactor = 32) {
    const expectedScore1 = 1 / (1 + Math.pow(10, (rating2 - rating1) / 400));
    const newRating1 = rating1 + kFactor * (score1 - expectedScore1);
    return newRating1;
  }
  
  // Example usage:
  let player1Rating = 1200; // Initial rating for player 1
  let player2Rating = 1200; // Initial rating for player 2
  
  // Assume player 1 wins and player 2 loses
  let score1 = 1; // Score for player 1 (1 for win, 0.5 for draw, 0 for loss)
  
  // Calculate new ratings
  let newPlayer1Rating = calculateElo(player1Rating, player2Rating, score1);
  let newPlayer2Rating = calculateElo(player2Rating, player1Rating, 1 - score1);
  
  console.log(`New rating for player 1: ${newPlayer1Rating}`);
  console.log(`New rating for player 2: ${newPlayer2Rating}`);