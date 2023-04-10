import { Actor } from "./actor.interface";
import { Genre } from "./genre.interface";

export interface Movie {
    id: number,
    title: string,
    actors: Actor[],
    genres: Genre[],
    synopsis: string,
    image: string,
    duration: number,
    launchDate: Date
}