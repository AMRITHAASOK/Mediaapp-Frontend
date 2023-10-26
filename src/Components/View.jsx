import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { getAllVideos } from '../services/allAPI'
import { all } from 'axios'

function View({uploadVideoServerResponse}) {

  const [allVideos,setAllVideos]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  const getAllUploadedVideos=async()=>{
    //make api call
    const {data} = await getAllVideos()
    setAllVideos(data)
  }
  console.log(allVideos);
  
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoServerResponse,deleteVideoStatus])
  return (
    <>
    <Row>
      {
        allVideos.length>0?
        allVideos.map((video)=>(
          <Col >
          <div>
              <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus} />
          </div>
         </Col>
        ))
        : <p>Nothing </p>

      }
    </Row>
      

    </>
  )
}

export default View