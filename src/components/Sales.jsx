export const SALES = (props) => {
    return (
      <div id='team' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>We are Providing <span className="text-orange">All Appliances Services</span></h2>
            <p>
            Satisfaction is our motto......
            </p>
          </div>
          <div id='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-3 col-sm-3 team'>
                    <div className='thumbnail'>
                      {' '}
                      <img src={d.img} alt='...' className='team-img' />
                      <div className='caption'>
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }
  