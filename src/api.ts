export function suspensify(promise: Promise<any>) {
  let status = 'success';
  let result: any;

  let suspender = promise.then(
    (response) => {
      status = 'success';
      result = response;
    },
    (error) => {
      status = 'error';
      result = error;
    }
  );

  return {
    read() {
      // pending
      if (status === 'pending') throw suspender;

      // reject
      if (status === 'error') throw result;

      if (status === 'success') return result;
    },
  };
}

export function FetchPokemon(id: number) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
    res.json()
  );
}
