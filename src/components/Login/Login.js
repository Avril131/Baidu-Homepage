import React from 'react'
//引入Ant Design的React UI组件库
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'

class Login extends React.Component {
    constructor(props){
        super(props);
        //绑定this时间
        this.register = this.register.bind(this);
    }
    register(){
        console.log(this.props);
        this.props.history.push('/register')
    }
    render(){
        return (
            <div id='Login_box'>
                <div id='Login_top'>
                    <div className='Login_part'>
                        <input
                           type='text'
                           value='账号' 
                        ></input>
                        <input
                            type='password'
                            value='密码'
                        ></input>
                    </div>
                </div>
                <div id='Login_buttom'>
                    <input
                        type='button'
                        value='立即注册'
                    ></input>
                </div>
            </div>
        )
    }
}

export default Login