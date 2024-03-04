import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard"; // Assuming MovieCard is in the same directory
import Master from "../master.jpg"

const Home = () => {
   
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/movies/view");
      const sortedData = [...response.data].sort((a, b) => a.movId - b.movId);
      setMovies(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/movies/${id}`);
      fetchData(); // Refetch the data after successful deletion
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Fetch data every 1 second (adjust the interval as per your requirements)
    const interval = setInterval(fetchData, 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='container'>
      <h2 className='text-center'>Movie List</h2>
      
      <div className="row">
        {movies.map(({movId,movName,castList,director,image,storyLine,genre,releaseDate,rating})=>
          <div key={movId} className="col-md-4 mb-3">
            <MovieCard
              Movie={movName}
              Releasedate={releaseDate}
              Img={Master}
              CastList={castList}
              Storyline={storyLine}
              Director={director}
              Genre={genre}
              Rating={rating}
              Update={ <Link to={'/update/'+movId} className='btn btn-info'style={{ marginRight: '5px' }}>Update</Link>}
              Delete={<button onClick={() => handleDelete(movId)} className='btn btn-danger'>Delete</button>}
            />
          </div>
        )
  }
      </div>
    </div>
  );
};

export default Home;
