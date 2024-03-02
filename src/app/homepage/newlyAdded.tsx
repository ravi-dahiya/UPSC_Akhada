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
                        <h4>UPSC Mains Daily Answer Writing(GS & ESSAY)</h4>
                        <p> </p>
                        <a href="https://mgxpi.courses.store/353417?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>Science & Technology</h4>
                        <p> </p>
                        <a href="https://mgxpi.courses.store/399124?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>Public Administration Daily Answer Writing</h4>
                        <p> </p>
                        <a href="https://mgxpi.courses.store/286727?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>Psychology Optional Mentorship and Previous Year Answer Writing </h4>
                        <p>  </p>
                        <a href="https://mgxpi.courses.store/211279?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>PSIR Optional Mentorship and Daily Answer Writing</h4>
                        <p> </p>
                        <a href="https://mgxpi.courses.store/271056?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">Read more</a>
                    </div>
                </Col>
            </Row>
         </Container>
      </section>
    );
}

export default NewlyAdded;
