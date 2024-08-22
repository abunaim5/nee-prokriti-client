import Marquee from "react-fast-marquee";

const offers = [
    'FREE DELIVERY FOR ODER OVER $120',
    'END YEAR SALE UP TO 50% OFF',
    'SIGN UP AND GET 10% OFF YOUR FIRST ORDER',
    'FREE DELIVERY FOR ODER OVER $120',
    'END YEAR SALE UP TO 50% OFF',
    'SIGN UP AND GET 10% OFF YOUR FIRST ORDER'
];

const Offers = () => {
    return (
        <Marquee className='bg-[#131728] text-white py-7'>
            <ul className='flex items-center justify-between gap-[44px] list-disc list-outside'>
                {
                    offers.map((offer, idx) => <li key={idx} className='pl-[23px]'>{offer}</li>)
                }
            </ul>
        </Marquee>
    );
};

export default Offers;