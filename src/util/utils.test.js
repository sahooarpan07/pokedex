const {getPokemonEggGroups, getPokemonAbilities} = require('./utils');

test('should transform eggGroups correctly', () => {
  const eggGroups = [
    {
      name: 'bulbasaur',
    },
  ];

  expect('Bulbasaur').toMatch(getPokemonEggGroups(eggGroups));
});

test('should transform eggGroups correctly', () => {
  const abilities = [
    {
      ability: {
        name: 'fighting',
      },
    },
  ];

  expect('Fighting').toMatch(getPokemonAbilities(abilities));
});
