import React from 'react';

const trackObjs = [
    {name: 'Hope', artist: '21', album: 'cool', id: 1},
    {name: 'Hotel', artist: 'fifty', album: 'dust', id: 2},
    {name: 'Train', artist: 'cent', album: 'trust', id: 3}
]

function Tracklist() {
    return (
        <div>
            <ul>
                {trackObjs.map((item, index) => {<li><h2>{item.name}</h2><br/><p>{`${trackObjs.artist} | ${trackObjs.album}`}</p></li>})}
            </ul>
        </div>
    );
}

export default Tracklist;