"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const axios_1 = __importDefault(require("axios"));
exports.resolvers = {
    Query: {
        getCategories: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const categories = (yield axios_1.default.get(`${process.env.API_URL}/jokes/categories`)).data;
                return { categories };
            }
            catch (err) {
                console.error(`Get categories error: ${err}`);
                throw new Error(err);
            }
        }),
        getRandomJoke: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { category } = args;
                const joke = (yield axios_1.default.get(`${process.env.API_URL}/jokes/random?category=${category}`)).data;
                return joke;
            }
            catch (err) {
                console.error(`Get joke error: ${err}`);
                throw new Error(err);
            }
        }),
    },
};
