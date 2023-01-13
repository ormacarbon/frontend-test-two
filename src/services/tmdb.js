const basicFetch = async (endpoint) => {
  const req = await fetch(
    `${process.env.API_BASE}${endpoint}&api_key=${process.env.API_KEY}`
  );
  const json = await req.json();
  return json;
};

const webFetch = async (endpoint) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}${endpoint}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const json = await req.json();
  return json;
};

const tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR`)
      },
      {
        slug: 'trendings',
        title: 'Recomendados para você',
        itens: await basicFetch(`/trending/all/week?language=pt-BR`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        itens: await basicFetch(`/movie/top_rated?language=pt-BR`)
      },
      {
        slug: 'action',
        title: 'Ação',
        itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        itens: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR`
        )
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR`)
      }
    ];
  },
  getNetflixOriginals: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'originals',
      title: 'Originais do Netflix',
      itens: await basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&page=${page}`
      )
    };
  },
  getTrendings: async (type, page) => {
    let itens;
    let title;

    page ? (page = page.toString()) : (page = '1');

    switch (type) {
      case 'all':
        itens = await webFetch(
          `/trending/all/week?language=pt-BR&page=${page}`
        );
        title = 'Recomendados para você (todos)';
        break;
      case 'movie':
        itens = await webFetch(
          `/trending/movie/week?language=pt-BR&page=${page}`
        );
        title = 'Recomendados para você (filmes)';
        break;
      case 'tv':
        itens = await webFetch(`/trending/tv/week?language=pt-BR&page=${page}`);
        title = 'Recomendados para você (séries)';
        break;
      default:
        itens = await webFetch(
          `/trending/all/week?language=pt-BR&page=${page}`
        );
        title = 'Recomendados para você';
        break;
    }
    return {
      slug: 'trendings',
      title: title ? title : 'Recomendados para você',
      itens
    };
  },
  getTrendingsSSR: async (type, page) => {
    let itens;
    let title;

    page ? (page = page.toString()) : (page = '1');

    switch (type) {
      case 'all':
        itens = await basicFetch(
          `/trending/all/week?language=pt-BR&page=${page}`
        );
        title = 'Recomendados para você (todos)';
        break;
      case 'movie':
        itens = await basicFetch(
          `/trending/movie/week?language=pt-BR&page=${page}`
        );
        title = 'Recomendados para você (filmes)';
        break;
      case 'tv':
        itens = await basicFetch(
          `/trending/tv/week?language=pt-BR&page=${page}`
        );
        title = 'Recomendados para você (séries)';
        break;
      default:
        itens = await basicFetch(
          `/trending/all/week?language=pt-BR&page=${page}`
        );
        title = 'Recomendados para você';
        break;
    }
    return {
      slug: 'trendings',
      title: title ? title : 'Recomendados para você',
      itens
    };
  },
  getTopRated: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'toprated',
      title: 'Em alta',
      itens: await basicFetch(`/movie/top_rated?language=pt-BR&page=${page}`)
    };
  },
  getActionMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'action',
      title: 'Ação',
      itens: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&page=${page}`
      )
    };
  },
  getComedyMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'comedy',
      title: 'Comédia',
      itens: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&page=${page}`
      )
    };
  },
  getHorrorMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'horror',
      title: 'Terror',
      itens: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&page=${page}`
      )
    };
  },
  getRomanceMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'romance',
      title: 'Romance',
      itens: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&page=${page}`
      )
    };
  },
  getDocumentaryMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'documentary',
      title: 'Documentários',
      itens: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&page=${page}`
      )
    };
  },
  getMovieInfo: async (movieId, type) => {
    let info;

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR`);
          break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR`);
          break;
        default:
          info = await basicFetch(`/movie/${movieId}?language=pt-BR`);
          if (info.success === false) {
            info = await basicFetch(`/tv/${movieId}?language=pt-BR`);
            return info;
          } else {
            return info;
          }
      }

      return info;
    }
  },

  getImage: (imageId) => {
    return `https://image.tmdb.org/t/p/original/${imageId}`;
  },
  getMovieById: async (movieId) => {
    let result = await webFetch(`/movie/${movieId}?language=pt-BR`);
    return result;
  },
  getTvById: async (movieId) => {
    return await webFetch(`/tv/${movieId}?language=pt-BR`);
  }
};

export default tmdb;
