import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams,useNavigate,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const Movie_BASE_REST_API_URL = 'http://localhost:8080/movies';
const UpdateMovie = () => {

    const[movName,setMovieName] = useState('');
    const[castList,setCastList] = useState('');
    const[director,setDirector] = useState('');
    const[image,setImage] = useState('');
    const[storyLine,setStoryLine] = useState('');
    const[genre,setGenre] = useState('');
    const[releaseDate,setReleaseDate] = useState('');
    const[ rating,setRating] = useState('');
    const{id} = useParams();

    console.log(id);
    const navigate = useNavigate();
  

        useEffect(() => {
            axios.get('http://localhost:8080/movies/'+id)
                    .then((response) => {
                        setMovieName(response.data.movName);
                        setCastList(response.data.castList);
                        setDirector(response.data.director);
                        setImage(response.data.image)
                        setStoryLine(response.data.storyLine);
                        setGenre(response.data.genre);
                        setReleaseDate(response.data.releaseDate);
                        setRating(response.data.rating);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        },[id]);
        
        const saveChanges = (e) => {
            e.preventDefault();
            const Movie = { movName, castList,director, storyLine, genre, releaseDate, rating };
            axios
              .put(Movie_BASE_REST_API_URL + '/' + id, Movie)
              .then((response) => {
                navigate('/movies');
              })
              .catch((error) => {
                console.log(error);
              });
          };

    
  return (
    <div>
    <br />
    <br />
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Update Movie</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Movie Name :</label>
                <input
                  type='text'
                  placeholder='MovieName'
                  name='MovieName'
                  className='form-control'
                  value={movName}
                  onChange={(e) => setMovieName(e.target.value)}
                  required
                />
                <label className='form-label'>Cast :</label>
                <input
                  type='text'
                  placeholder='Cast list'
                  name='cast'
                  className='form-control'
                  value={castList}
                  onChange={(e) => setCastList(e.target.value)}
                  required
                />
                <label className='form-label'>Directed By :</label>
                <input
                  type='text'
                  placeholder='Directed by'
                  name='director'
                  className='form-control'
                  value={director}
                  onChange={(e) => setDirector(e.target.value)}
                  required
                />
                {/* <label className='form-label'>Image :</label>
                <input
                  type='text'
                  placeholder='Image'
                  name='image'
                  className='form-control'
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                /> */}
                <label className='form-label'>Story Line :</label>
                <input
                  type='text'
                  placeholder='Story line'
                  name='storyline'
                  className='form-control'
                  value={storyLine}
                  onChange={(e) => setStoryLine(e.target.value)}
                  required
                />
                <label className='form-label'>Genre :</label>
                <input
                  type='text'
                  name='Genre'
                  className='form-control'
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  required
                />
                <label className='form-label'>Release Date :</label>
                <input
                  type='date'
                  name='releasedate'
                  className='form-control'
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                  required
                />
                <label className='form-label'>Rating :</label>
                <input
                  type='text'
                  name='rating'
                  className='form-control'
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 d-flex justify-content-md-end align-items-end">
                {/* "Save" button */}
                <button type="submit" className='btn btn-success' onClick={saveChanges}>Update</button>
                {/* "Cancel" button */}
                <Link to="/movies/view/" className='btn btn-danger ms-2'>Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};
export default UpdateMovie