import React, { Component } from 'react';

class HeaderClass extends Component {
    //Created a default state
    state = { 
        title: 0,
        subTitle : "This is the page sub title",
     }
     
     increment = () =>
     {
        this.state.title++;
        return this.state.title;
     }

     //Updating the state
     changeTheState = () => {
        console.log("Hello There");
        //in build member function with Component class
        this.setState({
            title: this.increment()
        });
     }
    render() { 
        return ( 
            <div>
                <h1>{this.state.title}</h1> 
                <h3>{this.state.subTitle}</h3>
                <button onClick={this.changeTheState}>Click to change Header</button>
            </div>
         );
    }
}
 
export default HeaderClass;