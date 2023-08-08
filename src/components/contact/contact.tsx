import { component$, useStore } from "@builder.io/qwik";
import { Alert } from "../alert/alert";
import API from "~/business/api";


export const Contact = component$(() => {
    const store = useStore({
        showLoader: false,
        response_error: {
            value: 'Failed to send message',
            color: 'alert alert-danger',
            style: ''
        },
        response_success: {
            value: 'Message sent successfully',
            color: 'alert alert-success',
            style: ''
        },
        default_response: {
            value: '',
            color: '',
            style: 'display: none'
        },
        response: {
            value: '',
            color: '',
            style: 'display: none'
        },
        message: {
            service_id: 'service_i3c391e',
            template_id: 'template_rsw31wh',
            user_id: '-s6-Kbh5QA1q6DwpV', template_params: { userName: "", email: "", subject: "", message: "" }
        },
    });
    const SubmitButton = component$(() => {
        if (store.showLoader) {
            return (
                <button type="submit">
                    <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
                </button>
            );
        } else {
            return (
                <>
                    <button type="submit" onClick$={
                        (e) => {
                            if (store.message.template_params.userName == "" || store.message.template_params.email == "" || store.message.template_params.subject == "" || store.message.template_params.message == "") {
                                console.log("Please fill all the fields");
                            } else {
                                console.log(e);
                                store.showLoader = true;
                                API.sendEmail(store);
                            }
                        }
                    }>Send Message</button>
                </>
            );
        }
    });

    return (
        <>
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
                <form class="php-email-form" data-aos="fade-up" data-aos-delay="200">
                  <div class="row gy-4">
                    <div class="col-md-6">
                      <input type="text" name="name" class="form-control" placeholder="Your Name" required
                      value={store.message.template_params.userName}
                      onChange$={(e) => store.message.template_params.userName = (e.target as HTMLInputElement).value}
                      ></input>
                    </div>

                    <div class="col-md-6 ">
                      <input type="email" class="form-control" name="email" placeholder="Your Email" required
                      value={store.message.template_params.email}
                      onChange$={(e) => store.message.template_params.email = (e.target as HTMLInputElement).value}
                      ></input>
                    </div>

                    <div class="col-md-12">
                      <input type="text" class="form-control" name="subject" placeholder="Subject" required
                      value={store.message.template_params.subject}
                      onChange$={(e) => store.message.template_params.subject = (e.target as HTMLInputElement).value}
                      ></input>
                    </div>

                    <div class="col-md-12">
                      <textarea class="form-control" name="message" rows={6} placeholder="Message" required
                      value={store.message.template_params.message}
                      onChange$={(e) => store.message.template_params.message = (e.target as unknown as HTMLInputElement).value}
                      ></textarea>
                    </div>

                    <div class="col-md-12 text-center">
                      <Alert value={store.response.value} color={store.response.color} style={store.response.style} />
                      <SubmitButton />
                    </div>

                  </div>
                </form>
              </div>
              {/* <!-- End Contact Form --> */}

            </div>

          </div>

        </section>
        {/* <!-- End Contact Section --> */}
        </>
    );
    // return (
    //     <>
    //         {/* <!-- Contact Start --> */}
    //         <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" id="contact-us">
    //             <div class="container py-5">
    //                 <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
    //                     <h5 class="fw-bold text-primary text-uppercase">Contact Us</h5>
    //                     <h1 class="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
    //                 </div>
    //                 <div class="row g-5 mb-5">
    //                     <div class="col-lg-4">
    //                         <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
    //                             <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
    //                                 <i class="fa fa-phone-alt text-white"></i>
    //                             </div>
    //                             <div class="ps-4">
    //                                 <h5 class="mb-2">Call to ask any question</h5>
    //                                 <h4 class="text-primary mb-0">+255 734 377 153</h4>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div class="col-lg-4">
    //                         <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
    //                             <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
    //                                 <i class="fa fa-envelope-open text-white"></i>
    //                             </div>
    //                             <div class="ps-4">
    //                                 <h5 class="mb-2">Email to get free quote</h5>
    //                                 <h4 class="text-primary mb-0">info@vijanatech.com</h4>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div class="col-lg-4">
    //                         <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
    //                             <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
    //                                 <i class="fa fa-map-marker-alt text-white"></i>
    //                             </div>
    //                             <div class="ps-4">
    //                                 <h5 class="mb-2">Visit our office</h5>
    //                                 <h4 class="text-primary mb-0">PPT Media House, Dar es Salaam</h4>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="row g-5">
    //                     <div class="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
    //                         <form>
    //                             <div class="row g-3">
    //                                 <div class="col-md-6" hidden>
    //                                     <input type="text" class="form-control border-0 bg-light px-4" placeholder="Your name" style="height: 55px;"
    //                                         value={store.message.template_params.userName}
    //                                         onChange$={(e) => store.message.template_params.userName = (e.target as HTMLInputElement).value}
    //                                     ></input>
    //                                 </div>
    //                                 <div class="col-md-6">
    //                                     <input type="text" class="form-control border-0 bg-light px-4" placeholder="Your name" style="height: 55px;"
    //                                         value={store.message.template_params.userName}
    //                                         onChange$={(e) => store.message.template_params.userName = (e.target as HTMLInputElement).value}
    //                                         required ></input>
    //                                 </div>
    //                                 <div class="col-md-6">
    //                                     <input type="email" class="form-control border-0 bg-light px-4" placeholder="Your Email" style="height: 55px;"
    //                                         value={store.message.template_params.email}
    //                                         onChange$={(e) => store.message.template_params.email = (e.target as HTMLInputElement).value}
    //                                         required></input>
    //                                 </div>
    //                                 <div class="col-12">
    //                                     <input type="text" class="form-control border-0 bg-light px-4" placeholder="Subject" style="height: 55px;"
    //                                         value={store.message.template_params.subject}
    //                                         onChange$={(e) => store.message.template_params.subject = (e.target as HTMLInputElement).value}
    //                                         required></input>
    //                                 </div>
    //                                 <div class="col-12">
    //                                     <textarea class="form-control border-0 bg-light px-4 py-3" rows={4} placeholder="Message"
    //                                         value={store.message.template_params.message}
    //                                         onChange$={(e) => store.message.template_params.message = (e.target as unknown as HTMLInputElement).value}
    //                                         required></textarea>
    //                                 </div>
    //                                 <div class="col-12">
    //                                     <Alert value={store.response.value} color={store.response.color} style={store.response.style} />
    //                                     <SubmitButton />
    //                                 </div>
    //                             </div>
    //                         </form>
    //                     </div>
    //                     <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
    //                         <iframe class="position-relative rounded w-100 h-100"
    //                             src="https://maps.google.com/maps?q=PPT%20Media%20House,%20Dar%20es%20Salaam&t=&z=13&ie=UTF8&iwloc=&output=embed"
    //                             frameBorder={0} style="min-height: 350px; border:0;" allowFullScreen={false} aria-hidden="false"
    //                             tabIndex={0}></iframe>

    //                         {/* <!-- <div class="mapouter">
    //                         <div class="gmap_canvas">
    //                             <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=PPT%20Media%20House,%20Dar%20es%20Salaam&t=&z=13&ie=UTF8&iwloc=&output=embed" 
    //                             frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    //                             <a href="https://2piratebay.org"></a><br>
    //                             <style>.mapouter{position:relative;text-align:right;min-height:350px;width:600px;}</style>
    //                             <a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas 
    //                             {overflow:hidden;background:none!important;height:500px;width:600px;}</style>
    //                             </div>
    //                         </div> --> */}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <!-- Contact End --> */}
    //     </>
    // );
});
