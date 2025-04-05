import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { AddTask } from "../components/AddTask";

export function SingleProject() {

  /**
   * 1. Create project state variable ✅
   * 2. Use "http://localhost:5173/projects/3" to read the id ✅
   * 3. Fetch the data using the id from the URL ✅
   * 4. Set project with the response from the axios call ✅
   * 5. Render the template 
   */

  const [project, setProject] = useState(null);
  const navigate = useNavigate();
  const { projectId } = useParams();
  const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

  // Check if update is success
  const [queryArgs, setQueryArgs] = useSearchParams();

  const getProject = () => {
    axios.get(`${API_URL}/projects/${projectId}?_embed=tasks`)
      .then( response => {
        console.log(response.data);
        setProject(response.data);
      });
  }

  const handleDelete = () => {
    axios.delete(`${API_URL}/projects/${projectId}`)
      .then( () => {
        navigate('/projects');
      }).catch( err => {
        console.log(err);
      }) 
  }

  useEffect( () => {
    getProject();
  }, [])


  return (
    <>
     { project && <div className="single-project">
        
        { queryArgs.get("updated") && <div className="update-success">
          Your project has been updated!
        </div> }

        <header className="single-project--header">
          <h3>{project.title}</h3>
          <div className="single-project--actions">
            <Link to={`/projects/${project.id}/edit`}>Edit</Link> -  <button onClick={handleDelete}>Delete</button>
          </div>
        </header>
        <p>{project.description}</p>
        <div className="single-project--tasks">
          { project.tasks.map( task => {
            return(
              <div key={task.id} className="single-project--task">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            )
          }) }
        </div>
      </div> }

      { !project && <>Loading...</> }

      <AddTask projectId={projectId} getProject={getProject} />

      <div className="mt-2">
        <Link to="/projects">
            See all projects
        </Link>
      </div>

    </>
  )
}