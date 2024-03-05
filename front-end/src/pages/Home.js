import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Master from '../images/master.jpg';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/movies/view');
      const sortedData = [...response.data].sort((a, b) => a.movId - b.movId);
      setMovies(sortedData);
      setFilteredMovies(sortedData); // Set initial filtered movies
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/movies/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const filterByLanguage = (language) => {
    if (language === "") {
      // If director is empty, show all movies
      setFilteredMovies(movies);
    } else {
      // Filter movies by selected director
      const filtered = movies.filter(movie => movie.language === language);
      setFilteredMovies(filtered);
    }
    setSelectedLanguage(language); // Set selected director
  };

  return (
    <div>
     
      <div className='container'>
        <h2 className='text-center'>Movie List</h2>
        <div className='flex justify-center'>
          <button onClick={() => filterByLanguage("")} className={`m-1 border-orange-700 text-dark bg-orange-700 hover:bg-white hover:text-orange-700 ${selectedLanguage === "" ? "bg-white text-orange-700" : ""}`}>All Movies</button>
          <button onClick={() => filterByLanguage("Tamil")} className={`m-1 border-orange-700 text-dark bg-orange-700 hover:bg-white hover:text-orange-700 ${selectedLanguage === "Tamil" ? "bg-white text-orange-700" : ""}`}>Tamil</button>
          <button onClick={() => filterByLanguage("English")} className={`m-1 border-orange-700 text-dark bg-orange-700 hover:bg-white hover:text-orange-700 ${selectedLanguage === "English" ? "bg-white text-orange-700" : ""}`}>English</button>
          <button onClick={() => filterByLanguage("Malayalam")} className={`m-1 border-orange-700 text-dark bg-orange-700 hover:bg-white hover:text-orange-700 ${selectedLanguage === "Malayalam" ? "bg-white text-orange-700" : ""}`}>Malayalam</button>
          <button onClick={() => filterByLanguage("Korean")} className={`m-1 border-orange-700 text-dark bg-orange-700 hover:bg-white hover:text-orange-700 ${selectedLanguage === "Korean" ? "bg-white text-orange-700" : ""}`}>Korean</button>
        </div>
        <div className='row'>
          {filteredMovies.map(({ movId, movName, castList, director, image, storyLine, genre, releaseDate, rating,language }) => (
            <div key={movId} className='col-md-4 mb-3'>
              <MovieCard
                Movie={movName}
                Language={language}
                Releasedate={new Date(releaseDate).toLocaleDateString()}
                Img={Master}
                CastList={castList}
                Storyline={storyLine}
                Director={director}
                Genre={genre}
                Rating={rating}
                Update={<Link to={`/update/${movId}`} className='btn btn-info' style={{ marginRight: '5px' }}>Update</Link>}
                Delete={<button onClick={() => handleDelete(movId)} className='btn btn-danger'>Delete</button>}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
