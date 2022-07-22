import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import places from './data';


export default function App() {
  return (
    <>
        <Navbar />
        <div className='container'>
            {places.map((place) => (
                <Card key={place.title} place={place} />
            ))}
        </div>
    </>
  );
}