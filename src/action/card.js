export const FETCH_CARD = "FETCH_CARD";

export function fetchCard(cards) {
  return {
    type: FETCH_CARD,
    list: cards,
  };
}