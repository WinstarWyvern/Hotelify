import React from 'react'
import { useEffect, useState } from "react";
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

const Home = () => {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        // memanggil API untuk mengambil data
        fetch("http://localhost:8000/hotel")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // ketika Rest API sukses, simpan data dari response ke dalam state lokal
                setHotels(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted.");
                }
            });
    }, []);

    return (
        <>
            <Navigation />
            <ul id="hotel-list">
                {hotels.map((hotel) => (
                    <div>
                        <p>{hotel.id}  {hotel.desc}</p>
                        <p>{hotel.name}</p>
                    </div>
                ))}
            </ul>
            <Footer />
        </>
    )
}

export default Home