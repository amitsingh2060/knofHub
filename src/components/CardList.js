import React, { Component } from 'react';
import './CardList.css';

class CardList extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
             
    //     }
    // }
    
    render() {
        
        console.log(this.props.data,"data");
        return (
            <div className='card-list'>
                 {
                 this.props.data && this.props.data.length>0 && this.props.data.map( item => {
                     return(
                        <div className='card-container'>
                             <img src={item.imageURL} alt={item.confName} style={{width:"400px"}}/>
                                 <div>
                                    <h4><b>{item.confName}</b></h4>
                                    <p> Start Date:{item.confStartDate} && End Date:{item.confEndDate}</p>
                                     <p><b>Entry Type:</b> {item.entryType} </p>
                                     <p><b>City:</b> {item.city} && <b>Country:</b> {item.country}</p>
                                    <p><a href={item.confUrl}>Conference link</a></p>
                                     
                                </div>
                        </div>
                     )
                 })
             }
                
            </div>
        );
    }
}

export default CardList;