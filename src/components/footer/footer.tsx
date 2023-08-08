import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    // <!-- ======= Footer ======= -->
    <>
      {/* // <!-- ======= Footer ======= --> */}
      <footer id="footer" class="footer">
        <div class="container footer-top">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-about">
              <a href="index.html" class="logo d-flex align-items-center">
                <span>One Health Society</span>
              </a>
              <p>Join us in influencing and Implementing Sustainable Actions on Fighting Antimicrobial Resistance</p>
              <div class="social-links d-flex mt-4">
                <a href="https://twitter.com/Onehealth_/status/1468553775480725509?s=20%20"><i class="bi bi-twitter"></i></a>
                <a href="https://web.facebook.com/onehealthsociety/"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/invites/contact/?i=1nch5zqpmvlfb&utm_content=1v0ei7h"><i class="bi bi-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UC9a7ecFZUz3T-SuirBVOhaA"><i class="bi bi-youtube"></i></a>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BneAfTx0cTA6JMmMjugH%2BDA%3D%3D"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="/wedo">What we do</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>What we do</h4>
              <ul>
                <li><a href="#">Disease Control & Prevention</a></li>
                <li><a href="#">Antimicrobial Resistence</a></li>
                <li><a href="#">Rational use of Medicine</a></li>
                <li><a href="#">Research & Surveillance</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>P.o.box 90372
                Temeke, Mwapemba street</p>
              <p>Dar es salaam</p>
              <p>Tanzania</p>
              <p class="mt-4"><strong>Phone:</strong> <span>+255710896052</span></p>
              <p><strong>Email:</strong> <span>ps@ohs-health.org</span></p>
            </div>

          </div>
        </div>

        <div class="container copyright text-center mt-4">
          <p>&copy; <span>Copyright</span> <strong class="px-1">One Health Society</strong> <span>All Rights Reserved</span></p>
          <div class="credits">
            Designed by <a href="https://VijanaTech.com/">VijanaTech</a>
          </div>
        </div>

      </footer>
      {/* // <!-- End Footer --> */}
      {/* // <!-- Scroll Top Button --> */}
      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
      {/* // <!-- Preloader --> */}
      <div id="preloader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* // <!-- Vendor JS Files --> */}
      <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="/vendor/purecounter/purecounter_vanilla.js">
      </script>
      <script src="/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="/vendor/aos/aos.js"></script>
      <script src="/vendor/php-email-form/validate.js"></script>
      {/* // <!-- Template Main JS File --> */}
      <script src="/js/main.js"></script></>
  );
});
