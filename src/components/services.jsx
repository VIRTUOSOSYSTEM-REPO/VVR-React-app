export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our <span className="text-orange1">Services</span></h2>
          <p>
          “Always deliver more than expected.”
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  
                  <img className="img1" src={d.img} alt='...' />
                  {/* <i className={d.icon}></i> */}
                  <div className='service-desc'>
                    <h3 className="text-bold" style={{ color: "rgb(233, 98, 8)" }}>{d.name}</h3>
                    <p style={{ color: "rgb(255, 255, 255)" }}>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
