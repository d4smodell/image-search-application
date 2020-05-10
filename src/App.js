import React from 'react';
import './App.css';
import ContactForm from './Form/Form';
import { searchImageThunk } from './redux/photosReducer';
import { connect } from 'react-redux';
import Images from './Images/Images';

const App = props => {
  const onSubmit = (value) => {
    props.searchImageThunk(value)
  }
  
  return (
    <div className="App">
      <ContactForm onSubmit={onSubmit}/>
      <Images {...props}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    images: state.photos.images
  }
}

const mapDispatchToProps = {
  searchImageThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
