export default function sortCharactersByHealth(characters) {
  function compareHealth(a, b) {
    return b.health - a.health;
  }
  const sorted = characters.sort(compareHealth);
  
  return sorted;
}