import axios from "axios";
import type { Movie } from "@/models/Movie";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getMovie = async (id: string): Promise<Movie> => {
  const response = await axios.get<Movie>(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return response.data;
};

export const getPopularMovies = async (page: number): Promise<Response> => {
  const response = await axios.get<Response>(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
    },
  });
  return response.data;
};

export const getTopMovies = async (page: number): Promise<Response> => {
  const response = await axios.get<Response>(`${BASE_URL}/movie/top_rated`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
    },
  });
  return response.data;
};
