import axios from 'axios';
import React, { Component } from 'react';
import CardList from './CardList';
import './CardList.css';


class ApiData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             searchField:''
        }
    }
    
    componentDidMount() {
        axios.get('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences')
        .then(res => {
            this.setState({data:[...res.data.free,...res.data.paid]})
        })
    }
    
    render() {
        
         const {data, searchField} = this.state;
          const filtereData = data.filter(e => e.confName.toLowerCase().includes(searchField.toLowerCase()) ||e.city.toLowerCase().includes(this.state.searchField.toLowerCase()))
 
        return (
            <div>
                <input className='search' type="search" placeholder="search" onChange={e => this.setState({searchField:e.target.value})}/>
                <CardList data={filtereData}/>
            </div>
        );
    }
}

export default ApiData;