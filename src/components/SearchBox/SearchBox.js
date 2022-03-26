import React, { Component } from 'react';
import axios from 'axios';
//Import css file
import './SearchBox.css'


class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //The history of search-bar using
            //history: [],
            //Text puted in the search-bar by users
            searchText: '',
            //The result of searching
            searchresult:[],
            //当前选中记录
            num: -1,
            isShow:false,
            sticky: false,
        }
    }

    //Hand over the value show in the search-bar
    HandoverValue=(num) => {
        if(num === -1 || num === this.state.searchresult.length) {
            this.refs['x'].value = this.state.searchText
            return;
        }
        this.refs['x'].value = this.state.searchresult[num]
    }

    //Open the window of Baidu
    openPage=()=> {
        console.log(this.state.num,this.state.searchresult.length)
        //If there is not select the searchlist
        if(this.state.num === -1 || this.state.num >= this.state.searchresult.length){
            //Then return the searchresult of search text in the search-bar
            window.open('https://www.baidu.com/s?wd='+this.state.searchText)
            return;
        }
        window.open('https://www.baidu.com/s?wd='+this.state.searchresult[this.state.num])
    }

    key=(e)=> {
        //Key down the Lowwer
        if(e.keyCode === 40){
            let tmp = this.state.num + 1;
            if(tmp > this.state.searchresult.length-1){
                this.setState({
                    num:-1
                })
                this.HandoverValue(-1)
                return;
            }
            this.HandoverValue(tmp)
            this.setState({
                num:tmp
            })
        }
        //Kew down the Upper
        if(e.keyCode === 38){
            let tmp = this.state.num - 1;
            if(tmp < 0){
                this.setState({
                    num:this.state.searchresult.length
                })
                this.HandoverValue(-1)
                return;
            }
            this.HandoverValue(tmp)
            this.setState({
                num:tmp
            })
        }
        //Key down the Enter
        if(e.keyCode === 13) {
            this.openPage()
            return;
        }
    }

    textin=(e)=> {
        if(e.keyCode === 38 || e.keyCode === 13 || e.keyCode === 40) return;
        this.setState({
            searchText: e.target.value
        })
        
        axios.get("/data/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+e.target.value).then((res) => {
        console.log(res)
        let str =res.data;
        let tmp = str.slice(16, str.length - 1);
        console.log(eval(tmp).s);
        this.setState({
            searchresult: eval(tmp).s
        })
        /*console.log(res.data)
        this.setState({
            searchresult: res.body.s
        })*/
    })
    }

    onMove=(Num) => {
        this.setState({
            num:Num
        })
        this.HandoverValue(Num);
    }

    render() {
        return (
            <div className='all'>
            <div className="SearchBox">
                <div 
                    id='searchbar'
                >
                <input
                    type='text'
                    ref='x'
                    className='searchbutton'
                    //Text in something
                    onKeyUp={(e) => this.textin(e)}
                    //Push Enter、Upper or Lowwer
                    onKeyDown={(e) => this.key(e)}
                    onFocus={() =>{
                        this.setState({
                            isShow: true
                        })
                    }}
                    onBlur={() =>{
                        this.setState({
                            isShow: false
                        })
                    }}
                />
                <input
                    type='button'
                    value='百度一下'
                    className='baidubutton'
                    onClick={this.openPage}
                />
                </div>
                <ul className='searchresultlist' style={{display: this.state.searchresult.length != 0 && this.state.isShow? 'block':'none'}}>
                    {
                        this.state.searchresult.map((ele,index) =>{
                            return <li 
                                    key={index} 
                                    className={this.state.num == index?'active':''}
                                    onClick={this.openPage}
                                    onMouseMove={() => this.onMove(index)}>{ele}</li>
                        })
                    }
                </ul></div>
            </div>
        );
    }
}

export default SearchBox;