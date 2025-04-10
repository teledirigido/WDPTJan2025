import { useUser } from "../context/User";

export function Header() {

  const { user, userLogout, userLogin } = useUser();

  return (
    <>
      <header className="header">
        <div className="header--title">
          <h1>My amazing website { user.avatar }</h1>
        </div>
        <div className="header--panel">
          
          { user.name && 
            <>
              {user.name} - <button onClick={userLogout}>Logout</button>
            </> 
          }

          { !user.name && 
            <>
              <button onClick={userLogin}>Login</button>
            </> 
          }
        </div>
      </header>
    </>
  )
}