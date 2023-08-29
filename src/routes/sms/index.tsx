import { component$, useStore } from '@builder.io/qwik';
import API from '~/business/api';
import { Alert } from '~/components/alert/alert';
export default component$(() => {
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
    sms_success_response: {
      value: 'SMS sent successfully',
      color: 'alert alert-success',
      style: ''
    },
    sms_error_response: {
      value: 'Error sending SMS',
      color: 'alert alert-danger',
      style: ''
    },
    data: {
      name: "",
      number: "",
      gender: "",
      region: "",
      district: "",
      language: ""
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
            () => {
              if (store.data.name == "" || store.data.number == "" || store.data.gender == "" || store.data.region == "" || store.data.district == "" || store.data.language == "") {
                store.response_error.value = "Please fill in all fields"
                store.response = store.response_error
                setTimeout(() => {
                  store.response = store.default_response
                }, 3000)
              } else {
                store.showLoader = true;
                API.createPushSms(store, store.data);
              }
            }
          }>Send Message</button>
        </>
      );
    }
  });
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
                      <input type="text" name="name" class="form-control" placeholder="Full Name" required
                        value={store.data.name}
                        onChange$={(e) => store.data.name = (e.target as HTMLInputElement).value}

                      ></input>
                    </div>

                    <div class="col-md-12 ">
                      <input style="text-color: #bbb;" type="tel" class="form-control" name="email" placeholder="Phone Number" required
                        value={store.data.number}
                        onChange$={(e) => store.data.number = (e.target as HTMLInputElement).value}

                      ></input>
                    </div>

                    <div class="col-md-12 ">
                      <select style="color: #bbb;" class="form-select" aria-label="Default select example"
                        value={store.data.gender}
                        onChange$={(e) => store.data.gender = (e.target as unknown as HTMLInputElement).value}

                      >
                        <option selected>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div class="col-md-12">
                      <input type="text" class="form-control" name="subject" placeholder="Region" required
                        value={store.data.region}
                        onChange$={(e) => store.data.region = (e.target as HTMLInputElement).value}

                      ></input>
                    </div>

                    <div class="col-md-12">
                      <input type="text" name="name" class="form-control" placeholder="District" required
                        value={store.data.district}
                        onChange$={(e) => store.data.district = (e.target as HTMLInputElement).value}

                      ></input>
                    </div>

                    <div class="col-md-12 ">
                      <select style="color: #bbb;" class="form-select" aria-label="Default select example"
                        value={store.data.language}
                        onChange$={(e) => store.data.language = (e.target as unknown as HTMLInputElement).value}
                      >
                        <option selected>Language</option>
                        <option value="English">English</option>
                        <option value="Swahili">Swahili</option>
                        <option value="Sukuma">Sukuma</option>
                        <option value="Chaga">Chaga</option>
                        <option value="Makonde">Makonde</option>
                        <option value="Maasai">Maasai</option>
                      </select>
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

      </main>
    </>
  )
});