import axios from 'axios';
import React, { Component } from 'react';






class Unknown extends Component {

    onPush=()=> {
    axios.get('/api3').then((res) => {
        
        console.log(res)
})
}

    render() {
        return (
            <div>
                <input
                    type='button'
                    value='http协议接口测试'
                    onClick={()=>this.onPush()}></input>
            </div>
        );
    }
}
export default Unknown;