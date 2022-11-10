function Layout(data) {
  head({title: klar.pageSettings.title, description: klar.pageSettings.description});
  let headerBlock;
  let footerBlock;
  for (const [key, value] of Object.entries(klar.blocks)) {
    if (value.template_id === 'navigation') {
      headerBlock = value;
    }
    if (value.template_id === 'footer') {
      footerBlock = value;
    }
  };
  return (<>
    <NavigationReact {...headerBlock} />
    {data.children}
    <FooterReact {...footerBlock} />
  </>);
}

function Page(data) {
  createContext(data);
  console.log(data);
  const blockArray = [];
  for (const [key, value] of Object.entries(klar.blocks)) {
    const block = value;
    if (block.template_id === 'header') {
      blockArray.push(<HeaderReact {...block} />)
    }
    if (block.template_id === 'team') {
      blockArray.push(<TeamReact {...block} />)
    }
  };
  return <Layout {...data}>{blockArray}</Layout>
}

function App(data) {
  return (
    <BrowserRouter>
      <Switch>
        {data.pages.map(page => {
        return <Route path="/">
          <Page {...data} />
        </Route>
        })}
      </Switch>
    </BrowserRouter>
  );
}

function head(data) {
  document.title = data.title;
  document.description = data.description;
}

function createContext(data) {
  const loc = useLocation();
  const pathname = loc.pathname;
  let currentPage;
  if (pathname === '/templates/page-react.html' || pathname === '/') {
    currentPage = data.pages.find(page => page._startpage === true);
  } else {
    currentPage = data.pages[0];
  }
  const pageSettings = currentPage.settings;
  const blocks = data.pages[0].blocks;
  window.klar = {
    location: loc,
    data,
    pathname,
    currentPage,
    pageSettings,
    blocks
  };
}

function startApp(data) {
  ReactDOM.render(React.createElement(App, data), document.getElementById('root'));
}

function init(siteName, templateName) {
  let data;
  if (!localStorage.getItem('data')) {
    const siteDataPromise = new Promise((resolve, reject) => {
      fetch(`https://raw.githubusercontent.com/klar-sites/${siteName}/master/data.json`)
        .then((response) => response.json())
        .then((data) => resolve(data));
      });
    const templateConfigPromise = new Promise((resolve, reject) => {
      fetch(`https://raw.githubusercontent.com/klar-templates/${templateName}/master/config.json`)
        .then((response) => response.json())
        .then((data) => resolve(data));
      });
    Promise.all([siteDataPromise, templateConfigPromise]).then((values) => {
      const siteData = values[0];
      const templateConfig = values[1];
      const pages = siteData.pages;
      const configSettings = templateConfig.settings;
      const blocks = {};
      for (const [key, value] of Object.entries(pages[0].blocks)) {
        if (configSettings.blocks[value.template_id]) {
          blocks[key] = Object.assign(configSettings.blocks[value.template_id], value);
          blocks[key].data = Object.assign(configSettings.blocks[value.template_id], value.data);
          blocks[key].id = key;
          blocks[key]._id = key;
          blocks[key]._type = blocks[key].template_id;
        }
      };
      const pagesArr = [];
      const page = {
        _id: 'startsida-4565432156',
        _type: 'startsida',
        _startpage: true,
        _menu_item_name: 'Startsida',
        _meta: {
          position: 0
        },
        blocks,
        settings: {
          title: 'Startsida',
          description: 'En beskrivning'
        }
      };
      pagesArr.push(page)
      data = {
        pages: pagesArr,
        theme: templateConfig.settings.theme.presets.default
      }
      data;
      // localStorage.setItem('data', JSON.stringify(data));
      startApp(data);
    });
  } else {
    console.log('what');
    data = JSON.parse(localStorage.getItem('data'));
    startApp(data);
  }
}

// Site name in Klar
// Template name in Klar
// This is for one page
init('klar', 'agency');

