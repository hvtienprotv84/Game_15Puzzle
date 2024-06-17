import {
  AppBar,
  Avatar,
  Button,
  Chip,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Alarm,
  CompareArrows,
  Pause,
  PlayArrow,
  PowerSettingsNew,
  Replay,
} from "@material-ui/icons";
import React from "react";
import MediaQuery from "react-responsive";
import { GameStatus, GAME_PAUSED, GAME_STARTED } from "../lib/game-status";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "rgb(232, 232, 232)",
    backgroundColor: "rgba(232, 232, 232, 0)",
  },

  toolbar: {
    ["@media (max-width: 414px)"]: {
      justifyContent: "center",
    },
  },

  title: {
    color: "#000",
    flexGrow: 1,
  },

  newgame:{
    '&:hover': {
      // CSS styles cho trạng thái hover
      // backgroundColor: "rgb(255, 0, 0)",
      // ... các CSS styles khác
    },
  },

  move:{
    marginLeft:"20px",
  },

});

type Props = {
  seconds: number;
  moves: number;
  onResetClick: () => void;
  onPauseClick: () => void;
  onNewClick: () => void;
  gameState: GameStatus;
};

const Menu = (props: Props) => {
  const {
    seconds = 0,
    moves = 0,
    onResetClick,
    onPauseClick,
    onNewClick,
    gameState,
  } = props;
  const classes = useStyles(props);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <MediaQuery query="(min-width: 772px)">
          <Typography className={classes.title} variant="h5" component="div" style={{ fontWeight: "bold"}}>
          <a href="/" style={{ textDecoration: "none" , color: "black",}}>
            15 Puzzle - ReactJS - TypeScript - Material UI
          </a>
          </Typography>
        </MediaQuery>

        <Button
          aria-label="Start a new game"
          onClick={onNewClick}
          startIcon={<PowerSettingsNew className="menuIcon" />}
        >
          <MediaQuery query="(min-width: 772px)">
            <Typography component="span" variant="button" className={classes.newgame}>
              Game Mới
            </Typography>
          </MediaQuery>
        </Button>
        <Button
          aria-label="Pause/Continue current game."
          onClick={onPauseClick}
          startIcon={
            gameState === GAME_PAUSED ? (
              <PlayArrow className="menuIcon" />
            ) : (
              <Pause className="menuIcon" />
            )
          }
          disabled={gameState !== GAME_STARTED && gameState !== GAME_PAUSED}
        >
          <MediaQuery query="(min-width: 772px)">
            <Typography component="span" variant="button">
              {gameState === GAME_PAUSED ? "Tiếp Tục" : "Dừng"}
            </Typography>
          </MediaQuery>
        </Button>
        <Button
          aria-label="Reset game"
          onClick={onResetClick}
          startIcon={<Replay />}
        >
          <MediaQuery query="(min-width: 772px)" component="span">
            Khởi Động Lại Ván
          </MediaQuery>
        </Button>
        <Chip className={classes.move}
          avatar={
            <Avatar>
              <Alarm />
            </Avatar>
          }
          label={
            <>
              <MediaQuery query="(min-width: 772px)" component="span">
                Thời Gian Đã Chơi: 
              </MediaQuery>
              <Typography component="span"> {seconds}s</Typography>
            </>
          }
        />
        <Chip className={classes.move}
          avatar={
            <Avatar>
              <CompareArrows />
            </Avatar>
          }
          label={
            <>
              <MediaQuery query="(min-width: 772px)" component="span">
                Số Lượt Di Chuyển:
              </MediaQuery>
              <Typography component="span"> {moves}</Typography>
            </>
          }
        />
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
