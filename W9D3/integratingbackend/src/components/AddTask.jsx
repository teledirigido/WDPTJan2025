import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function AddTask({ projectId, getProject }) {
  /**
   * Axios:
   * axios.post(`${API_URL}/tasks`, requestBody) // title, description and projectId
   * 
   * Pass the projectId prop ✅
   * Create the form to add the task ✅
   * Create state variables ✅
   * use axios.post() ✅
   * pass the request body ✅
   * navigate to the project ✅
   * 
   * 
   */

  const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  const handleTask = (e) => {
    e.preventDefault();

    const requestBody = { title, description, projectId };

    axios.post(`${API_URL}/tasks`, requestBody )
      .then( response => {
        getProject()
        setTitle('');
        setDescription('');
      })
  }

  return (
    <div className="add-task">
      Add Tasks for project {projectId}
      <br />
      <form onSubmit={handleTask}>
        <input type="text" name="title" value={title} 
          onChange={ e => setTitle(e.target.value) }
          placeholder="Title" />
        <input type="text" name="description" value={description} 
          onChange={ e => setDescription(e.target.value) }
          placeholder="Description" />
        <button>Add Task</button>
      </form>
    </div>
  )
}