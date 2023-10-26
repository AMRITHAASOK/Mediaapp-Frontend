import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getHistory } from '../services/allAPI';
function WatchHistory() {

  const [history,setHistory] = useState([])
  const handleHistory= async()=>{
    //make api call
    const {data} = await getHistory()
    console.log(data);
    setHistory(data)
  }
  console.log(history);

  useEffect(()=>{
    handleHistory();
  },[])
  return (
    <>
    <div className='container d-flex justify-content-between align-items-center'>
      <h3 className='text-primary'>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none'}}>
      <p><i class="fa-solid fa-backward fa-fade me-1"></i> Back to Home</p>
      </Link>
   
    </div>
    <div className='container my-5'>
    <Table striped bordered hover variant="black">
      <thead>
        <tr>
        <th>Index</th>
          <th>Id</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
       { 
       history?history.map((item,index)=>(
        <tr>
        <td>{index+1}</td>
        <td>{item.id}</td>
        <td>{item.caption}</td>
        <td>{item.embedLink}</td>
        <td>{item.timestamp}</td>
      </tr>
       )):<P>No data</P>
      
        
      }
      </tbody>
    </Table>
    </div>


      
    </>
  )
}

export default WatchHistory