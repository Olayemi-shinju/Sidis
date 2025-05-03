import React from 'react'
import { Link } from 'react-router-dom'
import '../css/resources.css'
const Resource = () => {
    return (
        <div>
            <div class="resource-center">
                <div class="container flex row-between">

                    <div class="sidebar">
                        <div class="container flex column-start">
                            <div class="heading">resource center</div>

                            <ul>
                                <li className="header">Courses</li>
                                <li className="links">
                                    <Link to="/resources/accounting">Accounting</Link>
                                </li>
                                <li className="links">
                                    <Link to="/resources/bio-chemistry">Bio-Chemistry</Link>
                                </li>
                                <li className="links">
                                    <Link to="/resources/civil-engineering">Civil Engineering</Link>
                                </li>
                                <li className="links">
                                    <Link to="/resources/computer-engineering">Computer Engineering</Link>
                                </li>
                                <li className="links">
                                    <Link to="/resources/humanities">Humanities</Link>
                                </li>
                                <li className="links">
                                    <Link to="/resources/law">Law</Link>
                                </li>
                                <li className="links">
                                    <Link to="/resources/medicine">Medicine</Link>
                                </li>
                                <li className="links">
                                    <Link to="/resources/medical-laboratory">Medical Laboratory</Link>
                                </li>
                                <li className="links">
                                    <Link to="/resources/social-works">Social Works</Link>
                                </li>
                                <li className="links">
                                    <Link to="/resources/software-engineering">Software Engineering</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="center">
                        <div class="container flex column-start">

                            <p>
                                The following courses listed have their resource materials available. <br></br>
                                <em>These materials include: notes, possible test and exam questions and study guides.</em>
                            </p>

                            <div class="blocks flex row-start wrap">

                                <div class="bot flex column-start">
                                    <div class="header">accounting</div>
                                    <ul>
                                        <li>Introduction to Accounting</li>
                                        <li>Accounting Principles</li>
                                        <li>Laws of Accounting</li>
                                        <li class="cta">see more <i class="fas fa-angle-right"></i></li>
                                    </ul>
                                </div>

                                <div class="bot flex column-start">
                                    <div class="header">humanities</div>
                                    <ul>
                                        <li>Introduction to Humanities</li>
                                        <li>Principles of Humanities</li>
                                        <li>Study Guide for Humanities</li>
                                        <li class="cta">see more <i class="fas fa-angle-right"></i></li>
                                    </ul>
                                </div>

                                <div class="bot flex column-start">
                                    <div class="header">bio-chemistry</div>
                                    <ul>
                                        <li>Introduction to bio-chemistry</li>
                                        <li>Principles of bio-chemistry</li>
                                        <li class="cta">see more <i class="fas fa-angle-right"></i></li>
                                    </ul>
                                </div>

                                <div class="bot flex column-start">
                                    <div class="header">civil engineering</div>
                                    <ul>
                                        <li>Introduction to Civil Engineering</li>
                                        <li>Civil Engineering Principles</li>
                                        <li>Study Guide for Civil Engineering</li>
                                        <li class="cta">see more <i class="fas fa-angle-right"></i></li>
                                    </ul>
                                </div>

                                <div class="bot flex column-start">
                                    <div class="header">computer engineering</div>
                                    <ul>
                                        <li>Introduction to Computer Engineering</li>
                                        <li>Computer Engineering Professions</li>
                                        <li>Computer Engineering Guide</li>
                                        <li class="cta">see more <i class="fas fa-angle-right"></i></li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Resource
