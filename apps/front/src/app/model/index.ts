export interface Game {
  opponents: Opponents;

  score: Score;
}

enum GamePoint {
  LOVE, FIFTEEN, THIRTY, FORTY, ADVANTAGE
}
enum Player {
  PLAYER_ONE, PLAYER_TWO
}

interface GameScore {
  p1Points: GamePoint;
  p2Points: GamePoint;
  serving: Player;
}

export interface Score {

  previousSets: SetScore[];
  currentSet: SetScore;
  currentGame: GameScore;

}

interface SetScore {
  p1Games: number;
  p2Games: number;
}

export interface Opponents {
  p1: string;
  p2: string;
}
