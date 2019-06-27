# connectfour

Challenge: Connect Four
Basic Requirements
Build a single-page app implementation of the game Connect Four. You should:

Use ReactJS for all views and bundle with Webpack
Use Express to serve your app and handle API requests
Implement all the game logic in the client code
Build your Express app inside server.js and your client app inside the client folder. Separate your React components into their own files and configure webpack-dev to load those components into your client. For help configuring Webpack, you may look at the hints file.

To satisfy the basic requirements of this challenge, you must detect a win or tie and display an appropriate message. Refreshing the page should restart the game. Write at least four tests (one test for each of horizontal, vertical, diagonal wins and one for ties) to verify your end-of-game detection logic. You may choose to write your tests to run either with node or within the browser.

Apply a minimal amount of CSS styling so that your board resembles a Connect Four board. Do not spend any significant amount of time (30 min max) on styling: aim for resemblance, not similarity.

For ease of development, be sure to set Webpack to watch for changes in any of the files it resolves via its entry point, app.js, so that it recompiles those changes immediately. Additionally, be sure to use nodemon to watch for changes in server.js.

Use the coding best practices you learned previously to ensure a clear separation of concerns with well-defined interfaces.

If you get stuck or are not sure how to proceed, you may look at the hints file for this challenge to help you along.

    your-project
        -> client
            -> dist
                -> index.html
            -> src
                -> components
                    -> Component1.jsx
                    -> Component2.jsx
                    -> Component3.jsx
                -> index.jsx
