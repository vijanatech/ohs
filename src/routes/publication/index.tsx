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
          <h1>Publication</h1>
          <p class="mb-0">What is shared about us.</p>
        </div>
      </div>
    </div>
  </div>
  <nav class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="index.html">Home</a></li>
        <li class="current">Publication</li>
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
          <h4 class="title">THE SILENT BITES: A Wake up call for Rabies Awareness</h4>
          <p class="description"><i>By Yona Eliud Yangaza <br />
August 11, 2023</i> <br /><br />

Rabies, a deadly viral disease, continues to have a profound impact on communities throughout Africa, causing progressive and fatal inflammation of the brain and spinal cord. However, the good news is that rabies is 100% vaccine-preventable. Timely vaccination of exposed individuals, as well as vaccination of dogs and other animals to prevent infection at the source, has proven to be effective. Unfortunately, in many rabies-endemic countries, this strategy has not received sustained attention and investment.
<br /><br />

Among those most affected by rabies are children and young adolescents, as many of the victims are younger than 15 years old. Therefore, it is crucial to engage and empower these youths in rabies prevention and control activities and to raise awareness and welcome their fresh perspectives and innovative solutions.

<br /><br />
Let’s meet Yona Eliud Yangaza, an inspiring member of the youth-led registered nongovernmental organization the One Health Society – dedicated to fighting against neglected tropical diseases (NTDs) and antimicrobial resistance in the United Republic of Tanzania, Africa. <br />
<a href="https://www.who.int/news-room/feature-stories/detail/the-silent-bites--a-wake-up-call-for-rabies-awareness" target='_blank'>Read More</a>
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