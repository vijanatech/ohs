import { component$, useStore } from "@builder.io/qwik";
import { Alert } from "../alert/alert";
import API from "~/business/api";


export const Contact = component$(() => {
  const store = useStore({
    showLoader: false,
    data: {
      userName: "",
      email: "",
      subject: "",
      message: ""
    },
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
    }
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
            () => {
              if (store.data.userName == "" || store.data.email == "" || store.data.subject == "" || store.data.message == "") {
                console.log("Please fill all the fields");
              } else {
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
                      value={store.data.userName}
                      onChange$={(e) => store.data.userName = (e.target as HTMLInputElement).value}
                    ></input>
                  </div>

                  <div class="col-md-6 ">
                    <input type="email" class="form-control" name="email" placeholder="Your Email" required
                      value={store.data.email}
                      onChange$={(e) => store.data.email = (e.target as HTMLInputElement).value}
                    ></input>
                  </div>

                  <div class="col-md-12">
                    <input type="text" class="form-control" name="subject" placeholder="Subject" required
                      value={store.data.subject}
                      onChange$={(e) => store.data.subject = (e.target as HTMLInputElement).value}
                    ></input>
                  </div>

                  <div class="col-md-12">
                    <textarea class="form-control" name="message" rows={6} placeholder="Message" required
                      value={store.data.message}
                      onChange$={(e) => store.data.message = (e.target as unknown as HTMLInputElement).value}
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
});
