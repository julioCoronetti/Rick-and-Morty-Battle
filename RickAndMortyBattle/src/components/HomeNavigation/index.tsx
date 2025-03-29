import React from 'react';
import { useNavigate } from "react-router-dom";

export const HomeNavigation = () => {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/");
    }

    return (
        <button onClick={goToHomePage}></button>
    )
}