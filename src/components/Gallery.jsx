

import React from 'react';
import {useQuery} from "@tanstack/react-query"
import axios from 'axios';
import {useGlobalContext} from "../context/GalleryContext/GalleryContext.js"


// const url = "https://api.unsplash.com/search/photos?client_id=82gr7blFaP-lOhC_GC0X9JGd4tt_US3cGeTcyvuHjq8";





function Gallery() {

    const {searchTerm} = useGlobalContext();
      // Access the client
    const response = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
            const result = await axios.get(`${url}&query=${searchTerm}`)

            return result.data
        }
    })
    console.log(response)
    if(response.isLoading){
        return (
            <section>
                <h4>Loading...</h4>
            </section>
        );
    }
    if(response.isError){
        return (
            <section>
                <h4>There was an error...</h4>
            </section>
        );
    }

    const results = response.data.results
    if(response.length < 1){
        return (
            <section>
                <h4>No results found...</h4>
            </section>
        ); 
    }
  return (
    <section className="image-container">
        {results.map((item)=>{
            const url = item?.urls?.regular
            return <img src={url} key={item.id} alt={item.alt_description}/>
        })}
    </section>
  )
}

export default Gallery