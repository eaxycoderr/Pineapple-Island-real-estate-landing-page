import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Real Estate Landing Page Created With Next Js and React Js"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;800&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: themeInitializerScript,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// This function needs to be a String
const themeInitializerScript = `(function() {
	${setInitialColorMode.toString ()}
	setInitialColorMode();
})()
`;

function setInitialColorMode () {
  // Check initial color preference
  function getInitialColorMode () {
    const persistedPreferenceMode = window.localStorage.getItem ('theme');
    const hasPersistedPreference = typeof persistedPreferenceMode === 'string';

    if (hasPersistedPreference) {
      return persistedPreferenceMode;
    }

    // Check the current preference
    const preference = window.matchMedia ('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof preference.matches === 'boolean';

    if (hasMediaQueryPreference) {
      return preference.matches ? 'dark' : 'light';
    }

    return 'light';
  }

  const currentColorMode = getInitialColorMode ();
  const element = document.documentElement;
  element.style.setProperty ('--initial-color-mode', currentColorMode);

  // If darkmode apply darkmode
  if (currentColorMode === 'dark')
    document.documentElement.setAttribute ('data-theme', 'dark');
}

export default MyDocument;
