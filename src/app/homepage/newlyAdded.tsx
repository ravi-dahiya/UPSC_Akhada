'use client'

import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';


function NewlyAdded() {
    return (
      <section className="newly_added_sec">
         <Container>
            <div className='section_title'>
                <h1>Newly Added Courses</h1>
            </div>
            <Row>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>UPSC Foundation Course</h4>
                        <p> </p>
                         <a href="https://mgxpi.courses.store/353607?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>HCS MAINS TEST SERIES 2024</h4>
                        <p> </p>
                        <a href="https://mgxpi.courses.store/455077?mainCategory=15" target="_blank">Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>HCS MAINS DAILY ANSWER WRITING 2024</h4>
                        <p> </p>
                        <a href="https://mgxpi.courses.store/457848?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>HCS MAINS ADVANCE LEVEL COURSE 2024</h4>
                        <p> </p>
                        <a href="https://mgxpi.courses.store/460973?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>RATTAMAAR FOR MAINS</h4>
                        <p>  </p>
                        <a href="https://mgxpi.courses.store/363659?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>HCS FOUNDATION COURSE</h4>
                        <p> </p>
                        <a href="https://mgxpi.courses.store/309011?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">Read more</a>
                    </div>
                </Col>
            </Row>
         </Container>
      </section>
    );
}

export default NewlyAdded;
