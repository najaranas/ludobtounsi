// Arabic translations (Tunisian dialect)
export const ar = {
  common: {
    play: "العب",
    settings: "الإعدادات",
    about: "حول",
    back: "رجوع",
    confirm: "تأكيد",
    cancel: "إلغاء",
  },
  home: {
    title: "لودو التونسي",
    newGame: "لعبة جديدة",
  },
  gameSetup: {
    selectPlayers: "اختر عدد اللاعبين",
    playerSetup: "إعداد اللاعبين",
  },
  gamePlay: {
    yourTurn: "دورك",
    rollDice: "ارمي الزهر",
    winner: "فائز!",
  },
} as const;

export type Translations = typeof ar;
