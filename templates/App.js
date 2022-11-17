const Components = {
  Navigation: NavigationReact,
  Header: HeaderReact,
  Team: TeamReact,
  Footer: FooterReact
}

function App(data) {
  return (
    <BrowserRouter>
      <Switch>
        {data.pages.map(page => {
          return <>
          <Route path={page._path}>
            <Page {...data} path={page._path} foo="test" />
          </Route>
          <Route path="/">
            <Page {...data} path="/" />
          </Route>
          </>
        })}
      </Switch>
    </BrowserRouter>
  );
}

function Layout(data) {
  head({title: klar.pageSettings.title, description: klar.pageSettings.description});
  let headerBlock;
  let footerBlock;
  const blocksToRender = [];
  data.children.forEach(block => {
    if (block.type.name === 'NavigationReact') {
      headerBlock = block.props;
      return;
    }
    if (block.type.name === 'FooterReact') {
      footerBlock = block.props;
      return;
    }
    blocksToRender.push(block);
  });
  return (<>
    <NavigationReact {...headerBlock} />
    {blocksToRender}
    <FooterReact {...footerBlock} />
  </>);
}

function Page(data) {
  console.log(data.foo)
  createContext(data);
  const blockArray = [];
  for (const [key, value] of Object.entries(klar.currentPage.blocks)) {
    const block = value;
    let componentName = block.template_id;
    componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const DynamicComponent = Components[componentName];
    if (DynamicComponent) {
      blockArray.push(<DynamicComponent {...block} />)
    }
  };
  return <Layout {...data}>{blockArray}</Layout>
}

function head(data) {
  document.title = data.title;
  document.description = data.description;
}

function createContext(data) {
  console.log(data)
  const loc = useLocation();
  const pathname = loc.pathname;
  let currentPage;
  if (pathname === '/templates/page-react.html' || pathname === '/' || pathname === '/startsida') {
    currentPage = data.pages.find(page => page.startpage === true);
  } else {
    currentPage = data.pages.find(page => page._path === pathname);
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

function init(siteName) {
  if (!localStorage.getItem('data')) {
    async function data() {
      const response = await fetch(
        `https://raw.githubusercontent.com/klar-sites/${siteName}/master/data.json`);
      return response.json();
    }
    data()
      .then((data) => {
        // localStorage.setItem('data', JSON.stringify(data));
        startApp(data);
      });
  } else {
    console.log('what');
    data = JSON.parse(localStorage.getItem('data'));
    startApp(data);
  }
}

// This is for one page website
// Param: Site name in Klar
init('agency');

