function KlarBlock(props) {
  const {heading, subHeading, image, team, text} = props.block;
  return (
    <Block id={props.block_id} templateId={props.template_id}>
      <Intro heading={heading} subHeading={subHeading} />
      <Members team={team} />
      <Description text={text} />
    </Block>
  );
}
function Block({id, templateId, children}) {
  const style = `
    <style>
      body {
        background-color: red;
      }
    </style>
  `;
  return (
    <section id={id} className={`${templateId} block`}>
      <div className="container">
        {children}
      </div>
      <div dangerouslySetInnerHTML={style} />
    </section>
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
  if (!team) {
    return false;
  }

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