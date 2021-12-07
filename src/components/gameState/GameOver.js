import { useScoreAPI } from "../../hooks/useScoreAPI";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {Howl} from "howler";  // Howler JS Audio library
import GameEndTheme from "../../audioclips/game_over.mp3" 

export const GameOver = ({ gameScore }) => {
  useScoreAPI();

  const gameover = new Howl({
    src: GameEndTheme,
  })
  gameover.play() //game over mp3

  return (
    <div>
      <h1>Game Over</h1>
      <p>Your score is {gameScore}</p>
      <Button
        component={Link}
        to="/scoreboard"
        variant="contained"
        color="primary"
      >
        Continue
      </Button>
    </div>
  );
};
