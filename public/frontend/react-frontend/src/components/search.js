import axios from "axios";
import {useState, useEffect} from "react";
import React from "react";
import '../App.css';


function Search({ setResults }) {
    const [exercise_name, setName] = useState("");
    const [exercise_url, setVideoURL] = useState("");
    const [exerciseList, setExerciseList] = useState([]);
    const [input, setInput] = useState("");

    const getExercise = (value) => {
        axios.get("http://localhost:5000/fitness_app/exercise_videos/" + value
        )
        .then((res) =>
            {
                //for (const data of res.data) {
                   /*  localStorage.setItem('exerciseURL', data.exercise_url);
                    setName(exercise_name);
                    setVideoURL(data.exercise_url) */
                    //console.log(res.data);
                    setResults(res.data)
            }
        ).catch(error => {
            alert(error)})
            
/*         const Iframe = () => {
                     if (exercise_url === '') {
                    return null;
                    } else { 
                    return <div><iframe title="iframe"
                    width="420" height="345"
                    name={exercise_url}
                    src={exercise_url || ''}/><input type="text"/></div>
                    ;
                    }
                };
                setExerciseList(exerciseList.concat(<Iframe key={exerciseList.length}/>)); */
    //useEffect(() => {(localStorage.getItem('exerciseURL'))}, []);      
}  

    const handleChange = (value) => {
        setInput(value);
        getExercise(value);
    }
    return (
    <div>
        <div>
            <form submit="false">
                <div className="form-group">
                <div role="alert">
                    <label htmlFor="exercise-name">Search for an exercise to add to your workout:</label>
                    <input
                        type="text"
                        className="form-input"
                        id="exercise_name"
                        name={exercise_name}
                        value={input || ''}
                        onChange={(e) => {
                            handleChange(e.target.value);
                        }}
                        autoComplete="off"  />
                </div>
                </div>
{/*                     <button type="submit" className="btn btn-primary mt-4"  onClick=
                        {getExercise}>
                        Search
                    </button> */}
            </form>
        </div>
        <div className="exerciseContainer">
                {exerciseList}
        </div>

{/*         <button type="button" className="btn btn-primary mt-4"  >
                        Search
                    </button> */}

    </div>

    );
    
}

export default Search;
  