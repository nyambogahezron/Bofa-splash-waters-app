import DeriveryImg from "../assets/images/bofa-3.png";

const FastDelivery = () => {
	return (
		<section className="container py-24" id="fast_delivery">
			<h2 className="title w-[300px] mb-8 mr-0">Fast Delivery Service</h2>

			<div className="wrapper flex flex-row gap-4 md:flex-wrap mx-20 p-6 bg-[#FFFFFF] shadow-custom justify-center align-center">
				<div className="left overflow-hidden flex justify-center align-center basis-1/2 h-full my-auto">
					<img
						className="h-[300px]"
						src={DeriveryImg}
						alt="Delivery"
					/>
				</div>
				<div className="flex flex-col gap-8 basis-1/2">
					<p className="text-base font-medium text-crl-subtext leading-8 mt-4">
						There’s no other water like Bofa Splash Waters. It’s
						rich in minerals and boasts a crisp, clean taste. The
						Bofa Splash Waters is also sodium free and naturally
						alkaline with a 7.8 pH – perfect for today’s acidic
						diet. Ready for the Kenya’s best-tasting water? Try home
						or office delivery for the ultimate convenience.
					</p>
					<div className="border-2 shadow-custom">
						<iframe title='bofa map'
							className="w-full"
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1019447.610002805!2d39.896636!3d-3.5372690000000007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183fdd0b09499467%3A0xf32195f25a65f294!2sKilifi!5e0!3m2!1sen!2ske!4v1707820334998!5m2!1sen!2ske"
							height={250}
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>

					<span>
						<button className="btn btn-primary hover:bg-blue">
							View Shop
						</button>
					</span>
				</div>
			</div>
		</section>
	);
};

export default FastDelivery;
