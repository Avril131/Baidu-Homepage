import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import SearchBox from './components/SearchBox/SearchBox'
import News from './components/News/News'
import Head from './components/Head/Head'
import Unknown from './components/unknown/unknown'
import reportWebVitals from './reportWebVitals'
import baidu_logo from './images/baidu_logo.png'

ReactDOM.render(
  <React.StrictMode>
    <div className='website'>
       <div className='head'>
         <Head />
         </div>
       <div className='searchbar'>
          <div className='searchbox'>
            <img id="baidu_logo" src={baidu_logo} alt="图片"></img>
            <SearchBox />
            <Unknown />
          </div>
       </div>
      <div className='lowwer_part'>
        <News />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
