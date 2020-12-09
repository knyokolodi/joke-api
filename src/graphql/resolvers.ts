import axios from 'axios';
import { Category } from '../models/category';
import { Joke } from '../models/joke';

export const resolvers = {
  Query: {
    getCategories: async () => {
      try {
        const categories: Category = (
          await axios.get<Category>(`${process.env.API_URL}/jokes/categories`)
        ).data;

        return { categories };
      } catch (err) {
        console.error(`Get categories error: ${err}`);
        throw new Error(err);
      }
    },
    getRandomJoke: async (_: any, args: { category: string }) => {
      try {
        const { category } = args;
        const joke: Joke = (
          await axios.get<Joke>(
            `${process.env.API_URL}/jokes/random?category=${category}`
          )
        ).data;

        return joke;
      } catch (err) {
        console.error(`Get joke error: ${err}`);
        throw new Error(err);
      }
    },
  },
};
