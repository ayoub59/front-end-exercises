import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

export default function DemoApi() {
    const [usersList, setUsersList] = useState([])
    useEffect(() => { axios.get('https://jsonplaceholder.typicode.com/users').then((Res) => { console.log(Res.data); setUsersList(Res.data) }) },
        [])
    function info(x) {
        setUsersList(usersList.filter(u => u.id == x))
    }

    return (
        <div> <h2> user count {usersList.length}</h2>
            {usersList.map(
                u => <Bloc > <h1> {u.id} {u.name} </h1>
                    <p> {u.username} </p> <p> <Link href={u.website}>{u.website}</Link> </p>
                    <button onClick={() => info(u.id)}> more info</button>
                </Bloc>

            )

            }

        </div >)
}

const Bloc = styled.div` 
background-color:#98c398;
margin-top:10px; 
width:30%;
padding:5px;
margin-left:50%; 
border-radius: 5%;
`
const Link = styled.a`
color: black;
text-decoration: none;
`