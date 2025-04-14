import axios from "axios";
import type { Movie } from "@/models/Movie";
import type { ApiResponse } from "@/models/ApiResponse";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getMovie = async (id: string): Promise<Movie> => {
  try {
    const response = await axios.get<Movie>(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with ID ${id}:`, error);
    throw error;
  }
};

export const getPopularMovies = async (page: number): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const getTopMovies = async (page: number): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top movies:", error);
    throw error;
  }
};

export const getMoviesBySearch = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching movies with query "${query}":`, error);
    throw error;
  }
};
