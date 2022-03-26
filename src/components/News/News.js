import React, { Component } from 'react';
import axios from 'axios';
import Trending_Topic from '../Trending_Topic/Trending_Topic'
import './News.css'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsresult: [],
            type: 'news',
        }
    }

    onLoad_news=()=>{
        axios.get("/api1").then((res) => {
            let tmp = res.data;
            tmp = tmp.T1467284926140
            console.log(tmp);
            this.setState({
                newsresult: tmp.slice(0,10),
                type: 'news'
            })
        })
    }

    componentDidMount() {
        this.onLoad_news();
      }
    
    onLoad_help=()=>{
        console.log("help")
        this.setState({
            type: 'help'
        })
    }

	onLoad_like=()=>{
        this.setState({
            type: 'like'
        })
    }
    
    render() {
        return (
            <div className="NewsBox">
                <input
                    type='button'
                    value='我的关注'
                    className='like'
					onClick={()=>this.onLoad_like()}
                />
                <input
                    type='button'
                    value='推荐'
                    className='trending'
                    onClick={()=>this.onLoad_news()}
                />
                <input
                    type='button'
                    value='导航'
                    className='help'
                    onClick={()=>this.onLoad_help()}
                />
 
                <div className='news_all' style={{display: this.state.type === 'news' ? 'flex':'none'}}>
					<div className='news_left'><ul className='newslist'>
                    {
                        this.state.newsresult.map((ele,index) =>{
                            return <li key={index} 
                            onClick={()=> window.open(ele.url)}>
                                        <div className='newsbox'>
                                            <div className='images'>
                                                <img src={ele.imgsrc}></img>
                                            </div>
                                            <div className='text'>
                                                <div className='title'>{ele.title}</div>
                                                <div className='footer'>
                                                    <div className='source'>{ele.source}</div>
                                                    <div className='date'>{ele.ptime}</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </li>
                        })
                    }
					</ul></div>
					<div className='news_right'>
						<Trending_Topic />
					</div>
                </div>

                <div class="clearfix" data-dir="hot" style={{display: this.state.type === 'help'?'':'none'}}>
												<div class="nav-item" data-rid="" data-log="stype:;pos:0;dir:hot;ncols:6;" data-extra="">
				<a href="https://www.hao123.com/" title="hao123" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="0">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_hao123.png">
					</img></span>
					<span class="nav-txt">hao123</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:1;dir:hot;ncols:6;" data-extra="">
				<a href="https://union-click.jd.com/jdc?d=iEZf6v" title="京东" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="1">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_京东.png">
					</img></span>
					<span class="nav-txt">京东</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:2;dir:hot;ncols:6;" data-extra="">
				<a href="https://s.click.taobao.com/6fv54ku" title="爱淘宝" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="2">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/%E5%AF%BC%E8%88%AAList_%E7%88%B1%E6%B7%98%E5%AE%9D.png">
					</img></span>
					<span class="nav-txt">爱淘宝</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:3;dir:hot;ncols:6;" data-extra="">
				<a href="https://www.suning.com/?utm_source=hao123&amp;utm_medium=mingzhan" title="苏宁易购" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="3">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_苏宁易购.png">
					</img></span>
					<span class="nav-txt">苏宁易购</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:4;dir:hot;ncols:6;" data-extra="">
				<a href="https://mos.m.taobao.com/union/jhsjx2020?pid=mm_43125636_4246598_109926450373" title="聚划算" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="4">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_聚划算.png">
					</img></span>
					<span class="nav-txt">聚划算</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:5;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.taobao.com/" title="淘宝" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="5">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_淘宝.png">
					</img></span>
					<span class="nav-txt">淘宝</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item nav-item7" data-rid="" data-log="stype:;pos:6;dir:hot;ncols:6;" data-extra="">
				<a href="https://youjia.baidu.com/view/index?sa=baidu_pc" title="有驾" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="6">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_有驾.png">
					</img></span>
					<span class="nav-txt">有驾</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item nav-item8" data-rid="" data-log="stype:;pos:7;dir:hot;ncols:6;" data-extra="">
				<a href="https://haokan.baidu.com/?sfrom=baidu-na" title="好看视频" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="7">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_好看视频.png">
					</img></span>
					<span class="nav-txt">好看视频</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:8;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.iqiyi.com/" title="爱奇艺" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="8">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_爱奇艺.png">
					</img></span>
					<span class="nav-txt">爱奇艺</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:9;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.bilibili.com/" title="哔哩哔哩" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="9">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_bilibili.png">
					</img></span>
					<span class="nav-txt">哔哩哔哩</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:10;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.youku.com/" title="优酷网" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="10">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_优酷.png">
					</img></span>
					<span class="nav-txt">优酷网</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:11;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.weibo.com/" title="微博" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="11">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_微博.png">
					</img></span>
					<span class="nav-txt">微博</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:12;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.qq.com/" title="腾讯网" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="12">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_腾讯.png">
					</img></span>
					<span class="nav-txt">腾讯网</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item nav-item7" data-rid="" data-log="stype:;pos:13;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.sohu.com/" title="搜狐网" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="13">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_搜狐.png">
					</img></span>
					<span class="nav-txt">搜狐网</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:14;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.sina.com.cn/" title="新浪网" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="14">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_新浪.png">
					</img></span>
					<span class="nav-txt">新浪网</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item nav-item8" data-rid="" data-log="stype:;pos:15;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.vip.com/" title="唯品会" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="15">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_唯品会.png">
					</img></span>
					<span class="nav-txt">唯品会</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:16;dir:hot;ncols:6;" data-extra="">
				<a href="http://game.baidu.com/home?idfrom=1033" title="百度游戏" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="16">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_百度游戏.png">
					</img></span>
					<span class="nav-txt">百度游戏</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:17;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.4399.com/" title="4399" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="17">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_4399.png">
					</img></span>
					<span class="nav-txt">4399</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:18;dir:hot;ncols:6;" data-extra="">
				<a href="https://www.zhaopin.com/" title="智联招聘" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="18">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_智联招聘.png">
					</img></span>
					<span class="nav-txt">智联招聘</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:19;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.163.com/" title="网易" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="19">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_网易.png">
					</img></span>
					<span class="nav-txt">网易</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item nav-item7" data-rid="" data-log="stype:;pos:20;dir:hot;ncols:6;" data-extra="">
				<a href="http://www.dianping.com/" title="大众点评" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="20">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_大众点评.png">
					</img></span>
					<span class="nav-txt">大众点评</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:21;dir:hot;ncols:6;" data-extra="">
				<a href="http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&amp;Allianceid=1630&amp;sid=1911&amp;OUID=&amp;jumpUrl=http://www.ctrip.com/" title="携程" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="21">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_携程.png">
					</img></span>
					<span class="nav-txt">携程</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:22;dir:hot;ncols:6;" data-extra="">
				<a href="https://pan.baidu.com/" title="百度网盘" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="22">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_百度网盘.png">
					</img></span>
					<span class="nav-txt">百度网盘</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item nav-item8" data-rid="" data-log="stype:;pos:23;dir:hot;ncols:6;" data-extra="">
				<a href="https://www.58.com/" title="58同城" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="23">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_58同城.png">
					</img></span>
					<span class="nav-txt">58同城</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:24;dir:hot;ncols:6;" data-extra="">
				<a href="https://fanyi.baidu.com/" title="百度翻译" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="24">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_百度翻译.png">
					</img></span>
					<span class="nav-txt">百度翻译</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
									<div class="nav-item" data-rid="" data-log="stype:;pos:25;dir:hot;ncols:6;" data-extra="">
				<a href="https://aiqicha.baidu.com/?fr=bd_ds" title="爱企查" class="nav-block c-color-gray" target="_blank" data-click="LOG_LINK" data-pos="25">
															<span class="c-img c-img-radius-large nav-img">
						<img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/%E5%AF%BC%E8%88%AAList_%E7%88%B1%E4%BC%81%E6%9F%A5.png">
					</img></span>
					<span class="nav-txt">爱企查</span>
					<span class="nav-img-mask"></span>
				</a>
			</div>
					</div>
				<div className='like'  style={{display: this.state.type === 'like' ? 'flex':'none'}}>
					<input
						type='button'
						value='我的导航'
						className='like_follow'
					></input>
				</div>
            </div>
        );
    }
}

export default News;