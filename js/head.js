let headLinks = `
  <meta charset="utf-8" />
  <title>Leo - Product Designer, Design Systems specialist</title>
  <meta name="description"
    content="Brazilian product designer, based in the Netherlands. Currently designing digital products at Hexaware." />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:title" content="Leonardo Almeida, a product designer" />
  <meta property="og:type" content="" />
  <meta property="og:url" content="https://leleo.com.br" />
  <meta property="og:image" content="" />

  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#ffffff" />
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="/css/normalize.css" />
  <link rel="stylesheet" href="/css/main.css" />

  <link rel="stylesheet" href="https://use.typekit.net/jpu5uyd.css" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Round" rel="stylesheet" />
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZRXHWCQ6VH"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-ZRXHWCQ6VH");
  </script>

  <!-- Google Tag Manager -->
  <script>(function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-WNL9DB2L');</script>
  <!-- End Google Tag Manager -->
   `;


document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', headLinks);