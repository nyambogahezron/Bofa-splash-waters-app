import Navbar from '../components/Navbar';
import heroImg from '../assets/images/bofa-2.png';

const Home = () => {
  return (
    <section id='home'>
      <div>
        <Navbar />
      </div>
      <main className='relative container'>
        <div className='hero'>
          <div className='left'>
            <p className='hero-text'>
              {' '}
              <span>Pure Water</span> <span>Delivery Service</span>{' '}
            </p>
            <p className='hero-text-p no-underline whitespace-normal w-300 text-left leading-9 font-bold text-base mb-8 text-text-blue-2 animate__backInRight '>
              We now deliver different types of bottled water. To drink the best
              water please contact us and give us an order and take safe and
              sound water for you.
            </p>

            <span className='animate__slideOutUp'>
              <button className='btn btn-primary'>Contact Us</button>
            </span>
          </div>

          <div className='right'>
            <img src={heroImg} alt='hero' />
          </div>
        </div>
      </main>
    </section>
  );
};
export default Home;
