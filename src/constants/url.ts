export const tmdbImage = (
  path: string,
  width: 45 | 92 | 154 | 185 | 300 | 342 | 400 | 500 | 780 | 1280 | 'original'
) => {
  return `https://image.tmdb.org/t/p/w${width}${path}`
}
