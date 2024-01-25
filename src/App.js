import logo from './logo.svg';
import './App.css';
import { Users } from './users';
import { useEffect, useState } from 'react';
import Tables from './Tables';
import axios from 'axios';

function App() {

  const[query,setQuery]=useState('');
  const[data,setData]=useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:5000?q=${query}`);
        setData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  if(query.length===0 || query.length>2)
    fetchUsers(); 
  }, [query]);

  return (
    <div className="App">
     <input type='text' placeholder="Search" onChange={e=>setQuery(e.target.value)}/>
      
     {/* <Tables data={search(Users)}/> */}
     <Tables data={data}/>
    </div>
  );
}

export default App;
