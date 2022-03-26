import React, { Component } from 'react';
import axios from 'axios';
//Import css file
import './Trending_Topic.css'

class Trending_Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topiclist1: [],
            topiclist2: [],
            topiclist3: [],
            page: 1,
        }
    }

    onLoad=()=>{
        axios.get("/api2").then((res) => {
            let tmp = res.data;
            let tmp2 = tmp.data;
            console.log(tmp2[0].value);
            let page1 = tmp2[0].value.slice(0,10);
            console.log(page1);
            let page2 = tmp2[0].value.slice(10,20);
            let page3 = tmp2[0].value.slice(20,30);
            this.setState({
                topiclist1: page1,
                topiclist2: page2,
                topiclist3: page3
            })
        })
    }

    onChangePage=()=>{
        let tmp = this.state.page + 1;
        if(tmp === 4) tmp = 1;
        this.setState({
            page: tmp
        })
    }

    componentDidMount() {
        this.onLoad();
      }

    render() {
        return (
            <div className='Trending_all'>
                <div className='Trending_button'>
                <input
                    type='button'
                    value='百度热搜 >'
                    className='link'
                    onClick={()=>window.open('https://top.baidu.com/board?platform=pc&sa=pcindex_entry')}
                />
                <input
                    type='button'
                    value='换一换'
                    className='change'
                    onClick={this.onChangePage}
                />
                </div>
                <div className='topiclist_box'>
                <ul className='topiclist' style={{display : this.state.page === 1?'flex':'none',}}>
                    {
                        this.state.topiclist1.map((ele,index) =>{
                            return <li 
                                key={index}
                                className='topic_component'
                                onClick={()=> window.open(ele.rawUrl)}>
                                    {ele.wordQuery}
                                    <img src={ele.hotTagImg} onError="javascript:this.src='../../images/tmp.jpg'" ></img>
                            </li>
                            
                        })
                    }
                </ul>
                <ul className='topiclist' style={{display : this.state.page === 2?'flex':'none',}}>
                    {
                        this.state.topiclist2.map((ele,index) =>{
                            return <li 
                                key={index}
                                className='topic_component'
                                onClick={()=> window.open(ele.rawUrl)}>
                                    {ele.wordQuery}
                                    <img src={ele.hotTagImg} onError="javascript:this.src='../../images/tmp.jpg'" ></img>
                            </li>
                            
                        })
                    }
                </ul>
                <ul className='topiclist' style={{display : this.state.page === 3?'flex':'none',}}>
                    {
                        this.state.topiclist3.map((ele,index) =>{
                            return <li 
                                key={index}
                                className='topic_component'
                                onClick={()=> window.open(ele.rawUrl)}>
                                    {ele.wordQuery}
                                    <img src={ele.hotTagImg} onError="javascript:this.src='../../images/tmp.jpg'" ></img>
                            </li>
                            
                        })
                    }
                </ul>
                </div>
            </div>
        );
    }
}

export default Trending_Topic;