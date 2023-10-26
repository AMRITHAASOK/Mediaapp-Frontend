import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function Category() {

  const[categoryName,setCategoryName]=useState('')
  const [allCategories,setAllCategories]=useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory=async()=>{

    const body={
      categoryName
    }
    if(categoryName){
      //make api call
      const response=await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<=300){
          handleClose()
          setCategoryName("")
          getCategory()
      }
      else{
        alert("operation failed")
      }
  }
  else{
      alert('please provide a category name')
  }

  }

  const getCategory =async()=>{
    //make api call
    const {data} = await getAllCategory()
    console.log(data);
    setAllCategories(data);
    
  }

 
  console.log(allCategories);

  useEffect(()=>{
    getCategory()
  },[])

  const handleDelete =async(id)=>{
   const response= await deleteCategory(id)
   console.log(response);
    toast.error('Delete successfully')
    getCategory()
  }

  const dragOver=(e)=>{
    console.log("video drop successfully");
    e.preventDefault()
  }

  const videoDrop=async(e,CategoryId)=>{
    // e.preventDefault()
    console.log('Video drop inside the category'+CategoryId);
    const videoId=e.dataTransfer.getData("videoId")
    console.log("Video Card", videoId);

    //api call
    const {data}= await getAVideo(videoId)
    console.log(data);

    //get category details
    const selectedCategory=allCategories?.find(item=>item.id===CategoryId)
    selectedCategory.allvideos.push(data)
    //make api call
    await updateCategory(CategoryId,selectedCategory)
    getCategory()
    console.log(selectedCategory);

  }



  return (
    <>
        <div className='d-grid gap-2'>
          <Button onClick={handleShow} className='btn btn-primary m-5' size="lg" >Add New Category</Button>
        </div>
        <div>
          {
            allCategories?allCategories.map(item=>(
              <div className='my-5 p-3 border rounded' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
                <div className='d-flex justify-content-between align-items-center'>
                  <h5>{item.categoryName}</h5>
                  <button onClick={()=>handleDelete(item?.id)} className='btn '><i className='fa-solid fa-trash text-danger'></i></button>
                </div>
              <Row >
                {
                 item.allvideos  &&  item.allvideos.map(data=>(
                    <Col sm={12}>
                    <VideoCard displayData={data} />
                    </Col>
                  ))
                }
              </Row>

              </div>
            )):null
          }
                 <ToastContainer className="toaster-container"
          position="top-center"/>
        </div>


        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form className='border border-1 p-5'>
        
        <FloatingLabel controlId="floatingPassword" label="Category Name">
        <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
        </FloatingLabel>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category