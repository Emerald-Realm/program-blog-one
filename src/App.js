import React, { useReducer } from 'react';
import AboutUs from './components/Aboutpage/AboutUs';
import BlogList from './components/Blogs/BlogListpage/BlogList';
import Blog from './components/Blogs/Blogpage/Blog';
import ContactUs from './components/Contactpage/ContactUs';
import SignIn from './components/Forms/SignIn';
import Home from './components/Homepage/Home';
import Footer from './components/TheFooter/Footer';
import Header from './components/TheHeader/Header'
import Navbar from './components/TheHeader/Navbar';
import './styles/styles.css'

export const GlobalContext = React.createContext()


const intialState = {
  name: 'ade',
  menuStatus: false
  
}

const reducer = (state, action) => {
  switch (action) {
    case 'menu_Change':
      return {
        ...state,
        menuStatus : !state.menuStatus
      }

    default:
      return state
  }
}


function App() {
  const [item, dispatch] = useReducer(reducer, intialState)

  return (
    <GlobalContext.Provider
      value={{ globalState: item, globalDispatch: dispatch }}
    >

      <div className="App">
        {/* this is the app document */}
        <Header />
        <Navbar />
        {/* <Home /> */}
        <Blog />
        {/* <BlogList /> */}
        {/* <ContactUs /> */}
        {/* <AboutUs /> */}
        {/* <SignIn /> */}
        <Footer />

























        {/*
          CONSUMING THE GLOBAL CONTEXT
        {
          import {GlobalContext} from 'App'
          const globalContext = useContext(GlobalContext)
          <button
          onClick={() =>
            globalContext.globalDispatch('increment')}>
          Increment</button>
        } */}
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
