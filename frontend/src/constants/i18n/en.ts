// English translations
export const en = {
  common: {
    play: "Play",
    settings: "Settings",
    about: "About",
    back: "Back",
    confirm: "Confirm",
    cancel: "Cancel",
  },
  home: {
    title: "Ludo Btounsi",
    newGame: "New Game",
  },
  gameSetup: {
    selectPlayers: "Select Players",
    playerSetup: "Player Setup",
  },
  gamePlay: {
    yourTurn: "Your Turn",
    rollDice: "Roll Dice",
    winner: "Winner!",
  },
} as const;

export type Translations = typeof en;
