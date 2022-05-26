import React from 'react';

export const Loader = (loading) => {
    return (
        <section className={loading ? "loader _active" : "loader"}>
            <h2>Construction company landing</h2>
        </section>
    );
};

