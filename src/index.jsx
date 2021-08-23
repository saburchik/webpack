
import * as $ from 'jquery'
import Post from '@models/Post'
import './babel'
import React from 'react'
import { render } from 'react-dom'
// import json from './assets/json'
import logo from './assets/webpack.png'
// import xml from './assets/data.xml'
// import csv from './assets/business-financial-data.csv'
import './styles/style.css'
import './styles/style.scss'

const post = new Post('Webpack post title', logo)
$('pre').addClass('code').html(post.toString())

const App = () => (
    <div className="container">
        <h1>WebPack Course</h1>
        <hr />
        <div className="logo"></div>
        <hr />
        <pre></pre>
        <hr />
        <div className="box">
            <h2 className="h2">SASS</h2>
        </div>
    </div>
)

render(<App />, document.getElementById('app'))

// console.log('Post to string:', post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)