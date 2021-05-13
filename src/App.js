import React, { useReducer } from 'react';
import AboutUs from './components/Aboutpage/AboutUs';
import BlogList from './components/Blogs/BlogListpage/BlogList';
import Blog from './components/Blogs/Blogpage/Blog';
import ContactUs from './components/Contactpage/ContactUs';
import SignIn from './components/Forms/SignIn';
import Home from './components/Homepage/Home';
import Footer from './components/TheFooter/Footer';
import Header from './components/TheHeader/Header'
import HtmlPage from './components/Blogs/LanguagePages/html/HtmlPage'
import CssPage from './components/Blogs/LanguagePages/css/CssPage'
import JavascriptPage from './components/Blogs/LanguagePages/js/JavascriptPage'
import ReactPage from './components/Blogs/LanguagePages/react/ReactPage'
import VuePage from './components/Blogs/LanguagePages/vue/VuePage'
import './styles/styles.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
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
        menuStatus: !state.menuStatus
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
        <BrowserRouter >
          <ScrollToTop />
          <Header />
          {/* <Navbar /> */}

          <Switch >
            <Route path='/' exact component={Home} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/blog-list' exact component={BlogList} />
            <Route path='/contact-us' exact component={ContactUs} />
            <Route path='/about-us' exact component={AboutUs} />
            <Route path='/login' exact component={SignIn} />
            <Route path='/HtmlPage' exact component={HtmlPage} />
            <Route path='/CssPage' exact component={CssPage} />
            <Route path='/JavascriptPage' exact component={JavascriptPage} />
            <Route path='/ReactPage' exact component={ReactPage} />
            <Route path='/VuePage' exact component={VuePage} />
            
          </Switch>
          <Footer />
        </BrowserRouter>

























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
