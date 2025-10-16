import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";

export default function App() {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                <ProfileCard />
            </main>
            <Footer />
        </div>
    );
}


