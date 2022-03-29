import React, { Component } from 'react';
import './Head.css'

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Loginbox_show: false,
        }
    }
    render() {
        return (
            <div id='header'>
            <ul class="topleft">
                <li><a href="http://news.baidu.com/">新闻</a></li>
                <li><a href="https://www.hao123.com/">hao123</a></li>
                <li><a href="https://map.baidu.com/">地图</a></li>
                <li><a href="https://haokan.baidu.com/">视频</a></li>
                <li><a href="http://tieba.baidu.com/">贴吧</a></li>
                <li><a href="http://xueshu.baidu.com/">学术</a></li>
                <li><a href="https://www.baidu.com/more/">更多</a></li>
            </ul>
            <ul class="topright">
                <li><a href="https://www.baidu.com/">天气</a></li>
                <li><a href="#">设置</a></li>
                <li><a href="#">个人中心</a></li>
            </ul>
            </div>
        );
    }
}
export default Head;