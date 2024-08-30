import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function CardsPage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">All</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/gg.jpg" className="card-img-top" width={1000} height={1000} alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Top scorer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card s content.
              </p>
              <a href="#" className="btn btn-primary">Click</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/jo.jpg" className="card-img-top" width={1000} height={1000} alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">
              Premier league table</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card s content.
              </p>
              <a href="#" className="btn btn-primary">Click</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/kok.png" className="card-img-top" width={1000} height={1000} alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Premier league hall of fame</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card s content.
              </p>
              <a href="#" className="btn btn-primary">Click</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
