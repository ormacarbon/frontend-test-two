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

const moviePaginationAdd = async ({ slug, title, genre, page }) => {
  return {
    slug,
    title,
    itens: await webFetch(
      `/discover/movie?with_genres=${genre}&language=pt-BR&page=${page}`
    )
  };
};

const tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: 'series',
        title: 'Séries da Netflix',
        itens: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR`)
      },
      {
        slug: 'trendings',
        title: 'Recomendados para você',
        itens: await basicFetch(`/trending/all/week?language=pt-BR`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        itens: await basicFetch(`/movie/top_rated?language=pt-BR`),
        type: 'movies'
      },
      {
        slug: 'action',
        title: 'Ação',
        itens: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR`
        ),
        type: 'movies'
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        itens: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR`
        ),
        type: 'movies'
      },
      {
        slug: 'horror',
        title: 'Terror',
        itens: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR`
        ),
        type: 'movies'
      },
      {
        slug: 'romance',
        title: 'Romance',
        itens: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR`
        ),
        type: 'movies'
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        itens: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR`
        ),
        type: 'movies'
      }
    ];
  },
  getAllGenreMoviesList: async () => {
    return [
      {
        slug: 'action',
        title: 'Ação',
        itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR`)
      },
      {
        slug: 'adventure',
        title: 'Aventura',
        itens: await basicFetch(`/discover/movie?with_genres=12&language=pt-BR`)
      },
      {
        slug: 'animation',
        title: 'Animação',
        itens: await basicFetch(`/discover/movie?with_genres=16&language=pt-BR`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR`)
      },
      {
        slug: 'crime',
        title: 'Crime',
        itens: await basicFetch(`/discover/movie?with_genres=80&language=pt-BR`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR`)
      },
      {
        slug: 'drama',
        title: 'Drama',
        itens: await basicFetch(`/discover/movie?with_genres=18&language=pt-BR`)
      },
      {
        slug: 'family',
        title: 'Família',
        itens: await basicFetch(
          `/discover/movie?with_genres=10751&language=pt-BR`
        )
      },
      {
        slug: 'fantasy',
        title: 'Fantasia',
        itens: await basicFetch(`/discover/movie?with_genres=14&language=pt-BR`)
      },
      {
        slug: 'history',
        title: 'História',
        itens: await basicFetch(`/discover/movie?with_genres=36&language=pt-BR`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR`)
      },
      {
        slug: 'music',
        title: 'Música',
        itens: await basicFetch(
          `/discover/movie?with_genres=10402&language=pt-BR`
        )
      },
      {
        slug: 'mistery',
        title: 'Mistério',
        itens: await basicFetch(
          `/discover/movie?with_genres=9648&language=pt-BR`
        )
      },
      {
        slug: 'romance',
        title: 'Romance',
        itens: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR`
        )
      },
      {
        slug: 'sci-fi',
        title: 'Ficção Cientifica',
        itens: await basicFetch(
          `/discover/movie?with_genres=878&language=pt-BR`
        )
      },
      {
        slug: 'cinema-tv',
        title: 'Cinema TV',
        itens: await basicFetch(
          `/discover/movie?with_genres=10770&language=pt-BR`
        )
      },
      {
        slug: 'thriller',
        title: 'Suspense',
        itens: await basicFetch(`/discover/movie?with_genres=53&language=pt-BR`)
      },
      {
        slug: 'war',
        title: 'Guerra',
        itens: await basicFetch(
          `/discover/movie?with_genres=10752&language=pt-BR`
        )
      },
      {
        slug: 'western',
        title: 'Faroeste',
        itens: await basicFetch(`/discover/movie?with_genres=37&language=pt-BR`)
      }
    ];
  },
  getNetflixOriginalsSSR: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'series',
      title: 'Séries da Netflix',
      itens: await basicFetch(
        `/discover/tv?with_networks=213&language=pt-BR&page=${page}`
      )
    };
  },
  getNetflixOriginals: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'series',
      title: 'Séries da Netflix',
      itens: await webFetch(
        `/discover/tv?with_networks=213&language=pt-BR&page=${page}`
      )
    };
  },
  getAmazonOriginalsSSR: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'series',
      title: 'Séries da Amazon',
      itens: await basicFetch(
        `/discover/tv?with_networks=1024&language=pt-BR&page=${page}`
      )
    };
  },
  getAmazonOriginals: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'series',
      title: 'Séries da Amazon',
      itens: await webFetch(
        `/discover/tv?with_networks=1024&language=pt-BR&page=${page}`
      )
    };
  },
  getParamountPlusSSR: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'series',
      title: 'Séries da Paramount +',
      itens: await basicFetch(
        `/discover/tv?with_networks=4330&language=pt-BR&page=${page}`
      )
    };
  },
  getParamountPlus: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'series',
      title: 'Séries da Paramount +',
      itens: await webFetch(
        `/discover/tv?with_networks=4330&language=pt-BR&page=${page}`
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
      itens: await webFetch(
        `/discover/movie?with_genres=28&language=pt-BR&page=${page}`
      )
    };
  },
  getAdventureMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'adventure',
      title: 'Aventura',
      itens: await webFetch(
        `/discover/movie?with_genres=12&language=pt-BR&page=${page}`
      )
    };
  },
  getAnimationMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'animation',
      title: 'Animação',
      itens: await webFetch(
        `/discover/movie?with_genres=16&language=pt-BR&page=${page}`
      )
    };
  },
  getComedyMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'comedy',
      title: 'Comédia',
      itens: await webFetch(
        `/discover/movie?with_genres=35&language=pt-BR&page=${page}`
      )
    };
  },
  getCrimeMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'crime',
      title: 'Crime',
      itens: await webFetch(
        `/discover/movie?with_genres=80&language=pt-BR&page=${page}`
      )
    };
  },
  getDocumentaryMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'documentary',
      title: 'Documentários',
      itens: await webFetch(
        `/discover/movie?with_genres=99&language=pt-BR&page=${page}`
      )
    };
  },
  getDramaMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'drama',
      title: 'Drama',
      itens: await webFetch(
        `/discover/movie?with_genres=18&language=pt-BR&page=${page}`
      )
    };
  },
  getFamilyMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'family',
      title: 'Família',
      itens: await webFetch(
        `/discover/movie?with_genres=10751&language=pt-BR&page=${page}`
      )
    };
  },
  getFantasyMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'fantasy',
      title: 'Fantasia',
      itens: await webFetch(
        `/discover/movie?with_genres=14&language=pt-BR&page=${page}`
      )
    };
  },
  getHistoryMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'history',
      title: 'História',
      itens: await webFetch(
        `/discover/movie?with_genres=36&language=pt-BR&page=${page}`
      )
    };
  },
  getHorrorMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'horror',
      title: 'Terror',
      itens: await webFetch(
        `/discover/movie?with_genres=27&language=pt-BR&page=${page}`
      )
    };
  },
  getMusicMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'music',
      title: 'Música',
      itens: await webFetch(
        `/discover/movie?with_genres=10402&language=pt-BR&page=${page}`
      )
    };
  },
  getMisteryMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'mistery',
      title: 'Mistério',
      itens: await webFetch(
        `/discover/movie?with_genres=9648&language=pt-BR&page=${page}`
      )
    };
  },
  getRomanceMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'romance',
      title: 'Romance',
      itens: await webFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&page=${page}`
      )
    };
  },
  getSciFiMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'sci-fi',
      title: 'Ficção Cientifica',
      itens: await webFetch(
        `/discover/movie?with_genres=878&language=pt-BR&page=${page}`
      )
    };
  },
  getCinemaTvMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'cinema-tv',
      title: 'Cinema TV',
      itens: await webFetch(
        `/discover/movie?with_genres=10770&language=pt-BR&page=${page}`
      )
    };
  },
  getThrillerMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'thriller',
      title: 'Suspense',
      itens: await webFetch(
        `/discover/movie?with_genres=53&language=pt-BR&page=${page}`
      )
    };
  },
  getWarMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'war',
      title: 'Guerra',
      itens: await webFetch(
        `/discover/movie?with_genres=10752&language=pt-BR&page=${page}`
      )
    };
  },
  getWesternMovies: async (page) => {
    page ? (page = page.toString()) : (page = '1');
    return {
      slug: 'western',
      title: 'Faroeste',
      itens: await webFetch(
        `/discover/movie?with_genres=37&language=pt-BR&page=${page}`
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
          info = await basicFetch(`/tv/${movieId}?language=pt-BR`);
          type = 'tv';
          if (info.success === false) {
            info = await basicFetch(`/movie/${movieId}?language=pt-BR`);
            type = 'movie';
          }
          break;
      }

      return { info, type };
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
  },
  getVideo: async (id, type) => {
    let info;

    if (id) {
      switch (type) {
        case 'movie':
          info = await basicFetch(`/movie/${id}/videos?language=pt-BR`);
          if (info.results.length < 1) {
            info = await basicFetch(`/movie/${id}/videos?language=en-US`);
          }
          break;
        case 'tv':
          info = await basicFetch(`/tv/${id}/videos?language=pt-BR`);
          if (info.results.length < 1) {
            info = await basicFetch(`/tv/${id}/videos?language=en-US`);
          }
          break;
        default:
          info = await basicFetch(`/tv/${id}/videos?language=pt-BR`);
          type = 'tv';
          if (info.success === false) {
            info = await basicFetch(`/movie/${id}/videos?language=pt-BR`);
            type = 'movie';
          }
          break;
      }

      return { info, type };
    }
  },
  getTvVideoById: async (tvId) => {
    let serieVideo = await webFetch(`/tv/${tvId}/videos?&language=pt-BR`);
    if (serieVideo.results.length >= 1) {
      return serieVideo;
    } else {
      serieVideo = await webFetch(`/tv/${tvId}/videos?&language=en-US`);
      return serieVideo;
    }
  }
};

export default tmdb;
