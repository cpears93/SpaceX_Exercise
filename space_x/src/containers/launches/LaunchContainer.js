import React, { Component, Fragment
} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LaunchList from '../components/launches/launches/LaunchList';
import Request from '../../helpers/request.js';

class LaunchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: []
        }
    }

    componentDidMount() {
        console.log("character container did mount")
        const request = new Request();

        request.get('https://api.spacexdata.com/v3/launches')
            .then((data) => {
                console.log(data);
                this.setState({
                    launches: data
                })
            })
    }


    render() {
        if (!this.state.launch || this.state.launches.length === 0) {
            return ( <h2> Loading </h2>)
            }

            return ( <
                LaunchList launches = {
                    this.state.launches
                }
                />
            )
        }

    }

    export default LaunchContainer;