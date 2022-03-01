import React, { Component } from 'react';
import '../App.css';
import SearchBar from './searchBar'
import axios from 'axios';
import ImageList from './ImageList'


class App extends Component {


  state={
    images:[]
  };


  onSearchImage = async(search) => {

    console.log('app' + search);

   const result = await axios.get('https://api.unsplash.com/search/photos', {
      params:{
        query:search
      },
      headers:{
        Authorization: 'Client-ID 6IZ0ZEO91lw2aGAFJweqS7hFS89qmKYSiKDQp5CoqC4'
      }
    })
      console.log(result.data.results);
      this.setState({images: result.data.results})
  }



  render() {

    return (

      <div className="app-con">
        <SearchBar onSearchImage={this.onSearchImage} />
        
        <ImageList images={this.state.images}/>
      </div>
  
    )
  }
}

export default App;
