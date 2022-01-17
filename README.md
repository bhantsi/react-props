
# React Pops Example
[![Netlify Status](https://api.netlify.com/api/v1/badges/03b980a0-efca-4cb1-ac02-2ee3ac2bc088/deploy-status)](https://app.netlify.com/sites/festive-feynman-e9487e/deploys) 
[![Demo](https://img.shields.io/badge/demo-live-blue.svg)](https://react-props.netlify.app/)

This is simple react project design to understand props more 
## Acknowledgements
This particular project is part of [Bob Ziroll's](https://scrimba.com/teachers/bobziroll) react course on scrimba
 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Learn React on Scrima](https://scrimba.com/learn/learnreact)
 - [Create React App](https://create-react-app.dev/)


## Features

- Makea a reusable components
- How to pass a prop into a component
- Recieving props in a components



## Run Locally

Clone the project

```bash
  git clone https://github.com/bhantsi/react-props
```

Go to the project directory

```bash
  cd react-props
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Usage/Examples

```javascript
import Contact from './components/Contact'

function App(props) {
  return (
  <div>
    <Contact
        name="John Doe"
        email="john.doe@domain.com"
     />
  </div>
  )
}
export default App;
```


## Feedback

If you have any feedback, please reach out to us at bhantsi@gmail.com

