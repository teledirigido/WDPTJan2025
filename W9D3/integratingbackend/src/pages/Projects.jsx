import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export function Projects() {

  // List all projects
  // 1. We have to create a state variable for projects
  // 2. Fetch and get those projects
  // 3. Set them on the state variable
  // 4. Iterate the project .map and lis them

  const [projects, setProjects] = useState([]);
  const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

  const getProjects = () => {
    axios.get(`${API_URL}/projects?_embed=tasks`)
      .then( (response) => {
        // console.log(response.data);
        setProjects(response.data);
      });
  }
  useEffect( () => {
    getProjects();
  }, []);

  return (
    <>
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map( (item) => {
          return (
            <Link to={`/projects/${item.id}`} className="project-item has-shadow" key={item.id}>
              #{item.id} - {item.title}
            </Link>
          )
        })}
      </div>
    </>
  ) 
}