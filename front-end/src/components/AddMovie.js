import React, { useState } from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';



const AddMovie = () => {
  const navigate = useNavigate();
    const [movName, setMovieName] = useState('');
    const [castList, setCastList] = useState('');
    const [director,setDirector] = useState('');
    const [image, setImage] = useState(null); // State to hold the selected image file
    const [storyLine, setStoryLine] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [rating, setRating] = useState('');

    const saveMovie = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('movName', movName);
        formData.append('castList', castList);
        formData.append('director',director)
        formData.append('image', image); // Append the image file to FormData
        formData.append('storyLine', storyLine);
        formData.append('genre', genre);
        formData.append('releaseDate', releaseDate);
        formData.append('rating', rating);

        try {
            const response = await axios.post('http://localhost:8080/movies/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Set content type for FormData
                }
            })
            .then((response) => {
                          console.log(response);
                          navigate(`/movies/view/${response.data.movId}`)
                      });
            console.log(response);
            // Handle success
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    const handleImageChange = (l) => {
        setImage(l.target.files[0]);
    }


 
  return (
    <div>
    <br />
    <br />
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Movie</h2>
          <div className='card-body'>
            <form onSubmit={saveMovie}>
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
                <label className='form-label'>Image :</label>
                <input
                  type='file'
                  name='image'
                  className='form-control'
                  onChange={handleImageChange}
                  required
                />
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
                <button type="submit" className='btn btn-success'>Save</button>
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
export default AddMovie

// import React, { useState } from 'react';
// import axios from 'axios';
// import {Link,useNavigate} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';
// // Put any other imports below so that CSS from your
// // components takes precedence over default styles.

// const AddMovie = () => {
//     const navigate = useNavigate();
//     const saveMovie = (e) => {
//         e.preventDefault();

//         axios.post('http://localhost:8080/movies/add',{
//         movName,
//         castList,
//         director,
//         storyLine,
//         genre,
//         releaseDate,
//         rating 
//         }
//         )
//         .then((response) => {
//             console.log(response);
//             navigate(`/movies/view/${response.data.movId}`)
//         });
//     };

//     const[movName,setMovieName] = useState('');
//     const[castList,setCastList] = useState('');
//     const[director,setDirector] = useState('');
//     // const[imageUrl,setImageUrl] = useState('');
//     const[storyLine,setStoryLine] = useState('');
//     const[genre,setGenre] = useState('');
//     const[releaseDate,setReleaseDate] = useState('');
//     const[ rating,setRating] = useState('');
//   return (
//     <div>
//     <br />
//     <br />
//     <div className='container'>
//       <div className='row'>
//         <div className='card col-md-6 offset-md-3 offset-md-3'>
//           <h2 className='text-center'>Add Movie</h2>
//           <div className='card-body'>
//             <form onSubmit={saveMovie}>
//               <div className='form-group mb-2'>
//                 <label className='form-label'>Movie Name :</label>
//                 <input
//                   type='text'
//                   placeholder='MovieName'
//                   name='MovieName'
//                   className='form-control'
//                   value={movName}
//                   onChange={(e) => setMovieName(e.target.value)}
//                   required
//                 />
//                 <label className='form-label'>Cast :</label>
//                 <input
//                   type='text'
//                   placeholder='Cast list'
//                   name='cast'
//                   className='form-control'
//                   value={castList}
//                   onChange={(e) => setCastList(e.target.value)}
//                   required
//                 />
//                 <label className='form-label'>Directed By :</label>
//                 <input
//                   type='text'
//                   placeholder='Directed by'
//                   name='director'
//                   className='form-control'
//                   value={director}
//                   onChange={(e) => setDirector(e.target.value)}
//                   required
//                 />
//                 {/* <label className='form-label'>Image :</label>
//                 <input
//                   type='text'
//                   placeholder='Image'
//                   name='image'
//                   className='form-control'
//                   value={imageUrl}
//                   onChange={(e) => setImageUrl(e.target.value)}
//                   required
//                 /> */}
//                 <label className='form-label'>Story Line :</label>
//                 <input
//                   type='text'
//                   placeholder='Story line'
//                   name='storyline'
//                   className='form-control'
//                   value={storyLine}
//                   onChange={(e) => setStoryLine(e.target.value)}
//                   required
//                 />
//                 <label className='form-label'>Genre :</label>
//                 <input
//                   type='text'
//                   name='Genre'
//                   className='form-control'
//                   value={genre}
//                   onChange={(e) => setGenre(e.target.value)}
//                   required
//                 />
//                 <label className='form-label'>Release Date :</label>
//                 <input
//                   type='date'
//                   name='releasedate'
//                   className='form-control'
//                   value={releaseDate}
//                   onChange={(e) => setReleaseDate(e.target.value)}
//                   required
//                 />
//                 <label className='form-label'>Rating :</label>
//                 <input
//                   type='text'
//                   name='rating'
//                   className='form-control'
//                   value={rating}
//                   onChange={(e) => setRating(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="col-md-6 d-flex justify-content-md-end align-items-end">
//                 {/* "Save" button */}
//                 <button type="submit" className='btn btn-success'>Save</button>
//                 {/* "Cancel" button */}
//                 <Link to="/movies/view/" className='btn btn-danger ms-2'>Cancel</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// };
// export default AddMovie