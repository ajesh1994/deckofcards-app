# Getting Started with Create React App

This project displays a deck of cards in rows. It gives the user the ability to interact with some actions. You can shuffle the deck which changes the order of the cards, sort the deck which returns them into the correct order of suit and value or you can draw a card. Drawing a card removes the card at the end of the list and moves it to the drawn card section. Once a card has been drawn, you then have the option to reset and move everything back to the deck.

Created utilising Create React App.

## Considerations

Firstly the usage of state management. This app is pretty simple so I stuck to using useState hooks for managing the decks order and length. Potentially, if this became more complicated and prop drilling became more of an issue, Redux could be used to access the state further down in child components more easily.

I used Material UI for components as I didn't want to waste too much time on developing my own, they came out of the box and by default are visually appealing enough in their basic form that I didn't need to address them too much.

React Testing Library was used in the unit tests to evaluate the components. With more time we could use something like Cypress to incorporate end to end tests too.

Accessibility wise, each interactive element has an aria label and is tabbable. It also passes Google Lighthouses tests.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
