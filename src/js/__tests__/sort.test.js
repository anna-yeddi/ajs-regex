import sortCharactersByHealth from "../sort.js";

test('should return a sorted array of 3 characters', () => {
  const characters = [
    {name: 'swordbearer', health: 10},
    {name: 'wizard', health: 100},
    {name: 'archer', health: 80},
  ]
  const expected = [
    {name: 'wizard', health: 100},
    {name: 'archer', health: 80},
    {name: 'swordbearer', health: 10},
  ]

  const sorted = sortCharactersByHealth(characters);

  expect(sorted).toEqual(expected);
})

test('should return a sorted array of 3 characters with their health starting with 1', () => {
  const characters = [
    {name: 'wizard', health: 10},
    {name: 'archer', health: 1},
    {name: 'swordbearer', health: 100},
  ]
  const expected = [
    {name: 'swordbearer', health: 100},
    {name: 'wizard', health: 10},
    {name: 'archer', health: 1},
  ]

  const sorted = sortCharactersByHealth(characters);

  expect(sorted).toEqual(expected);
})