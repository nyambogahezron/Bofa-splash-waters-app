import heroImg from '../assets/images/bofa-1.jpg';
import cardsData from './data.js';

const waterComposition = () => {
  return (
    <section className='container mx-8 w-fll px-8' id='water_composition'>
      <h2 className='uppercase text-2xl title my-24 w-[400px] '>
        water composition
        <span className='title-s shadow-md '>Premium Water</span>
      </h2>
      <div className='wrapper flex flex-row w-full gap-4'>
        <div className='left basis-1/4'>
          <img className='h-full' src={heroImg} alt='' />
        </div>
        <div className='flex flex-row flex-wrap w-full gap-2 p-4'>
          {cardsData.map((item) => {
            const { id, element, quantity, body, extendClasses } = item;

            return (
              <div key={id} className={`card ${extendClasses}`}>
                <h2 className='text-lg'>{element}</h2>
                <span className='text-sm'>
                  4.9 <small>{quantity}</small>
                </span>
                <p className='text-sm'>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default waterComposition;
