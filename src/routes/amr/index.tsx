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
          <h1>What we do</h1>
          <p class="mb-0">AMR.</p>
        </div>
      </div>
    </div>
  </div>
  <nav class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="index.html">Home</a></li>
        <li class="current">AMR</li>
      </ol>
    </div>
  </nav>
</div>
{/* <!-- End Page Title --> */}

{/* <!-- Services Section - Home Page --> */}
<section id="services" class="services">

{/* <!--  Section Title --> */}
{/* <!-- <div class="container section-title" data-aos="fade-up">
  <h2>What we do.</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div> --> */}
{/* <!-- End Section Title --> */}

<div class="container">
  <div class="row gy-4">
    <div class="col-lg-12" data-aos="fade-up" data-aos-delay="100">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-bug"></i></div>
        <div>
          <h4 class="title"><a href="javascript:void(0)" class="stretched-link">Antimicrobial Resistance</a></h4>
          <p>WHO-Global-Research Agenda for AMR in Human Health Policy-Brief</p>
          <iframe src="https://cloud.appwrite.io/v1/storage/buckets/6500066e151dd2c12bf8/files/650010dc2833f59d6b13/view?project=64d4a54274614d421630&mode=admin" width="100%" height="500"></iframe>
          <br /><br />
          <p>National One Health Strategic Plan 2022 - 2027</p>
          <iframe src="https://cloud.appwrite.io/v1/storage/buckets/6500066e151dd2c12bf8/files/65001189c6e883860aad/view?project=64d4a54274614d421630&mode=admin" width="100%" height="500"></iframe>
          <br /><br />
          <p>THE NATIONAL ACTION PLAN 2023 - 2028</p>
          <iframe src="https://cloud.appwrite.io/v1/storage/buckets/6500066e151dd2c12bf8/files/650010ef750773c31957/view?project=64d4a54274614d421630&mode=admin" width="100%" height="500"></iframe>
        </div>
      </div>
    </div>
  </div>
</div>


</section>
{/* nd Services Section */}

</main>
  </>
  )
});