export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/service/HM.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{paddingTop: "20px"}}>About <span className="text-orange">Us</span></h2>
              <h4 className="text-orange">{props.data ? props.data.title : "loading..."}</h4><p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* <p>{props.data ? props.data.paragraph1 : "loading..."}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
