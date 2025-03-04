import React, {Component} from 'react';
import Request from '../helpers/request';
import LaunchList from './launchList.js';

class LaunchContainer extends Component{
    constructor(props){
        super(props);

        this.state=null;
    }

    componentDidMount(){
        const request = new Request();

        request.get()
        .then(data => this.setState({launches:data}))
    }

    render(){
        if(this.state != null){
            return(
                <div>
                    <LaunchList launchData={this.state.launches}/>
                </div>
            )
        }else{
            return(
                <p>loading...</p>
            )
        }
    }
}
export default LaunchContainer;