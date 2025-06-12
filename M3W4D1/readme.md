1. Clone and run back-end
2. Clone and run front-end

---

Implementing the front-end authentication on react:

1. Created a auth.context.js
  1.1. Created a function to authenticate the user via /auth/verify
  1.2 We set the user or display error accordingly
  1.3 We created the logout
  
  1.3.1 We pass the props to the provider

2. We add the new routes and page components /login /register
  2.3. On these components we created the functions to implement the required actions
  2.4 We make sure the endpoints work

3. We created components for Private and Anon page.

4. We added the JWT token into the API calls on axios


--- 

Extra:

Create a page /profile

Consider:

Display name and email.
You should be redirected to the home page when logged out