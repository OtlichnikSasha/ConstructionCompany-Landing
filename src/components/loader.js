import React from 'react';

export const Loader = () => {
    window.onload = () => {
        document.body.classList.remove("hidden")
    }

    return (
        <section className="loader">
            <h2>Construction company landing</h2>
        </section>
    );
};

