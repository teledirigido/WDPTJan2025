import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function NewProject() {

  /**
   * 1. Display a form
   * 2. Define state variables for the project (title, description)
   * 3. Submit the data with handleSubmit and <form onSubmit={handleSubmit}> 
   * 4. Once 1, 2 and 3 are working we go to /projects page
   * 
   * 
   */
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  
  const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( !title || !description) {
      return;
    }

    const requestBody = { title, description };
    axios.post(`${API_URL}/projects`, requestBody)
      .then( (response) => {
        console.log(response);
        navigate('/projects')
      }
    ).catch( error => console.log(error) );
  }


  return (
    <>
      <h3>Create a New Project</h3>

      <form onSubmit={handleSubmit} className="form-project has-shadow">
        <div className="field">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={title} 
            onChange={ e => setTitle(e.target.value) } required />
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" value={description}
            onChange={ e => setDescription(e.target.value) } required />
        </div>

        <button type="submit">Create</button>
      </form>
    </>
  )
}