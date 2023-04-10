import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './interfaces/movie.interface';
import { createMovieDto } from './dto/create-movie.dto';
import { updateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) { }

    @Get()
    getMovies(): Movie[] {
        return this.moviesService.getMovies();
    }

    @Get(':id')
    getMovie(@Param('id') id: number): Movie {
        return this.moviesService.getMovie(id);
    }

    @Post()
    addMovie(@Body() createMovieDto: createMovieDto): Movie {
        return this.moviesService.addMovie(createMovieDto);
    }

    @Put(':id')
    updateMovie(@Param('id') id: number, @Body() updateMovieDto: updateMovieDto): Movie {
        return this.moviesService.updateMovie(id, updateMovieDto);
    }

    @Delete(':id')
    deleteMovie(@Param('id') id: number): Movie[] {
        return this.moviesService.deleteMovie(id);
    }
}
