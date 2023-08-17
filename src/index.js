import App from "./App.js";

// Obtain the root 
const rootElement = document.getElementById('root')

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(
  React.createElement(App, null),
  rootElement
)