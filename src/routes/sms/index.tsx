import { component$ } from '@builder.io/qwik';
export default component$(() => {
  return (
  <>
   <main id="main">

{/* <!-- Blog Page Title & Breadcrumbs --> */}
<div data-aos="fade" class="page-title">
  <div class="heading">
    <div class="container">
      <div class="row d-flex justify-content-center text-center">
        <div class="col-lg-8">
          <h1>Push SMS</h1>
          <p class="mb-0">Easily report to us.</p>
        </div>
      </div>
    </div>
  </div>
  <nav class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="index.html">Home</a></li>
        <li class="current">Push SMS</li>
      </ol>
    </div>
  </nav>
</div>
{/* <!-- End Page Title --> */}

{/* <!-- Contact Section - Home Page --> */}
<section id="contact" class="contact">

{/* <!--  Section Title --> */}
<div class="container section-title" data-aos="fade-up">
  <h2>Push SMS</h2>
  <p>Get In Touch Through Push SMS</p>
</div>

<div class="container" data-aos="fade-up" data-aos-delay="100">

  <div class="row gy-4">

    <div class="col-lg-12">
      <form class="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div class="row gy-4">
          <div class="col-md-12">
            <input type="text" name="name" class="form-control" placeholder="Full Name" required></input>
          </div>

          <div class="col-md-12 ">
            <input  style="text-color: #bbb;" type="tel" class="form-control" name="email" placeholder="Phone Number" required></input>
          </div>

          <div class="col-md-12 ">
            <select  style="color: #bbb;" class="form-select" aria-label="Default select example">
                <option selected>Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
            </select>
          </div>

          <div class="col-md-12">
            <input type="text" class="form-control" name="subject" placeholder="Region" required></input>
          </div>

          <div class="col-md-12">
            <input type="text" name="name" class="form-control" placeholder="District" required></input>
          </div>

            <div class="col-md-12 ">
            <select style="color: #bbb;" class="form-select" aria-label="Default select example">
                <option selected>Language</option>
                <option value="1">English</option>
                <option value="2">Swahili</option>
                <option value="2">Sukuma</option>
                <option value="2">Chaga</option>
                <option value="2">Makonde</option>
                <option value="2">Maasai</option>
            </select>
            </div>

          {/* <div class="col-md-12">
            <textarea class="form-control" name="message" rows={6} placeholder="Message" required></textarea>
          </div> */}

          <div class="col-md-12 text-center">
            <button type="button" class="btn btn-success">Submit</button>
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
  )
});