// Border styles
export const BORDER = {
  width: {
    thin: 1,
    medium: 2,
    thick: 4,
  },

  style: {
    solid: "solid",
    dashed: "dashed",
    dotted: "dotted",
  },
} as const;

export type Border = typeof BORDER;
