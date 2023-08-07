import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";

export default component$(() => {
  return (
    <>
      <main id="main">

{/* <!-- Hero Section - Home Page --> */}
<section id="hero" class="hero">

  <img src="img/hero-bg.jpg" alt="" data-aos="fade-in"/>

  <div class="container">
    <div class="row">
      <div class="col-lg-10">
        <h2 data-aos="fade-up" data-aos-delay="100">Join us today..</h2>
        <p data-aos="fade-up" data-aos-delay="200">We are committed to influence and Implement Sustainable Actions
          on Fighting Antimicrobial Resistance Through Training, Research and Advocacy.
        </p>
      </div>
      <div class="col-lg-5">
        <form action="#" class="sign-up-form d-flex" data-aos="fade-up" data-aos-delay="300">
          <input type="text" class="form-control" placeholder="Enter email address"></input>
          <input type="submit" class="btn btn-primary" value="Join us"></input>
        </form>
      </div>
    </div>
  </div>

</section>
{/* <!-- End Hero Section --> */}

{/* <!-- Clients Section - Home Page --> */}
<section id="clients" class="clients">

  <div class="container-fluid" data-aos="fade-up">

    <div class="row gy-4">

      <div class="col-xl-2 col-md-3 col-6 client-logo">
        <img src="img/clients/client-1.png" class="img-fluid" alt=""/>
      </div>

      <div class="col-xl-2 col-md-3 col-6 client-logo">
        <img src="img/clients/client-2.png" class="img-fluid" alt=""/>
      </div>

      <div class="col-xl-2 col-md-3 col-6 client-logo">
        <img src="img/clients/client-3.png" class="img-fluid" alt=""/>
      </div>

      <div class="col-xl-2 col-md-3 col-6 client-logo">
        <img src="img/clients/client-4.png" class="img-fluid" alt=""/>
      </div>

      <div class="col-xl-2 col-md-3 col-6 client-logo">
        <img src="img/clients/client-5.png" class="img-fluid" alt=""/>
      </div>

      <div class="col-xl-2 col-md-3 col-6 client-logo">
        <img src="img/clients/client-6.png" class="img-fluid" alt=""/>
      </div>

    </div>

  </div>

</section>
{/* <!-- End Clients Section --> */}

{/* <!-- About Section - Home Page --> */}
<section id="about" class="about">

  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row align-items-xl-center gy-5">

      <div class="col-xl-5 content">
        <h3>About Us</h3>
        <h2>Get to know us.</h2>
        <p>One Health Society (OHS) Is A Youth Led Non-Government Organization Founded In 2019 Committed to Influence and 
          Implement Sustainable Actions on Fighting Against Antimicrobial Resistance Through Training, Research and Advocacy 
          with One Health Being the Central Approach.</p>
        <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
      </div>

      <div class="col-xl-7">
        <div class="row gy-4 icon-boxes">

          <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box">
              <i class="bi bi-eye"></i>
              <h3>Vision</h3>
              <p>To see the society with empowered people in promoting and advocating healthful communities.</p>
            </div>
          </div> 

          <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-box">
              <i class="bi bi-flag"></i>
              <h3>Mission</h3>
              <p>To become a leading organization in promoting of rational use of medicines to serve the community and meet humanitarian needs.</p>
            </div>
          </div> 

          <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div class="icon-box">
              <i class="bi bi-command"></i>
              <h3>Objectives</h3>
              <p>1. Advocating for healthy living with an objective of eliminating disease.
                <br></br>2. To promote quality of health care services.
                <br></br>3. To promote, raising awareness on antimicrobial resistance and education on rational usage of medicines.
                <br></br>4. Establishing innovative environment for health research and surveillance.</p>
            </div>
          </div> 
          <br></br>
          <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div class="icon-box">
              <i class="bi bi-graph-up-arrow"></i>
              <h3>Core Values</h3>
              <p>✓ Collaboration

                <br></br>✓ Openness
                
                <br></br>✓ Respect
                
                <br></br>✓ Empowerment</p>
            </div>
          </div> 

        </div>
      </div>

    </div>
  </div>

</section>
{/* <!-- End About Section --> */}

{/* <!-- Stats Section - Home Page --> */}
<section id="stats" class="stats">

  <img src="img/stats-bg.jpg" alt="" data-aos="fade-in"/>

  <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">

    <div class="row gy-4">

      <div class="col-lg-4 col-md-6">
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" class="purecounter"></span>
          <p>Programs & Projects Completed</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="200" data-purecounter-duration="1" class="purecounter"></span>
          <p>Youth Connected & Trained</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="1" class="purecounter"></span>
          <p>Community Awareness Campaigns</p>
        </div>
      </div>

    </div>
    <div class="row gy-4">

      <div class="col-lg-4 col-md-6">
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="500" data-purecounter-duration="1" class="purecounter"></span>
          <p>Push SMS Delivered</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="2000" data-purecounter-duration="1" class="purecounter"></span>
          <p>Social Media Followers</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="1" class="purecounter"></span>
          <p>Research Articles Published</p>
        </div>
      </div>

    </div>
  </div>

</section> 
{/* <!-- End Stats Section --> */}

{/* <!-- Features Section - Home Page --> */}
<section id="features" class="features">

  {/* <!--  Section Title --> */}
  <div class="container section-title" data-aos="fade-up">
    <h2>Our Projects</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>

  <div class="container">

    <div class="row gy-4 align-items-center features-item">
      <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
        <h3>Corporis temporibus maiores provident</h3>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <a href="#" class="btn btn-get-started">Get Started</a>
      </div>
      <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
        <div class="image-stack">
          <img src="img/features-light-1.jpg" alt="" class="stack-front"/>
          <img src="img/features-light-2.jpg" alt="" class="stack-back"/>
        </div>
      </div>
    </div>

    <div class="row gy-4 align-items-stretch justify-content-between features-item ">
      <div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
        <img src="img/features-light-3.jpg" class="img-fluid" alt=""/>
      </div>
      <div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
        <h3>Sunt consequatur ad ut est nulla</h3>
        <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
        <ul>
          <li><i class="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
          <li><i class="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
          <li><i class="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
        </ul>
        <a href="#" class="btn btn-get-started align-self-start">Get Started</a>
      </div>
    </div>

  </div>

</section> 
{/* <!-- End Features Section --> */}

{/* <!-- Portfolio Section - Home Page --> */}
<section id="portfolio" class="portfolio">

  {/* <!--  Section Title --> */}
  <div class="container section-title" data-aos="fade-up">
    <h2>Portfolio</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>

  <div class="container">

    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

      <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
        <li data-filter="*" class="filter-active">All</li>
        <li data-filter=".filter-app">App</li>
        <li data-filter=".filter-product">Card</li>
        <li data-filter=".filter-branding">Web</li>
      </ul>
      {/* <!-- End Portfolio Filters --> */}

      <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
          <img src="img/masonry-portfolio/masonry-portfolio-1.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>App 1</h4>
            <p>Lorem ipsum, dolor sit</p>
            <a href="img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
          <img src="img/masonry-portfolio/masonry-portfolio-2.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Product 1</h4>
            <p>Lorem ipsum, dolor sit</p>
            <a href="img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
          <img src="img/masonry-portfolio/masonry-portfolio-3.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Branding 1</h4>
            <p>Lorem ipsum, dolor sit</p>
            <a href="img/masonry-portfolio/masonry-portfolio-3.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
          <img src="img/masonry-portfolio/masonry-portfolio-4.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>App 2</h4>
            <p>Lorem ipsum, dolor sit</p>
            <a href="img/masonry-portfolio/masonry-portfolio-4.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
          <img src="img/masonry-portfolio/masonry-portfolio-5.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Product 2</h4>
            <p>Lorem ipsum, dolor sit</p>
            <a href="img/masonry-portfolio/masonry-portfolio-5.jpg" title="Product 2" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
          <img src="img/masonry-portfolio/masonry-portfolio-6.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Branding 2</h4>
            <p>Lorem ipsum, dolor sit</p>
            <a href="img/masonry-portfolio/masonry-portfolio-6.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
          <img src="img/masonry-portfolio/masonry-portfolio-7.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>App 3</h4>
            <p>Lorem ipsum, dolor sit</p>
            <a href="img/masonry-portfolio/masonry-portfolio-7.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
          <img src="img/masonry-portfolio/masonry-portfolio-8.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Product 3</h4>
            <p>Lorem ipsum, dolor sit</p>
            <a href="img/masonry-portfolio/masonry-portfolio-8.jpg" title="Product 3" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
          <img src="img/masonry-portfolio/masonry-portfolio-9.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Branding 3</h4>
            <p>Lorem ipsum, dolor sit</p>
            <a href="img/masonry-portfolio/masonry-portfolio-9.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>

      </div> 
      {/* <!-- End Portfolio Container --> */}

    </div>

  </div>

</section>
{/* <!-- End Portfolio Section --> */}

{/* <!-- Faq Section - Home Page --> */}
<section id="faq" class="faq">

  <div class="container">

    <div class="row gy-4">

      <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div class="content px-xl-5">
          <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
        </div>
      </div>

      <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">

        <div class="faq-container">
          <div class="faq-item faq-active">
            <h3><span class="num">1.</span> <span>Non consectetur a erat nam at lectus urna duis?</span></h3>
            <div class="faq-content">
              <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
            </div>
            <i class="faq-toggle bi bi-chevron-right"></i>
          </div>

          <div class="faq-item">
            <h3><span class="num">2.</span> <span>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span></h3>
            <div class="faq-content">
              <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
            </div>
            <i class="faq-toggle bi bi-chevron-right"></i>
          </div>

          <div class="faq-item">
            <h3><span class="num">3.</span> <span>Dolor sit amet consectetur adipiscing elit pellentesque?</span></h3>
            <div class="faq-content">
              <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
            </div>
            <i class="faq-toggle bi bi-chevron-right"></i>
          </div>

          <div class="faq-item">
            <h3><span class="num">4.</span> <span>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</span></h3>
            <div class="faq-content">
              <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
            </div>
            <i class="faq-toggle bi bi-chevron-right"></i>
          </div>

          <div class="faq-item">
            <h3><span class="num">5.</span> <span>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</span></h3>
            <div class="faq-content">
              <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
            </div>
            <i class="faq-toggle bi bi-chevron-right"></i>
          </div>

        </div>

      </div>
    </div>

  </div>

</section>
{/* <!-- End Faq Section --> */}

{/* <!-- Team Section - Home Page --> */}
<section id="team" class="team">

  {/* <!--  Section Title --> */}
  <div class="container section-title" data-aos="fade-up">
    <h2>Team</h2>
    <p>People behind our operations.</p>
  </div>

  <div class="container">

    <div class="row gy-5">

      <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
        <div class="member-img">
          <img src="img/team/team-1.jpg" class="img-fluid" alt=""/>
          <div class="social">
            <a href="https://twitter.com/HamisiMsagama?t=8GKrleIn0xMtFmyJr1-B0A&s=35"><i class="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/hamisi.gama"><i class="bi bi-facebook"></i></a>
            <a href="https://instagram.com/hamisi_msagama?igshid=YmMyMTA2M2Y="><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/hamisi-msagama-711714196"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info text-center">
          <h4>Hamisi Msagama</h4>
          <span>Executive Director</span>
          {/* <!-- <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p> --> */}
        </div>
      </div>

      <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
        <div class="member-img">
          <img src="img/team/team-2.jpg" class="img-fluid" alt=""/>
          <div class="social">
            <a href="https://twitter.com/Samwel__charles?t=iQ54IfgFz166kH0bGG-Ilg&s=09"><i class="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/samwel.ibrahim.3?mibextid=ZbWKwL"><i class="bi bi-facebook"></i></a>
            <a href="https://instagram.com/samwel__charles?igshid=MzNlNGNkZWQ4Mg=="><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/samwel-ibrahim-charles-648910139"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info text-center">
          <h4>Samwel Charles</h4>
          <span>Chief Operating Officer</span>
          {/* <!-- <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p> --> */}
        </div>
      </div>
      

      <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
        <div class="member-img">
          <img src="img/team/team-3.jpg" class="img-fluid" alt=""/>
          <div class="social">
            <a href="https://twitter.com/yangaza209"><i class="bi bi-twitter"></i></a>
            {/* <!-- <a href="#"><i class="bi bi-facebook"></i></a> --> */}
            <a href="https://instagram.com/yangaza209?igshid=ZDc4ODBmNjlmNQ=="><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/yonah-yangaza-a346ba113"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info text-center">
          <h4>Yona Yangaza</h4>
          <span>Research & NTDs Focal Person</span>
          {/* <!-- <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p> --> */}
        </div>
      </div>

      <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
        <div class="member-img">
          <img src="img/team/team-4.jpg" class="img-fluid" alt=""/>
          <div class="social">
            {/* <!-- <a href="#"><i class="bi bi-twitter"></i></a> */}
            {/* <a href="#"><i class="bi bi-facebook"></i></a> --> */}
            <a href="https://instagram.com/ja4aryhassan?igshid=NGExMmI2YTkyZg=="><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/jafary-hassan-283392214"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info text-center">
          <h4>Jafary Hassan</h4>
          <span>Media &Publication Officer</span>
          {/* <!-- <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p> --> */}
        </div>
      </div>

      <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="500">
        <div class="member-img">
          <img src="img/team/team-5.jpg" class="img-fluid" alt=""/>
          <div class="social">
            <a href="https://twitter.com/Dickson40738332?t=dyWXB4Tb23tauSCUel1_Sw&s=09"><i class="bi bi-twitter"></i></a>
            {/* <!-- <a href="#"><i class="bi bi-facebook"></i></a> -->
            <!-- <a href="#"><i class="bi bi-instagram"></i></a> --> */}
            <a href="https://www.linkedin.com/in/dickson-daniel-363906266"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info text-center">
          <h4>Dickson Daniel</h4>
          <span>Innovation & Technology Officer</span>
          {/* <!-- <p>Qui consequunt ur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p> --> */}
        </div>
      </div>

      <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
        <div class="member-img">
          <img src="img/team/team-6.jpg" class="img-fluid" alt=""/>
          <div class="social">
            {/* <!-- <a href="https://twitter.com/Dickson40738332?t=dyWXB4Tb23tauSCUel1_Sw&s=09"><i class="bi bi-twitter"></i></a> -->
            <!-- <a href="#"><i class="bi bi-facebook"></i></a> --> */}
            <a href="https://instagram.com/bennman255?igshid=MzNlNGNkZWQ4Mg=="><i class="bi bi-instagram"></i></a>
            {/* <!-- <a href="https://www.linkedin.com/in/dickson-daniel-363906266"><i class="bi bi-linkedin"></i></a> --> */}
          </div>
        </div>
        <div class="member-info text-center">
          <h4>Benn Maembe</h4>
          <span>Training &Advocacy Coordinator</span>
          {/* <!-- <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p> --> */}
        </div>
      </div>

      <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
        <div class="member-img">
          <img src="img/team/team-7.jpg" class="img-fluid" alt=""/>
          <div class="social">
            <a href="https://twitter.com/muzdalf34094005?t=sXbM1F_vIIK5OV0VaSll6Q&s=08"><i class="bi bi-twitter"></i></a>
            {/* <!-- <a href="#"><i class="bi bi-facebook"></i></a> --> */}
            <a href="https://instagram.com/muzdalfa_kazimily?igshid=MzNlNGNkZWQ4Mg=="><i class="bi bi-instagram"></i></a>
            {/* <!-- <a href="https://www.linkedin.com/in/dickson-daniel-363906266"><i class="bi bi-linkedin"></i></a> --> */}
          </div>
        </div>
        <div class="member-info text-center">
          <h4>Suzan Kazimily</h4>
          <span>AMR Youth Fellowship Coordinator</span>
          {/* <!-- <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p> --> */}
        </div>
      </div>

      <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
        <div class="member-img">
          <img src="img/team/team-8.jpg" class="img-fluid" alt=""/>
          <div class="social">
            <a href="https://twitter.com/Idavas220?t=UNNRgizAKZ5jee6I4G048A&s=09"><i class="bi bi-twitter"></i></a>
            {/* <!-- <a href="#"><i class="bi bi-facebook"></i></a> -->
            <!-- <a href="https://instagram.com/bennman255?igshid=MzNlNGNkZWQ4Mg=="><i class="bi bi-instagram"></i></a> --> */}
            <a href="https://www.linkedin.com/in/mwanahawa-mshana-3b54ba213"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info text-center">
          <h4>Mwanahawa Mshana</h4>
          <span>NTDs Youth Hub Coordinator</span>
          {/* <!-- <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p> --> */}
        </div>
      </div>

    </div>

  </div>

</section>
{/* <!-- End Team Section --> */}

{/* <!-- Call-to-action Section - Home Page --> */}
<section id="call-to-action" class="call-to-action">

  <img src="img/cta-bg.jpg" alt=""/>

  <div class="container">
    <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
      <div class="col-xl-10">
        <div class="text-center">
          <h3>Call To Action</h3>
          <p>We are committed to influence and Implement Sustainable Actions on Fighting Antimicrobial Resistance Through Training, Research and Advocacy.</p>
          <a class="cta-btn" href="#">Join us Today</a>
        </div>
      </div>
    </div>
  </div>

</section>
{/* <!-- End Call-to-action Section --> */}

{/* <!-- Testimonials Section - Home Page --> */}
<section id="testimonials" class="testimonials">

  <div class="container">

    <div class="row align-items-center">

      <div class="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
        <h3>Testimonials</h3>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>

      <div class="col-lg-7" data-aos="fade-up" data-aos-delay="200">

        <div class="swiper">
          <template class="swiper-config">
            {/* {
            "loop": true,
            "speed" : 600,
            "autoplay": {
            "delay": 5000
            },
            "slidesPerView": "auto",
            "pagination": {
            "el": ".swiper-pagination",
            "type": "bullets",
            "clickable": true
            }
            } */}
          </template>
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <div class="d-flex">
                  <img src="img/testimonials/testimonials-1.jpg" class="testimonial-img flex-shrink-0" alt=""/>
                  <div>
                    <h3>Saul Goodman</h3>
                    <h4>Ceo & Founder</h4>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <div class="d-flex">
                  <img src="img/testimonials/testimonials-2.jpg" class="testimonial-img flex-shrink-0" alt=""/>
                  <div>
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <div class="d-flex">
                  <img src="img/testimonials/testimonials-3.jpg" class="testimonial-img flex-shrink-0" alt=""/>
                  <div>
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <div class="d-flex">
                  <img src="img/testimonials/testimonials-4.jpg" class="testimonial-img flex-shrink-0" alt=""/>
                  <div>
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <div class="d-flex">
                  <img src="img/testimonials/testimonials-5.jpg" class="testimonial-img flex-shrink-0" alt=""/>
                  <div>
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>

    </div>

  </div>

</section>
{/* <!-- End Testimonials Section --> */}

{/* <!-- Recent-posts Section - Home Page --> */}
<section id="recent-posts" class="recent-posts">

  {/* <!--  Section Title --> */}
  <div class="container section-title" data-aos="fade-up">
    <h2>Recent Posts</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>

  <div class="container">

    <div class="row gy-4">

      <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <article>

          <div class="post-img">
            <img src="img/blog/blog-1.jpg" alt="" class="img-fluid"/>
          </div>

          <p class="post-category">Politics</p>

          <h2 class="title">
            <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
          </h2>

          <div class="d-flex align-items-center">
            <img src="img/blog/blog-author.jpg" alt="" class="img-fluid post-author-img flex-shrink-0"/>
            <div class="post-meta">
              <p class="post-author">Maria Doe</p>
              <p class="post-date">
                <time dateTime="2022-01-01">Jan 1, 2022</time>
              </p>
            </div>
          </div>

        </article>
      </div>
      

      <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <article>

          <div class="post-img">
            <img src="img/blog/blog-2.jpg" alt="" class="img-fluid"/>
          </div>

          <p class="post-category">Sports</p>

          <h2 class="title">
            <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
          </h2>

          <div class="d-flex align-items-center">
            <img src="img/blog/blog-author-2.jpg" alt="" class="img-fluid post-author-img flex-shrink-0"/>
            <div class="post-meta">
              <p class="post-author">Allisa Mayer</p>
              <p class="post-date">
                <time dateTime="2022-01-01">Jun 5, 2022</time>
              </p>
            </div>
          </div>

        </article>
      </div>

      <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <article>

          <div class="post-img">
            <img src="img/blog/blog-3.jpg" alt="" class="img-fluid"/>
          </div>

          <p class="post-category">Entertainment</p>

          <h2 class="title">
            <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
          </h2>

          <div class="d-flex align-items-center">
            <img src="img/blog/blog-author-3.jpg" alt="" class="img-fluid post-author-img flex-shrink-0"/>
            <div class="post-meta">
              <p class="post-author">Mark Dower</p>
              <p class="post-date">
                <time dateTime="2022-01-01">Jun 22, 2022</time>
              </p>
            </div>
          </div>

        </article>
      </div>

    </div>
    {/* <!-- End recent posts list --> */}

  </div>

</section>
{/* <!-- End Recent-posts Section --> */}

{/* <!-- Contact Section - Home Page --> */}
<section id="contact" class="contact">

  {/* <!--  Section Title --> */}
  <div class="container section-title" data-aos="fade-up">
    <h2>Contact</h2>
    <p>Get In Touch</p>
  </div>

  <div class="container" data-aos="fade-up" data-aos-delay="100">

    <div class="row gy-4">

      <div class="col-lg-6">

        <div class="row gy-4">
          <div class="col-md-6">
            <div class="info-item" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>90372, Dar es Salaam
                Temeke, Mwapemba street</p>
              <p>Dar es salaam, Tanzania</p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="info-item" data-aos="fade" data-aos-delay="300">
              <i class="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>+255 710 896 052</p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="info-item" data-aos="fade" data-aos-delay="400">
              <i class="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>ps@ohs-health.org</p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="info-item" data-aos="fade" data-aos-delay="500">
              <i class="bi bi-clock"></i>
              <h3>Open Hours</h3>
              <p>Monday - Friday</p>
              <p>8:00AM - 03:30PM</p>
            </div>
          </div>

        </div>

      </div>

      <div class="col-lg-6">
        <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
          <div class="row gy-4">

            <div class="col-md-6">
              <input type="text" name="name" class="form-control" placeholder="Your Name" required></input>
            </div>

            <div class="col-md-6 ">
              <input type="email" class="form-control" name="email" placeholder="Your Email" required></input>
            </div>

            <div class="col-md-12">
              <input type="text" class="form-control" name="subject" placeholder="Subject" required></input>
            </div>

            <div class="col-md-12">
              <textarea class="form-control" name="message" rows={6} placeholder="Message" required></textarea>
            </div>

            <div class="col-md-12 text-center">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>

              <button type="submit">Send Message</button>
            </div>

          </div>
        </form>
      </div>
      {/* <!-- End Contact Form --> */}

    </div>

  </div>

</section>
{/* <!-- End Contact Section --> */}

</main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
