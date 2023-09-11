
import ImgLogo from '~/media/img/logo.png?jsx';import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
    {/* // <!-- ======= Header ======= --> */}
  <header id="header" class="header sticky-top d-flex align-items-center">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        <ImgLogo alt=""/>
        {/* <!-- <h1>One Health Society</h1> --> */}
        {/* <!-- <span>.</span> --> */}
      </a>

      {/* <!-- Nav Menu --> */}
      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="/#hero">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/wedo">What we do</a></li>
          <li><a href="/#portfolio">Portfolio</a></li>
          <li><a href="/#team">Team</a></li>
          {/* <li><a href="javascript:void(0)">Blog</a></li> */}
          <li class="dropdown has-dropdown"><a href="#"><span>Resources & Tools</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="dd-box-shadow">
              <li><a href="/publication">Publication</a></li>
              <li><a href="javascript:void(0)">Reports</a></li>
              <li><a href="javascript:void(0)">Toolkits</a></li>
              <li><a href="/amr">AMR Resource Bank</a></li>
              <li><a href="/ntds">NTDs Resource Bank</a></li>
            </ul>
          </li>
          <li><a href="/#contact">Contact</a></li>
          <li><a href="/donate">Donate</a></li>
        </ul>

        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
      {/* <!-- End Nav Menu --> */}

      <a class="btn-getstarted" href="/sms">Push sms</a>

    </div>
  </header>
  {/* <!-- End Header --> */}
  </>
  );
});
