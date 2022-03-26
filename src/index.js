import React from 'react';
import ReactDOM from 'react-dom';
import Unknown from './components/unknown/unknown'
import './index.css';
import SearchBox from './components/SearchBox/SearchBox';
import News from './components/News/News'
import reportWebVitals from './reportWebVitals';
import baidu_logo from './images/baidu_logo.png'
import Head from './components/Head/Head'


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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
