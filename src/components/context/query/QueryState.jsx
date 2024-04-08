import React, { useState } from 'react';
import QueryContext from './QueryContext';

const QueryState = (props) => {
    const CLIENT_ID = import.meta.env.VITE_REACT_APP_ID;
    const CLIENT_SECRET = import.meta.env.VITE_REACT_APP_SECRET;
    const [token, setToken] = useState({ key: "", type: "" });
    const [auth, setAuth] = useState(false);
    const [data, setData] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [track, setTrack] = useState("");
    const getKey = async () => {
        const response = await fetch(`https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "",
        });
        const key = await response.json();

        setToken({ key: key.access_token, type: key.token_type });
        setAuth(true);
    }

    const getQuery = async (query) => {
        if (query != "") {
            const res = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Authorization": `${token.type}  ${token.key}`,
                }
            });
            const data = await res.json();
            setData(data.tracks.items);
        } else {
            setData([]);
        }
    }


    const getRecms = async () => {
        const res = await fetch("https://api.spotify.com/v1/recommendations?market=IN&limit=30&seed_genres=dance,anime,disco", {
            method: "GET",
            mode: "cors",
            headers: {
                "Authorization": `${token.type}  ${token.key}`,
            }
        });
        const resJson = await res.json();
        setRecommendations(resJson.tracks);
        console.log(resJson);
    }

    return (
        <QueryContext.Provider value={{ getKey, getQuery, data, track, setTrack, getRecms, recommendations, auth }}>
            {props.children}
        </QueryContext.Provider>
    )
}

export default QueryState;