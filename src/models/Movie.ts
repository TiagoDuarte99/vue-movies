export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  genres: { id: number; name: string }[];
  vote_average: number;
  runtime: number;
}
