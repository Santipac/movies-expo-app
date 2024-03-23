import { HttpAdapter } from "@/config/adapters/http/http.adapters";
import { Cast } from "@/core/entities/cast.entity";
import { MovieDBCastResponse } from "@/infrastructure/interfaces/movie-db.responses";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getCast = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {
    try {
        const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`)
        const actors = cast.map((actor) => CastMapper.fromMovieDBCastToEntity(actor))
        return actors
    } catch (error) {
        throw new Error(`Cannot get cast of the movie`)
    }

}