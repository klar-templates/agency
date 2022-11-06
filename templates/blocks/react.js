const fooaSectionTest = document.createElement('section');
fooaSectionTest.id = '{{block_id}}';
fooaSectionTest.classList.add('{{template_id}}');
fooaSectionTest.classList.add('block');
parent.frames['clientframe'].contentWindow.document.querySelector('.full').appendChild(fooaSectionTest);
function KlarBlock({heading, subHeading, image, team, text}) {
  return (
    <Block>
      <Intro heading={heading} subHeading={subHeading} />
      <Members team={team} foo="dfsadf" />
      <Description text={text} />
    </Block>
  );
}
function Block({children}) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
function Intro({heading, subHeading}) {
  return (
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading">{heading}</h2>
        <h3 className="section-subheading text-muted">{subHeading}</h3>
      </div>
    </div>
  );
}
function Members({team}) {
  return (
    <div className="row clearfix" data-field-array="team">
    { team.map((member, i) => {
      return <TeamMember
          image={member.image}
          name={member.heading}
          position={member.text}
          key={i}
      />
      })
    }
    </div>
  );
}
function TeamMember({name, position, image, socialLinks}) {
  return (
    <div className="col-sm-4">
      <div className="team-member" data-field-array-item="">
        <img src={image} className="img-responsive img-circle" no-data-placement="top" no-data-inset="true" alt={name} />
        <h4>{name}</h4>
        <p>{position}</p>
        <ul className="list-inline social-buttons">
          <li>
            <a href="#youraccount"><i className="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#youraccount"><i className="fa fa-facebook"></i></a>
          </li>

          <li>
            <a href="#youraccount"><i className="fa fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
function Description({text}) {
  return (
    <div className="row">
      <div className="col-lg-8 col-lg-offset-2 text-center">
        <p className="large">{text}</p>
      </div>
    </div>
  );
}

if (typeof parent.frames['clientframe'].contentWindow.ReactDOM === 'undefined') {
  setTimeout(()=>parent.frames['clientframe'].contentWindow.ReactDOM.render( /*#__PURE__*/React.createElement(KlarBlock, parent.window.klar.blocks.get('{{template_id}}', '{{block_id}}')), parent.frames['clientframe'].contentWindow.document.querySelector('#{{block_id}}')), 300);
} else {
  console.log(parent.window.klar.blocks.get('{{template_id}}', '{{block_id}}'));
  parent.frames['clientframe'].contentWindow.ReactDOM.render( /*#__PURE__*/React.createElement(KlarBlock, parent.window.klar.blocks.get('{{template_id}}', '{{block_id}}')), parent.frames['clientframe'].contentWindow.document.querySelector('#{{block_id}}'));
}