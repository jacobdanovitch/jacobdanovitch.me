import React, { Component } from 'react'
import Jupyter from 'react-jupyter'
import style from './Notebooks.css'
import kmeans from './tutorials/K Means Clustering.json'
import linreg from './tutorials/Linear Regression.json'

export class KMeansWorkshop extends Component{
    render(){
        return(
            <Jupyter
                notebook={kmeans}
                showCode={true}
                defaultStyle={style}
                loadMathjax={true}
            />
        )
    }
}

export class LinearRegressionWorkshop extends Component{
    render(){
        return(
            <Jupyter
                notebook={linreg}
                showCode={true}
                defaultStyle={style}
                loadMathjax={true}
            />
        )
    }
}