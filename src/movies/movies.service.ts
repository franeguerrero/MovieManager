import { Injectable } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { createMovieDto } from './dto/create-movie.dto';
import { updateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {

    private movieList: Movie[] = [];

    getMovies(): Movie[] {
        return this.movieList;
    }

    getMovie(id: number): Movie {
        return this.movieList.find(movie => movie.id == id)
    }

    addMovie(createMovieDto: createMovieDto): Movie {
        const newMovie: Movie = {
            id: this.movieList.length + 1,
            title: createMovieDto.title,
            actors: createMovieDto.actors,
            genres: createMovieDto.genres,
            synopsis: createMovieDto.synopsis,
            image: createMovieDto.image,
            duration: createMovieDto.duration,
            launchDate: createMovieDto.launchDate
        };
        this.movieList.push(newMovie);
        return newMovie
    }

    updateMovie(id: number, updateMovieDto: updateMovieDto): Movie {
        const movieToUpdate = this.movieList.find(movie => movie.id == id);
        if (movieToUpdate) {
            Object.assign(movieToUpdate, updateMovieDto);
            return movieToUpdate;
        }
        return null;
    }

    deleteMovie(id: number): Movie[] {
        this.movieList = this.movieList.filter(movie => movie.id != id);
        return this.movieList;
    }
}
