import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ImageCarousel from 'react-native-image-carousel';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const images = [
    'https://example.com/image1.jpg', // Replace with your image URLs
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ];

  return (
    <View style={styles.container}>
      <ImageCarousel
        images={images}
        imageWidth={200} // Adjust as needed
        imageHeight={150} // Adjust as needed
        autoPlay={true} 
        loop={true}
        autoplayInterval={3000} 
        onImageChange={handleImageChange}
        style={styles.imageCarousel}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
        >
          <Text>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.index}>Image {currentImageIndex + 1} of {images.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageCarousel: {
    width: 200, 
    height: 150, 
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  index: {
    marginTop: 10,
  }
});

export default Gallery;
