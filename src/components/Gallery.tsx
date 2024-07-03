import React from 'react';
import Profile from './Profile';



const scientist = [
    {
        name: "Marie Curie",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/1200px-Marie_Curie_c._1920s.jpg"
    },
    {
        name: "Jane Goodall",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGloy67bqYkA_TLfV5jqT3ODK_G0Ik3uN1KbtKXh7Y8UTW3840nG3UPLhQK0Ut-hO7cGg&usqp=CAU"
    },
    {
        name: "Ada Lovelace",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9qcbtdnXgfrVwQkoZBhEEkolt4P1wpvrOg&s"
    },
    {
        name: "Rachel Carson",
        image: "https://blog.response.restoration.noaa.gov/sites/default/files/inline-images/unnamed%20%2813%29.png"
    },
    {
        name: "Katherine Johnson",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/1200px-Katherine_Johnson_1983.jpg"
    }
];

function Gallery() {

    return (
        <div className='gallery'>
            {scientist.map(person => <Profile pername={person.name} perimage={person.image} key={person.name} {...person} />)}
        </div>
    );
}


export default Gallery;