import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/auth";
import { db } from "./config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [movies, setMovies] = useState([]);

  //add movies
  const [newMovies, setNewMovies] = useState("");
  const [releaseDate, setReleasedate] = useState(0);
  const [isNewMoviesOscar, setIsNewMoviesOscar] = useState(false);

  const moviesCollectionRef = collection(db, "movies");

  console.log(isNewMoviesOscar);
  // console.log(releaseDate);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        // console.log(data);
        // console.log(data.docs);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // console.log(filterData);
        setMovies(filterData);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, []);

  return (
    <div className="App">
      <Auth />

      <div>
        <input
          placeholder=" movie Title..."
          onChange={(e) => setNewMovies(e.target.value)}
        />
        <input
          placeholder=" release date..."
          type="number"
          onChange={(e) => setReleasedate(Number(e.target.value))}
        />
        <input
          id="check"
          type="checkbox"
          checked={isNewMoviesOscar}
          onChange={(e) => setIsNewMoviesOscar(e.target.checked)}
        />
        <label htmlFor="check">Received an Oscar</label>
      </div>

      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p>data: {movie.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
