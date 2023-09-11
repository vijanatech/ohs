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
          <h1>Donate</h1>
          <p class="mb-0">Be part of this transformative journey</p>
        </div>
      </div>
    </div>
  </div>
  <nav class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="index.html">Home</a></li>
        <li class="current">Donate</li>
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

    <div class="col-lg-12 " data-aos="fade-up" data-aos-delay="100">
      <div class="service-item d-flex">
        {/* <div class="icon flex-shrink-0"><i class="bi bi-bug"></i></div> */}
        <div>
          <h4 class="title"><a href="javascript:void(0)" class="stretched-link">DONATE</a></h4>
          <p><b>Bank Details:</b><br />
All Donations/Contributions should be made direct through the organization bank account <br />
Account Name: One Health Society <br />
Branch: National Bank of Commerce (NBC) <br />
Account Number: 012172000017
</p>
        </div>
      </div>
    </div>
    {/* <!-- End Service Item --> */}

  </div>

</div>

</section>
{/* nd Services Section */}

</main>
  </>
  )
});