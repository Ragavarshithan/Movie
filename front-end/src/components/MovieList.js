import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from "react-router-dom";

 const MovieList = () =>{
  const [movies,setmovie]= useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const  fetchData = async()=>{
    try{
      const response = await axios.get("http://localhost:8080/movies/view ");
      const sortedData = [...response.data].sort((a,b)=>a.movId - b.movId);
      setmovie(sortedData);
    }catch(error){
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

    // Fetch data every 1 seconds (adjust the interval as per your requirements)
    const interval = setInterval(fetchData, 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className='container'
   
    >
        <h2 className='text-center'>Movie List</h2>
        <Link to = "/addMovie" className="btn btn-primary mb-2">Add Movie</Link>
        <table className="table table-bordered table-striped ">
        <thead>
          <th>Movie Name</th>
          <th>Cast List</th>
          <th>Directed By</th>
          <th>Image</th>
          <th>StoryLine</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th>Rating</th>
        </thead>
        <tbody>
          {
            movies.map(({movId,movName,castList,director,image,storyLine,genre,releaseDate,rating})=>
              <tr key={movId}>
                <td>{movName}</td>
                <td>{castList}</td>
                <td>{director}</td>
                <td>
                  <img src={image} alt={movName} style={{maxWidth:'100px'}}/>
                </td>
                <td>{storyLine}</td>
                <td>{genre}</td>
                <td>{releaseDate}</td>
                <td>{rating}</td>
                <td>
                  <Link to={'/update/'+movId} className='btn btn-info'style={{ marginRight: '5px' }}>Update</Link>
                  <button onClick={() => handleDelete(movId)} className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
        </table>
    </div>
  )
};
export default MovieList