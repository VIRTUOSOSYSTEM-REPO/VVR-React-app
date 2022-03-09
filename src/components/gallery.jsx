import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='gallery' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our <span className="text-orange">Gallery</span></h2>
          <p>
    We are undertaking all Home Care services as per customer expects...
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
