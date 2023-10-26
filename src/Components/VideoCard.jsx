import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteAVideo } from '../services/allAPI';
import { toast } from 'react-toastify';
function VideoCard({displayData,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    const {caption,embedLink} = displayData
    let today=new Date()
    console.log(today);
    let timestamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)

  console.log(new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today));

  let videDetails={
    caption,embedLink,timestamp
  }
  await addToHistory(videDetails)
  };



  //remove data
  const removeVideo=async(id)=>{
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
    toast.error("Video card deleted")
    // window.location.reload()

  }
  
  const dragStarted=(e,id)=>{
    console.log('Drag started' +id, e);
    e.dataTransfer.setData("VideoId",id)
  }


  return (
    <>
    <Row>
      <Col> 
      <Card draggable onDragStart={(e)=>dragStarted(e,displayData.id)} style={{ width: '18rem' }} className='m-5'>
      <Card.Img onClick={handleShow} variant="top" src={displayData.url} />
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title>{displayData.caption}</Card.Title>
        <button className='btn' onClick={()=>removeVideo(displayData.id)}><i className='fa-solid fa-trash text-white'></i></button>
      </Card.Body>
        </Card>
      </Col>
    </Row>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayData.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height="315" src={displayData.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
       
    </>
  )
}

export default VideoCard