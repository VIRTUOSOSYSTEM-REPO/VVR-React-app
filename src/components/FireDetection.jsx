export const FIREDETECTION = (props) => {
    return (
      <div id='team' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>We are Providing <span className="text-orange">Convertable Fridge</span></h2>
            <p>
                Feel Like Island......
            </p>
          </div>
          <div id='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-4 col-sm-4 team'>
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
  