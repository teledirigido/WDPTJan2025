# React + Vite

- npm install
- npm run dev


## Updates:

### Add Task Updated

`<AddTask>` has been updated. Now it takes two `props` and reloads `<SingleProject>`.

See `AddTask.jsx` for prop update:
```
  ...
export function AddTask({ projectId, getProject }) {
  ...
```

See `AddTask.jsx` for `axios.post` method updated:
```
axios.post(`${API_URL}/tasks`, requestBody )
  .then( response => {
    getProject() // Calls the project to be updated

    // Clears the form
    setTitle('');
    setDescription('');
  })
```


### CSS Styles

CSS Styles have been added. See `App.css`

### Handle update success message:
See `singleProject.jsx`:
```
const [queryArgs, setQueryArgs] = useSearchParams();
...
{ queryArgs.get("update") && queryArgs.get("update") === 'success' && <div className="update-success">
  Your project has been updated!
</div> }
```

See `EditSingleProject.jsx`:
```
navigate(`/projects/${projectId}?update=success`); 
```