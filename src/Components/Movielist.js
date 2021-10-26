import React from "react";
import MovieCard from "./MovieCard";
export default function MovieList ({movieList , search , rate , trailer}) {
    return(
        <div>
            <div className="movies"> {
                movieList.filter(el => el.title.toUpperCase().includes(search.toUpperCase().trim()) && el.rate>=rate)
                .map((el,key)=> <MovieCard key={el.id} movie= {el}    />)}
            </div>
        </div>
        
    );
}