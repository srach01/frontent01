import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function CardsPage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">All</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/card1.png" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">PRO EVOLUTION SOCCER 2020 PS4</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card s content.
              </p>
              <a href="#" className="btn btn-primary">Buy</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/card2.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">
              SUPER VACATION PACK XVII PS4</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card s content.
              </p>
              <a href="#" className="btn btn-primary">Buy</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/card3.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">MEGA MAN X LEGACY COLLECTION 1 MAS 2 PS4</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card s content.
              </p>
              <a href="#" className="btn btn-primary">Buy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
