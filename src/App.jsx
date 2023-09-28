import './App.css'
import React, { useState } from 'react'; // On App.jsx use {useState} hook instead of 'this.state'
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import SelectedBeast from './components/SelectedBeast';
import hornedBeastImageData from './assets/data.json';
import SortingForm from './components/SortingForm';



function App() {

  // This is how you set state in App.jsx (different from Components)
  // Set state - set selectedImage state to null, setSelectedImage() function updates state of selectedImage
  let [selectedImage, setSelectedImage] = useState(null);

  // Set state - set selectedSortValue state to null, setSelectedImage() function updates state of selectedImage
  let [selectedSortValue, setSelectedSortValue] = useState(null)

  // Function - when user clicks image, selectedImage state/value updates from null to imageData clicked on (function passed as props to Gallery && HornedBeast)
  let handleImageClick = (imageData) => {
    setSelectedImage(imageData);
  }

  // Function - when modal closes set state of image back to null
  let handleModalClose = () => {
    setSelectedImage(null);
  }

  // Function - updates state of selectedSortValue depending on which option user chooses from drop down (function passed as prop to SortingForm to retrieve value of drop down), once value retrieved use value to filter images in Gallery
  let handleSortValueChange = (sortValue) => {
    setSelectedSortValue(sortValue);
  }

  return(
    <>
      <Header />

      <SortingForm 
        onSortValueChange = {handleSortValueChange}
      />

      <Gallery 
        // Pass hornedBeastImageData (image data from .json file) as prop
        hornedBeastImageData = {hornedBeastImageData} 

        // Pass handleImageClick() function as prop to Gallery
        handleImageClick = {handleImageClick} 

        selectedSortValue = {selectedSortValue}
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
