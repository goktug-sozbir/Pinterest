import React, { Component } from 'react'
import '../App.css';

class searchBar extends Component {
  
    state = {
        search: ''
    };

    inputChange = (event) => {
        console.log(event.target.value);

        this.setState({
            search: event.target.value
        });
    }

    searchImage = () => {
        console.log("başarılı");
        this.props.onSearchImage(this.state.search)
    }

    render() {
        return (
            <div>
                <div className="bar-con ui icon input">
                    <input className="input" type="text" onKeyPress ={(e) => { 
                        if (e.key === 'Enter') {
                            this.searchImage();
                        }
                    }}onChange={this.inputChange.bind(this)}  placeholder="Search..."/>
                     <i className="search icon"></i>
                </div>
            </div>
          )
    }
}

export default searchBar;
