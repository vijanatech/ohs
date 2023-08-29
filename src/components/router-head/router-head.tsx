import { component$ } from "@builder.io/qwik";
import { useDocumentHead} from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  // const loc = useLocation();

  return (
    <>
    
      <meta charSet="utf-8"></meta>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>

  <title>One Health Society</title>
  <meta content="" name="description"></meta>
  <meta content="" name="keywords"></meta>

  {/* ? Favicons --> */}
  <link href="/img/favicon.png" rel="icon"></link>
  <link href="img/apple-touch-icon.png" rel="apple-touch-icon"></link>

  {/* ? Fonts --> */}
  <link href="https://fonts.googleapis.com" rel="preconnect"></link>
  <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin=""></link>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"></link>

  {/* ? Vendor CSS Files --> */}
  <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
  <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
  <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
  <link href="/vendor/aos/aos.css" rel="stylesheet"/>

  {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
