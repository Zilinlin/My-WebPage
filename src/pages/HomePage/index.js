
import React, { Component } from 'react';
import styles from './home.module.scss';
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';

export default () =>{
    return <div className={ styles.wrap }>
        
        {/* 个人简介 */}
        <section className={ styles.brief }>
            <img src={ require("../../assets/images/avatar.jpg") } />
            <h2>Zilin Shen</h2>
            <ul>
                <li><a href="mailto:szl17@mails.tsinghua.edu.cn">Email</a></li>
                <li><a href="https://github.com/Zilinlin">Github</a></li>
                <li><a href="https://scholar.google.com/citations?hl=zh-CN&user=yyC5CZgAAAAJ">Google Scholar</a></li>
                <li><a href="https://maiimg.com/pdf/?e=auXWQs09fxW0.6">CV</a></li>
            </ul>
            <p>I am a senior student in School of Software, Tsinghua University.</p>
            <p>My research interests are wireless networking, mobile computing and machine learning.</p>
            <p>Contact me at szl17@mails.tsinghua.edu.cn</p>
        </section>  

        <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>Publication</h3>
                <p>You can find more in the work overview.</p>
            </div>
            <WorkLists dataSource = { worksData.data } />
        </section>

    </div>
}
