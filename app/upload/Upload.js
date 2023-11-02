'use client'
import React, { useState } from 'react';
import axios from 'axios';

export default function Upload(){
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });
    try {
      const response = await axios.post('http://localhost:3001/upload', formData);
      console.log('Uploaded successfully: ', response.data);
    } catch (err) {
      console.error('Error uploading images: ', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input accept="image/png, image/jpeg"  type="file" multiple onChange={handleFileChange} />
      <button type="submit">Upload</button>
      
    </form>
  );
};

