import React, { useState } from 'react';

const UserInputForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [occupation, setOccupation] = useState('');
    const [favoriteSong, setFavoriteSong] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, age, hobbies, occupation, favoriteSong });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
            <input type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)} placeholder="Hobbies" />
            <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} placeholder="Occupation" />
            <input type="text" value={favoriteSong} onChange={(e) => setFavoriteSong(e.target.value)} placeholder="Favorite Song" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserInputForm;

