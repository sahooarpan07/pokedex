import axios from '../constants/axiosConfig';

async function getPokemonData(url) {
  try {
    const {data: {results = []} = {}} = await axios.get(url);
    const transformedPokemonData = await Promise.all(
      results.map(async pokemon => {
        const pokemonRecords = await axios.get(pokemon.url);
        return pokemonRecords.data;
      }),
    );
    return {pokemonRecords: transformedPokemonData};
  } catch (err) {
    console.log(err);
  }
}

async function getPokemonDescription(id) {
  try {
    const response = await axios.get(`/pokemon-species/${id}`);
    return response;
  } catch (error) {
    console.log(error, 'desc err');
  }
}

async function getPokemonStrengthWeaknesses(id) {
  return axios.get(`/type/${id}`);
}

async function getPokemonTypes() {
  return axios.get('/type/');
}

export {
  getPokemonData,
  getPokemonDescription,
  getPokemonStrengthWeaknesses,
  getPokemonTypes,
};
