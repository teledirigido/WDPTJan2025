import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AddTask } from "../components/AddTask";

export function EditSingleProject() {
  
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";
  // Fetch the project data
  const getProject = () => {
    axios.get(`${API_URL}/projects/${projectId}`)
      .then( response => {
        console.log(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
  }

  useEffect( () => {
    getProject();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // call axios with axios.put
    // we have to pass the body 
    // redirect using navigate to the project detail page
    const requestBody = { title, description };
    axios.put(`${API_URL}/projects/${projectId}`, requestBody )
      .then( response => {
        navigate(`/projects/${projectId}?update=success`); 
      })
  }

  // Display it inside the form

  return (
    <>
      <h1>Edit Project: {projectId} </h1>
      <form onSubmit={handleSubmit} className="form-project has-shadow">
        <div className="field">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={title} 
            onChange={ e => setTitle(e.target.value) } required />
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" value={description}
            rows="4" cols="50"
            onChange={ e => setDescription(e.target.value) } required />
        </div>


        <button type="submit">Update</button>
      </form>

    </>
  )
}