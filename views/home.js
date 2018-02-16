import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
//36I
    constructor(props) {
        super(props)
        this.state = {
            binA: []
        }

    }
    //44E
    componentDidMount() {
        //44C, 44D, 37D, 36D
        axios.get(`/api/bin/${id}`).then((res) => {
            this.setState({
                binA: res
            })
        })
    }

    render() {


        return (
            <div>
                Dashboard content
            </div>
        )
    }
}