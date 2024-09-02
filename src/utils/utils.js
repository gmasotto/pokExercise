export const typeColors = {
  rock: "rgb(148, 81, 81)",
  ghost: "rgb(247, 247, 247)",
  electric: "rgb(255, 255, 161)",
  bug: "#F6D6A7",
  poison: "#e0a7f6",
  normal: "#F4F4F4",
  fairy: "rgba(255, 192, 203, 0.863)",
  fire: "#FBE3DF",
  grass: "#E2F9E1",
  water: "#E0F1FD",
};

export function loadPokeTypeImage(filename) {
  // i need this to load pokemon type icons
  const images = import.meta.glob("/src/assets/pokeTypes/*.{png,svg}");
  return Object.keys(images).filter((f) => f.includes(filename))[0];
}

export function loadPokeStatsImage(filename) {
  // used to load the stats icons
  const images = import.meta.glob("/src/assets/stats/*.{png,svg}");
  return Object.keys(images).filter(
    (f) => f === `/src/assets/stats/${filename}.png`
  )[0];
}

export function capitalizeFirstLetter(word) {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
}
