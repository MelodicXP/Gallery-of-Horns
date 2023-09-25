import './App.css'
import React, { useState } from 'react'; // On App.jsx use {useState} hook instead of 'this.state'
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import SelectedBeast from './components/SelectedBeast';
import hornedBeastImageData from './assets/data.json';



function App() {

  // This is how you set state in App.jsx (different from Components)
  // Set state - set selectedImage state to null, setSelectedImage() function updates state of selectedImage
  let [selectedImage, setSelectedImage] = useState(null);

  // Function - when user clicks image, selectedImage state/value updates from null to imageData clicked on (function passed as props to Gallery && HornedBeast)
  let handleImageClick = (imageData) => {

    setSelectedImage(imageData);

  }

  // Function - when modal closes set state of image back to null
  let handleModalClose = () => {

    setSelectedImage(null);

  }

  return(
    <>
      <Header />

      <Gallery 
        // Pass hornedBeastImageData (image data from .json file) as prop
        hornedBeastImageData = {hornedBeastImageData} 

        // Pass handleImageClick() function as prop to Gallery
        handleImageClick = {handleImageClick} 
      />

      {/* Condtional Rendering - SelectedBeast Component executes if selectedImage value/state is truthy (contains data, not null, underfined, etc...) */}

      { selectedImage && (

        <SelectedBeast
          selectedImage = {selectedImage}
          handleModalClose = {handleModalClose} // update setSelctedImage with null on close
        />

      ) }

      <Footer />
    </>
  )
}

export default App
