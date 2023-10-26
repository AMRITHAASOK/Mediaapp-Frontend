import React, { useState } from "react";
import Add from "../Components/Add";
import { Link } from "react-router-dom";
import View from '../Components/View'
import Category from "../Components/Category";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Home() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})

  return (
    <>

  <Row>{/* 1st div */}
      <Col xl={6} className="container d-flex  justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
        </div>

        <Link to={"/watch-history"} style={{ textDecoration: "none" }}>
          Watch History
        </Link>
      </Col>
{/* 2nd div */}
      <Col  xl={12} className="container-fluid d-flex  justify-content-between">
        <div className="all-videos">
          <h5 className="text-center my-4">All Videos</h5>
          <View uploadVideoServerResponse={uploadVideoServerResponse}/>
        </div>

        <Col xl={4}>
          <Category/>
        </Col>
      </Col>
      </Row>
    </>
  );
}

export default Home;
