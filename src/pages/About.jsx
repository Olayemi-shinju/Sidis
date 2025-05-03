import React from 'react'
import "../plugins/animate.css"
import "../plugins/personal.css"
import "../plugins/owl.theme.default.min.css"
import "../plugins/owl.carousel.min.css"
import "../plugins/font-awesome"
import "../css/style.css"
import "../css/about.css"
const About = () => {
    return (
        <div>
            <section class="about-hero" id="about-hero">
                <div class="container flex row-start">

                    <div class="content">
                        <div class="heading">inspiring distance learning through connectivity</div>

                        <div class="emphasis">
                            Brilliant's mission is to inspire and develop people to achieve their goals in STEM
                            — one person, one question, and one small commitment to learning at a time.
                        </div>
                    </div>

                    <div class="hero-image">
                        <img src="img/about-hero.jpg" alt="" />
                    </div>

                </div>
            </section>

            <section class="about-details" id="about-details">
                <div class="container flex column-center">
                    <div class="heading">our origins</div>

                    <div class="emphasis">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Enim dolorem vitae rem laboriosam pariatur beatae nobis
                        aliquid omnis corrupti. Assumenda nesciunt similique itaque
                        dolorum pariatur recusandae atque, ipsam sequi laboriosam.
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Enim dolorem vitae rem laboriosam pariatur beatae nobis
                        aliquid omnis corrupti. Assumenda nesciunt similique itaque
                        dolorum pariatur recusandae atque, ipsam sequi laboriosam.
                    </div>
                </div>
            </section>

            <section class="prospect" id="prospect">
                <div class="container flex column-start">

                    <div class="heading">future projections</div>

                    <div class="emphasis">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, asperiores
                        vitae. Molestiae, ipsum? Modi natus error laboriosam non, officiis nostrum
                        maiores, culpa repudiandae vitae facilis eligendi hic ad iusto mollitia.
                    </div>

                    <div class="cta">our future plans</div>

                </div>
            </section>
        </div>
    )
}

export default About
