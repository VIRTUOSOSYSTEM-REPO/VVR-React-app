// import img1 from "../../src/cctv/cctv.jpg";
export const headerData = (props) => {
    return (
        <div className='intQro'>
            {/* <img src={img1} alt="img1"/> */}
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h2 className="text-white pull-left">
                  {props.data ? props.data.title : 'Loading'}
                </h2>
                <h1 className="text-rubyred">
                   {props.data ? props.data.title1 : 'Loading'}
                </h1>
                <h2 className="text-white pull-right">
                {props.data ? props.data.title2 : 'Loading'}
                </h2>
                <div className="pt-3">
                <p className="pt-2">{props.data ? props.data.paragraph : 'Loading'}</p>
                </div>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
        </div>
    )

}
