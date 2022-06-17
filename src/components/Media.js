import React, { useEffect, useState } from 'react';
import { fetchSearchedGiphys, fetchTrendingGiphys } from '../api/giphyApi';
import giphyArtists from '../artists';
import TrendingGiphy from '../TrendingGiphy';
import ArtistsGiphy from './ArtistsGiphy';
import ClipsGiphySection from './ClipsGiphySection';
import "./Media.css";
import StoriesGiphySection from './StoriesGiphySection';


function Media() {
    const [trending, setTrending] = useState([]);
    const [artists, setArtists] = useState([]);
    const [clips, setClips] = useState([]);
    const [stories, setStories] = useState([]);

    const randomizeData = (content) =>{
        return content.data.sort(() => Math.random() - 0.5);
    }

    
    const getArtists = async () => {
        const artists = await Promise.all(
        giphyArtists.map((giphyArtist) => {
            return fetchSearchedGiphys(giphyArtist).then((res) => res.data.data);
        })
        )
       setArtists(artists.flat()); 
    }
    
    
    
    
    useEffect(() =>{
        const getTrendingGiphys = async ()=>{
            const trending = await fetchTrendingGiphys();
            setTrending(randomizeData(trending.data));
        }
        const getSearchedGiphys = async (query, setState)=> {
            const searched = await fetchSearchedGiphys(query);
            setState(randomizeData(searched.data));
        }
        
        getTrendingGiphys();
        getArtists();
        getSearchedGiphys("coffee", setClips);
        getSearchedGiphys("pose", setStories)
    } , []);

    

  return (
    <div className="media">
        <div className="row">
            <div className="row-header">
            <img src="/images/trending.svg" alt="trending"/>
            <h1>Trending</h1>
            

            </div>
            <div className="trending-container">
            {trending?.map((trendingGiphy, index)=>{
                return <TrendingGiphy giphy={trendingGiphy} key={index}/>
            })}   
            

            </div>
        </div>
        <div className="row">
            <div className="row-header">
            <img src="/images/artists.svg" alt="artists"/>
            <h1>Artists</h1>
            </div>
            <div className="artists-container">
            {artists.map((artistGiphys, index) => {
                return <ArtistsGiphy giphy = {artistGiphys} key={index}/>
            })}
            </div>
        </div>
        <div className="row">
        <div className="row-header">
        <img src="/images/clips.svg" alt="clips"/>
            <h1>Clips</h1>
        </div>
            <div className="clips-container">
            <ClipsGiphySection giphysArray={clips}/>
            </div>
        </div>
        <div className="row">
        <div className="row-header">
        <img src="/images/stories.svg" alt="stories"/>
            <h1>Stories</h1>
        </div>
            <div className="stories-container">
            <StoriesGiphySection giphysArray={stories} /> 
            </div>
        </div>
    </div>
  )
}

export default Media