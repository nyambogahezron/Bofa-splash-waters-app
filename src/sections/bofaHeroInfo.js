import heroImgInfo from '../assets/images/bofa-2.png';

const BofaHeroInfo = () => {
  return (
    <section className='hero-info container bg-black'>
      <div className='grid grid-cols-2 gap-2'>
        <div className='left ml-28 p-6'>
          <img className='h-[500px] ' src={heroImgInfo} alt='bofa-hero' />
        </div>
        <div className='right flex flex-col gap-8 relative w-full h-full justify-center align-center'>
          <h2 className='title mt--30'>
            Bofa splash waters{' '}
            <span className='title-s shadow-md'>Premium Water</span>
          </h2>
          <p className='w-[75%] text-sm font-normal leading-8 text-white'>
            If you’re looking for the some of best home water delivery in
            Kilifi, look no further than Bofa Splash Waters! We provide the
            homeowners of Kilifi with delicious, clean drinking water right at
            their doorstep. We offer a number of different options for your home
            water delivery in Kilifi County.
          </p>

          <div className='flex flex-row gap-10 mt-8'>
            <button className='btn btn-primary hover:bg-clr-red'>
              View Shop
            </button>
            <button className='btn btn-primary hover:bg-clr-red'>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BofaHeroInfo;
