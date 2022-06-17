import React from 'react'
import "./StoriesGiphySection.css";

function StoriesGiphySection({giphysArray}) {

    const getGiphy = () => { 
        let randomIndex = Math.floor(Math.random() * 31) + 0;
        let randomGiphy = giphysArray[randomIndex];

        if(randomGiphy) {
           return randomGiphy; 
        }
    }

    const getColoredBorders = () => {
        const colors = ["purple", "sunshine", "bluepurple", "turqoise"];
        let randomIndex = Math.floor(Math.random() * 4) + 0;
        return colors[randomIndex];
    }

    const GiphyTile = ({ giphy }) => {
        let giphyURL = giphy ? giphy.images.downsized.url : ""; 
        let colorBorders = getColoredBorders(); 
      return (
          <div className="tile">
              <div className="giphy-tile">
                  <div className="text-tile">
                  <p>{giphy?.title}</p>
                  </div>
                  <img src={giphyURL}/>
                  <div className= {`overlay-${colorBorders}`}></div>
              </div>
              <div className="line-box">
                  <div className={`line-top-${colorBorders}`}></div>
                  <div className={`line-middle-${colorBorders}`}></div>
                  <div className={`line-bottom-${colorBorders}`}></div>
              </div>
          </div>
      )  
    }

    const gridGiphysConfig = [
        ["landscape-left-row", 3],
        ["landscape-right-row", 3],
        ["no-landscape-row", 4],
        ["landscape-middle-row", 3],
        ["no-landscape-row", 4],
    ]
   
    const creatTiles = (numTiles) =>{
        let tiles = [];
        for(let i = 0; i < numTiles; i++) {
            tiles.push(<GiphyTile giphy={getGiphy()} key={i}/>)
        }
        return tiles;
    }

  return (
    <div className="stries-section">
        {gridGiphysConfig.map(([layoutClass, numTiles], index) =>{
            const tiles = creatTiles(numTiles);
           return  (
           <div className={layoutClass} key={index}>
               {tiles}
           </div>
            
           )
        })}
    
        {/*<div className="landscape-left-row">
            <GiphyTile giphy={getGiphy()}/>
            <GiphyTile giphy={getGiphy()} />
            <GiphyTile giphy={getGiphy()} />
        </div>
        <div className="landscape-right-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        </div>
        <div className="no-landscape-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        </div>
        <div className="landscape-middle-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        </div>
        <div className="no-landscape-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        </div>
  */}
        
        
    </div>
  )
}

export default StoriesGiphySection