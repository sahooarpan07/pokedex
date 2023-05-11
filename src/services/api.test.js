import 'react-native';
import axios from '../constants/axiosConfig';
import MockAdapter from 'axios-mock-adapter';
import {
  getPokemonData,
  getPokemonDescription,
  getPokemonStrengthWeaknesses,
  getPokemonTypes,
} from './api';

it('should mock Pokemon description api', async () => {
  const mock = new MockAdapter(axios);
  const id = 1;
  const data = {
    egg_groups: [
      {
        name: 'monster',
        url: 'https://pokeapi.co/api/v2/egg-group/1/',
      },
      {
        name: 'plant',
        url: 'https://pokeapi.co/api/v2/egg-group/7/',
      },
    ],
    flavor_text_entries: [
      {
        flavor_text: `A strange seed was
        planted on its
        back at birth.The plant sprouts
        and grows with
        this POKéMON.`,
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'red',
          url: 'https://pokeapi.co/api/v2/version/1/',
        },
      },
    ],
  };

  mock.onGet(`/pokemon-species/${id}`).reply(200, data);
  const response = await getPokemonDescription(id);
  expect(response.data).toEqual(data);
});

it('should return an error when request fails', async () => {
  const mock = new MockAdapter(axios);
  const id = 1;
  const error = {message: 'Request failed with status code 404'};
  mock.onGet(`/pokemon-speciyes/${id}`).reply(404, error);
  await getPokemonDescription(id);
  expect(error.message).toEqual('Request failed with status code 404');
});

it('should mock Pokemon types api', async () => {
  const mock = new MockAdapter(axios);
  const data = {
    results: [
      {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
      {
        name: 'fighting',
        url: 'https://pokeapi.co/api/v2/type/2/',
      },
      {
        name: 'flying',
        url: 'https://pokeapi.co/api/v2/type/3/',
      },
      {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    ],
  };

  mock.onGet(`/type/`).reply(200, data);
  const response = await getPokemonTypes();
  expect(response.data).toEqual(data);
});

it('should mock Pokemon types api', async () => {
  const mock = new MockAdapter(axios);
  const id = 1;
  const data = {
    damage_relations: {
      double_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
      ],
    },
  };

  mock.onGet(`/type/${id}`).reply(200, data);
  const response = await getPokemonStrengthWeaknesses(id);
  expect(response.data).toEqual(data);
});

it('should mock Pokemon types api', async () => {
  const mock = new MockAdapter(axios);
  const data = {
    results: [
      {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
      {
        name: 'fighting',
        url: 'https://pokeapi.co/api/v2/type/2/',
      },
      {
        name: 'flying',
        url: 'https://pokeapi.co/api/v2/type/3/',
      },
      {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    ],
  };

  mock.onGet(`/type/`).reply(200, data);
  const response = await getPokemonTypes();
  expect(response.data).toEqual(data);
});

it('should mock getPokemonData api', async () => {
  const mock = new MockAdapter(axios);
  const types = [
    {
      name: 'fighting',
      url: 'https://pokeapi.co/api/v2/type/2/',
    },
    {
      name: 'flying',
      url: 'https://pokeapi.co/api/v2/type/3/',
    },
    {
      name: 'poison',
      url: 'https://pokeapi.co/api/v2/type/4/',
    },
  ];
  const data = {
    pokemonRecords: [
      {
        name: 'bulbasuar',
        id: 1,
        types,
      },
      {
        name: 'bulbasuar',
        id: 1,
        types,
      },
      {
        name: 'bulbasuar',
        id: 1,
        types,
      },
      {
        name: 'bulbasuar',
        id: 1,
        types,
      },
      {
        name: 'bulbasuar',
        id: 1,
        types,
      },
      {
        name: 'bulbasuar',
        id: 1,
        types,
      },
    ],
  };

  mock.onGet(`/pokemon`).reply(200, data);
  const responseData = await getPokemonData('/pokemon');
  expect(responseData.pokemonRecords).toBeDefined();
});

it('should return an error when request fails', async () => {
  const mock = new MockAdapter(axios);
  const url = '/pokmon';
  const error = {message: 'Request failed with status code 404'};
  mock.onGet(url).reply(404, error);
  await getPokemonData(url);
  expect(error.message).toEqual('Request failed with status code 404');
});
