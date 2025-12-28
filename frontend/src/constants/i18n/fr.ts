// French translations
export const fr = {
  common: {
    play: "Jouer",
    settings: "Paramètres",
    about: "À propos",
    back: "Retour",
    confirm: "Confirmer",
    cancel: "Annuler",
  },
  home: {
    title: "Ludo Btounsi",
    newGame: "Nouvelle Partie",
  },
  gameSetup: {
    selectPlayers: "Choisir les joueurs",
    playerSetup: "Configuration des joueurs",
  },
  gamePlay: {
    yourTurn: "Votre tour",
    rollDice: "Lancer le dé",
    winner: "Gagnant!",
  },
} as const;

export type Translations = typeof fr;
