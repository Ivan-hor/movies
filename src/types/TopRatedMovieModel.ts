
export interface ITopRatedMovieModel  {
    'id': number,
    'title': string,
    'poster_path': string,
    'vote_count': number,
    'vote_average': number,
    'overview': string,
    'genres': Genre[],
    'release_date': string,
}
enum Genre {
    'Comedy',
    'Drama',
    'Romance',
}
