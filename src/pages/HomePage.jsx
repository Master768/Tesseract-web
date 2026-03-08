import React from 'react';
import Hero from '../components/Hero';
import EventGallery from '../components/EventGallery';
import HomeGallerySlideshow from '../components/HomeGallerySlideshow';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <EventGallery />
            <HomeGallerySlideshow />
        </main>
    );
};

export default HomePage;
