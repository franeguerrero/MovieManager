import { Actor } from "../interfaces/actor.interface";
import { Genre } from "../interfaces/genre.interface";

export class createMovieDto {
    title: string;
    actors: Actor[];
    genres: Genre[];
    synopsis: string;
    image: string;
    duration: number;
    launchDate: Date
}