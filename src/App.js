import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React,{ useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

function App() {

  const history = useHistory()
  

  const [moviename,setMovieName] = useState('')
  const [language,setLanguage] = useState('')
  const [release,setRelease] = useState('not available')
  const [budget,setBudget] = useState(0)
  const [collection,setCollection] = useState(0)

  const [newmoviename,setnewMovieName] = useState('')
  const [newlanguage,setnewLanguage] = useState('')
  const [newrelease,setnewRelease] = useState('not available')
  const [newbudget,setnewBudget] = useState(0)
  const [newcollection,setnewCollection] = useState(0)

  const[movieList,setMovieList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response)=>{
      setMovieList(response.data)
    })
  }, [])

  const addToList = ()=>{
   
    Axios.post("http://localhost:3001/insert",{ movieName:moviename,
    Language:language,
    ReleaseDate:release,
    Budget:budget,
    Collection:collection})
    window.location.reload(false)
  }

  const updateMovie = (id)=>{
    Axios.put("http://localhost:3001/update1",{id:id,
  newmoviename:newmoviename})
  window.location.reload(false)
  }

  const updateLanguage = (id)=>{
    Axios.put("http://localhost:3001/update2",{id:id,
  newlanguage:newlanguage})
  window.location.reload(false)
  }

  const updateRelease = (id)=>{
    Axios.put("http://localhost:3001/update3",{id:id,
  newrelease:newrelease})
  window.location.reload(false)
  }

  const updateBudget = (id)=>{
    Axios.put("http://localhost:3001/update4",{id:id,
  newbudget:newbudget})
  window.location.reload(false)
  }

  const updateCollection = (id)=>{
    Axios.put("http://localhost:3001/update5",{id:id,
  newcollection:newcollection})
  window.location.reload(false)
  }

  const deleteMovie = (id)=>{
    Axios.delete(`http://localhost:3001/delete/${id}`)
    window.location.reload(false)
  }

 

  return (
    <div className="App">
     <h1>Crud in Mern</h1>
     <label>Movie Name</label>
      <input type="text" onChange={(event)=>{setMovieName(event.target.value)}}/>
      <label>Language</label>
      <input type="text"  onChange={(event)=>{setLanguage(event.target.value)}}/>
      <label>Release Date</label>
      <input type="date"  onChange={(event)=>{setRelease(event.target.value)}}/>
      <label>Budget</label>
      <input type="number"  onChange={(event)=>{setBudget(event.target.value)}}/>
      <label>Collection</label>
      <input type="number"  onChange={(event)=>{setCollection(event.target.value)}}/>
      <button onClick={addToList}>ADD</button>

      <h1>Movie List</h1>
      <Table style={{marginTop:'30px'}}>
            <TableHead style={{ boxShadow:'-1px 4px 20px -6px rgba(0,0,0,0.75)',backgroundColor:'black'}}>
                <TableRow>
                   
                    <TableCell style={{color:'white'}}>MovieName</TableCell>
                    <TableCell style={{color:'white'}}>Language</TableCell>
                    <TableCell style={{color:'white'}}>Release Date</TableCell>
                    <TableCell style={{color:'white'}}>Budget</TableCell>
                    <TableCell  style={{color:'white'}}>Collections</TableCell>
                    <TableCell></TableCell>
                    </TableRow>
            </TableHead>
            <TableBody>
                
                    {movieList.map((val,key)=>(
                        <TableRow>
                            
                            <TableCell>{val.movieName}
                            <p><input className="up" type="text" onChange={(event)=>{setnewMovieName(event.target.value)}}/></p>
                            <button className='up1' onClick={()=>updateMovie(val._id)} >update</button>
                            </TableCell>
                            <TableCell>{val.Language}
                            <p><input className="up" type="text"  onChange={(event)=>{setnewLanguage(event.target.value)}}/></p>
                            <button className='up1'  onClick={()=>updateLanguage(val._id)}>update</button>
                            </TableCell>
                            <TableCell>{val.ReleaseDate}
                            <p><input className="up" type="date" onChange={(event)=>{setnewRelease(event.target.value)}}/></p>
                            <button className='up1'  onClick={()=>updateRelease(val._id)}>update</button>
                            </TableCell>
                            <TableCell>{val.Budget}
                            <p><input className="up" type="number" onChange={(event)=>{setnewBudget(event.target.value)}}/></p>
                            <button className='up1'  onClick={()=>updateBudget(val._id)}>update</button>
                            </TableCell>
                            <TableCell>{val.Collection}
                            <p><input className="up" type="number" onChange={(event)=>{setnewCollection(event.target.value)}}/></p>
                            <button className='up1'  onClick={()=>updateCollection(val._id)}>update</button>
                            </TableCell>
                            <TableCell>
                                
                                <Button variant="contained" style={{backgroundColor:'#f44336',margin:'2px',width:'60px'}} onClick = {()=>deleteMovie(val._id)}>Delete</Button>
                            </TableCell>
                            </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  );
}

export default App;
