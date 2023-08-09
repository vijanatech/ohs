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
        <div class="icon flex-shrink-0"><i class="bi bi-bug"></i></div>
        <div class="card bg-light">
<article class="card-body mx-auto" style="max-width: 400px;">
	<h4 class="card-title mt-3 text-center">Create Account</h4>
	<p class="text-center">Get started with your free account</p>
	{/* <p>
		<a href="" class="btn btn-block btn-twitter"> <i class="fab fa-twitter"></i>   Login via Twitter</a>
		<a href="" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f"></i>   Login via facebook</a>
	</p> */}
	<p class="divider-text">
        <span class="bg-light">OR</span>
    </p>
	<form>
	<div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Full name" type="text">
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Email address" type="email">
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		</div>
		<select class="custom-select" style="max-width: 120px;">
		    <option selected="">+971</option>
		    <option value="1">+972</option>
		    <option value="2">+198</option>
		    <option value="3">+701</option>
		</select>
    	<input name="" class="form-control" placeholder="Phone number" type="text">
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
		</div>
		<select class="form-control">
			<option selected=""> Select job type</option>
			<option>Designer</option>
			<option>Manager</option>
			<option>Accaunting</option>
		</select>
	</div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" placeholder="Create password" type="password">
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" placeholder="Repeat password" type="password">
    </div>                                      
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
    </div>      
    <p class="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
</form>
</article>
</div> 
{/* <!-- card.// --> */}
      </div>
    </div>
    {/* <!-- End Service Item --> */}

    <div class="col-lg-12 " data-aos="fade-up" data-aos-delay="200">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-slash-circle"></i></div>
        <div>
          <h4 class="title"><a href="services-details.html" class="stretched-link">Antimicrobial Resistence</a></h4>
          <p class="description">Antimicrobial use (AMU) has continuously increased globally in the past decade. Though 
            antimicrobial resistance (AMR) is a natural evolutionary phenomenon [1–3], AMU is one of the major drivers of 
            the emergence of antibiotic-resistant microbes. This has been mainly caused by the dramatic increase in 
            antibiotic consumption rates in low-andmiddle-income countries (LMICs).  Antibiotics are becoming increasingly 
            ineffective as drug-resistance spreads globally leading to more difficult to treat infections and death. 
            However, if people do not change the way antibiotics are used now, these new antibiotics will suffer the 
            same fate as the current ones and become ineffective.
            <br></br><br></br>
            AMR occurs naturally over time, usually through genetic changes. Antimicrobial resistant organisms are found 
            in people, animals, food, plants and the environment (in water, soil and air). They can spread from person to 
            person or between people and animals, including from food of animal origin. The main drivers of antimicrobial 
            resistance include the misuse and overuse of antimicrobials; lack of access to clean water, sanitation and 
            hygiene (WASH) for both humans and animals; poor infection and disease prevention and control in health-care 
            facilities and farms;  poor access to quality, affordable medicines, vaccines and diagnostics; lack of 
            awareness and knowledge; and lack of enforcement of legislation.
            <br></br><br></br>
            AMR has been declared as one of the top 10 global public health threats facing humanity.
            Misuse and overuse of antimicrobials are the main drivers in the development of drug-resistant pathogens.
            The cost of AMR to the economy is significant. In addition to death and disability, prolonged illness results 
            in longer hospital stays, the need for more expensive medicines and financial challenges for those impacted.
            One Health Society is working to raise awareness and conducting more community outreach, seminars, symposium,
             and clubs so as to emphasize on Rational use of medicine and behavior change on medicine use.</p>
        </div>
      </div>
    </div>{/* <!-- End Service Item --> */}

    <div class="col-lg-12 " data-aos="fade-up" data-aos-delay="300">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-capsule"></i></div>
        <div>
          <h4 class="title"><a href="services-details.html" class="stretched-link">Rational use of Medicine</a></h4>
          <p class="description">Promoting rational use of medicines
            Rational use of medicines requires that “patients receive medications appropriate to their clinical needs, in doses that meet their own individual requirements, for an adequate period of time, and at the lowest cost to them and their community.
            
            A major global problem
            Irrational use of medicines is a major problem worldwide it’s estimated that more than half of all medicines are prescribed, dispensed or sold inappropriately, and that half of all patients fail to take them correctly. The overuse, underuse or misuse of medicines results in wastage of scarce resources and widespread health hazards. Examples of irrational use of medicines include: use of too many medicines per patient (“poly-pharmacy”); inappropriate use of antimicrobials, often in inadequate dosage, for non-bacterial infections; over-use of injections when oral formulations would be more appropriate; failure to prescribe in accordance with clinical guidelines; inappropriate self-medication, often of prescription-only medicines; non-adherence to dosing regimes.
            
            OHS propose 12 key interventions to promote more rational use:
            
            Establishment of a multidisciplinary national body to coordinate policies on medicine use
            Use of clinical guidelines
            Development and use of national essential medicines list
            Establishment of drug and therapeutics committees in districts and hospitals
            Inclusion of problem-based pharmacotherapy training in undergraduate curricula
            Continuing in-service medical education as a licensure requirement
            Supervision, audit and feedback
            Use of independent information on medicines
            Public education about medicines
            Avoidance of perverse financial incentives
            Use of appropriate and enforced regulation</p>
        </div>
      </div>
    </div>{/* <!-- End Service Item --> */}

    <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="400">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-binoculars"></i></div>
        <div>
          <h4 class="title"><a href="services-details.html" class="stretched-link">Research & Surveillance</a></h4>
          <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>
    </div>{/* <!-- End Service Item --> */}

    {/* <!-- <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="500">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-brightness-high"></i></div>
        <div>
          <h4 class="title"><a href="services-details.html" class="stretched-link">Research & Surveillance</a></h4>
          <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
        </div>
      </div>
    </div> --> */}
    {/* {/* <!-- End Service Item --> */} 

    {/* <!-- <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="600">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-calendar4-week"></i></div>
        <div>
          <h4 class="title"><a href="services-details.html" class="stretched-link">Eiusmod Tempor</a></h4>
          <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
        </div>
      </div>
    </div> --> */}
    {/* {/* <!-- End Service Item --> */} 

  </div>

</div>

</section>
{/* nd Services Section */}

</main>
  </>
  )
});