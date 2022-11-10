const {
  BrowserRouter,
  Switch,
  Route,
  Link
} = ReactRouterDOM;

function App(data) {
  // block = data['team-1667249602880'];
  // console.log(data)
  return (
    <BrowserRouter>
      <>
        {/* <nav>
          <ul>
            <li><Link to="/">Startsida</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav> */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home data={data} />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}

function Home(data) {
  const blockArray = [];
  for (const [key, value] of Object.entries(data)) {
    for (const [key1, value1] of Object.entries(value)) {
      const block = value1.data;
      block._id = key1;
      block._type = value1.template_id;
      if (value1.template_id === 'navigation') {
        blockArray.push(<NavigationReact {...block} />)
      }
      if (value1.template_id === 'header') {
        blockArray.push(<HeaderReact {...block} />)
      }
      if (value1.template_id === 'team') {
        blockArray.push(<TeamReact {...block} />)
      }
    };
  };
  return blockArray;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
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
      // const merge = Object.assign(configSettings.blocks, pages[0].blocks);
      const blocks = {};
      // console.log(pages);
      // console.log(configSettings);
      for (const [key, value] of Object.entries(pages[0].blocks)) {
        if (configSettings.blocks[value.template_id]) {
          blocks[key] = value;
          blocks[key].data = Object.assign(configSettings.blocks[value.template_id], value.data);
          blocks[key].id = key;
          blocks[key]._type = blocks[key].template_id;
        }
      };
      data = blocks;
      // console.log(data);
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
// Template name 
// This is for one page
init('klar', 'agency');