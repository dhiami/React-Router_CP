import './App.css';
import Navbarr from './Components/navbar';
import Filter from './Components/Filter';
import Add from './Components/Add';
import MovieCard from './Components/MovieCard';
import MovieList from './Components/Movielist';
import Rate from './Components/Rate';
import {movies} from './Components/movies'
import {useState} from "react"
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Trailer from './Components/Trailer';
function App() {
  const [movieList , setmovieList] = useState(movies)
  const addHandler=(newMovie)=>{
    setmovieList(
      [...movieList, newMovie]
      
    )
  }
  const [search, setsearch] = useState("")
  const [rate, setrate] = useState(1)
  return (
    <div className="App">
    <Router>
       <Route exact path='/' >
    <Navbarr/>
    <Filter setsearch={setsearch} setrate={setrate} rate={rate}/>
    <Add addHandler={addHandler}/>
    <MovieList movieList={movieList} search={search} rate={rate}/>
    </Route>
    <Route path="/Trailer/:id" component={Trailer}>
        
        <Trailer movies={movies} />
 
      </Route>
    </Router>
    </div>
    

  );
}

export default App;
