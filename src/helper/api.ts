import { IArt } from '../interfaces/art';
import {fetchJson} from './fetchJson';

/*
  Api colocada fora de uma variável global apenas para facilitar na hora de avaliação do teste,
  visto que, a mesma também é gratuita e livre acesso.
*/
export const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1";
export const ART_ID = `${API_URL}/objects`;

/**
 As funções getAllArts e getListArts realizam os loops
 apenas para restringir a quantidade de arts que vai ser pego
 */

export const getAllArts = async (): Promise<IArt[]> => {
  const cont = 100;
  const totalArts = getNumberArts() + cont;
  const arrayArts = [];

  for (let i = cont; i <= totalArts; i++){
    const data = await fetchJson<IArt | null>(`${ART_ID}/${i}`);
    if (data && data.objectID && data.primaryImageSmall) arrayArts.push(data);
  }
  return arrayArts;
}


//Limite colocado apenas para restringir o
//tamanho da requisição, pois a API é muito grande
export const getListArts = async (page?: number ): Promise<IArt[]> => {

  const arrayArts = [];
  const limit = 100 + getNumberArts();
  const artsPerPage = 12;
  let cont = 100 + (page * artsPerPage);

  // Loop feito apenas para pegar as requisições do limit
  while(arrayArts.length < artsPerPage && cont <= limit) {
    const data = await fetchJson<IArt | null>(`${ART_ID}/${cont}`);
    if (data && data.objectID && data.primaryImageSmall) arrayArts.push(data);
    cont++;
  }
  return arrayArts;
};

export const getArt = async (id: string | string[]): Promise<IArt> => {
  const idString = Array.isArray(id) ? id[0] : id
  const data = await fetchJson<IArt>(`${ART_ID}/${idString}`);
  return data;
}

// Uma falsa rota para pegar o numero total de Arts
export const getNumberArts = (): number => {
  return 80;
}
