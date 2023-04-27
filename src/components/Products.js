import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'
import product4 from '../images/product4.png'

function Products() {

    return(
	<>
        <div className="font-textF">

	{/* start of header*/}

	<div className='flex flex-col -mt-24 py-56 px-56 bg-productsHeaderBg bg-cover'>
	
	<div className='flex justify-center'>
	<h1 className='text-white text-5xl tracking-wide  font-semibold'>
	Discover<span className='text-blue-500'> our products</span>
	</h1>
	</div>
	<div className='mt-6'>
	<p className='text-white text-center text-xl px-44'> 
	 We put intention into every product we make with the balance of science and nature.
	</p>
	</div>

	</div>

	{/* end of header*/}
	{/* start of second section */}

	<div className='flex flex-row justify-between pb-12 pt-8 px-36'>
	
	<div className='border text-black font-semibold rounded-lg py-2 px-4 bg-white focus:bg-blue-500 focus:text-white'>
	<p className=''>
	All
	</p>
	</div>
	<div className='border text-black font-semibold rounded-lg py-2 px-4 bg-white focus:bg-blue-500 focus:text-white'>
	<p className=''>
	Immune booster
	</p>
	</div>
	<div className='border text-black font-semibold rounded-lg py-2 px-4 bg-white focus:bg-blue-500 focus:text-white'>
	<p className=''>
	Muscles Support
	</p>
	</div>
	<div className='border text-black font-semibold rounded-lg py-2 px-4 bg-white focus:bg-blue-500 focus:text-white'>
	<p className=''>
	Supplements
	</p>
	</div>
	<div className='border text-black font-semibold rounded-lg py-2 px-4 bg-white focus:bg-blue-500 focus:text-white'>
	<p className=''>
	Sports euipments
	</p>
	</div>

	</div>
	
	{/* end of second section */}	
	{/* start of 3rd section(products) */}
	<div className='flex flex-col w-full px-12 pb-20'>

	<div className='flex flex-row'>
	
	<div className='w-full p-2'>
	<img className='w-full' src={product1} alt=''/>
	<p className='mt-2 text-black text-lg font-semibold tracking-wide'>Collagen gummies</p>
	<p className='text-black text-2xl text-opacity-80 mt-2'>23,000RWF</p>
	<div className='flex flex-row mt-3'>
	<button className='py-2 rounded-full w-full bg-blue-500 text-white font-semibold border border-blue-500 focus:bg-gradient-to-br focus:from-blue-600 focus:to-blue-50 focus:text-white focus:outline-none hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500'>Buy</button>
	<button className='ml-2 py-2 rounded-full w-full bg-white text-blue-500 font-semibold border border-blue-500 focus:bg-gradient-to-tl focus:from-blue-600 focus:to-blue-50 focus:text-white focus:outline-none hover:bg-blue-500 hover:text-white'>Add to cart</button>
	</div>
	</div>
	<div className='ml-4 w-full'>
	<img className='w-full' src={product2} alt=''/>
	<p className='mt-2 text-black text-lg font-semibold tracking-wide'>Collagen gummies</p>
	<p className='text-black text-2xl text-opacity-80 mt-2'>23,000RWF</p>
	<div className='flex flex-row mt-3'>
	<button className='py-2 rounded-full w-full bg-blue-500 text-white font-semibold border border-blue-500 focus:bg-gradient-to-br focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-white focus:outline-none hover:border hover:border-blue-500 hover:text-blue-500'>Buy</button>
	<button className='ml-2 py-2 rounded-full w-full bg-white text-blue-500 font-semibold border border-blue-500 focus:bg-gradient-to-tl focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-blue-500 focus:outline-none hover:text-white'>Add to cart</button>
	</div>
	</div>
	<div className='ml-4 w-full'>
	<img className='w-full' src={product3} alt=''/>
	<p className='mt-2 text-black text-lg font-semibold tracking-wide'>Collagen gummies</p>
	<p className='text-black text-2xl text-opacity-80 mt-2'>23,000RWF</p>
	<div className='flex flex-row mt-3'>
	<button className='py-2 rounded-full w-full bg-blue-500 text-white font-semibold border border-blue-500 focus:bg-gradient-to-br focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-white hover:border hover:border-blue-500 focus:outline-none hover:text-blue-500'>Buy</button>
	<button className='ml-2 py-2 rounded-full w-full bg-white text-blue-500 font-semibold border border-blue-500 focus:bg-gradient-to-tl focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-blue-500 hover:text-white focus:outline-none'>Add to cart</button>
	</div>
	</div>
	<div className='ml-4 w-full'>
	<img className='w-full' src={product4} alt=''/>
	<p className='mt-2 text-black text-lg font-semibold tracking-wide'>Collagen gummies</p>
	<p className='text-black text-2xl text-opacity-80 mt-2'>23,000RWF</p>
	<div className='flex flex-row mt-3'>
	<button className='py-2 rounded-full w-full bg-blue-500 text-white font-semibold border border-blue-500 focus:bg-gradient-to-br focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 focus:outline-none'>Buy</button>
	<button className='ml-2 py-2 rounded-full w-full bg-white text-blue-500 font-semibold border border-blue-500 focus:bg-gradient-to-tl focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-blue-500 hover:text-white focus:outline-none'>Add to cart</button>
	</div>
	</div>
	
	</div>

	<div className='mt-12 flex flex-row'>
	
	<div className='w-full'>
	<img className='w-full' src={product1} alt=''/>
	<p className='mt-2 text-black text-lg font-semibold tracking-wide'>Collagen gummies</p>
	<p className='text-black text-2xl text-opacity-80 mt-2'>23,000RWF</p>
	<div className='flex flex-row mt-3'>
	<button className='py-2 rounded-full w-full bg-blue-500 text-white font-semibold border border-blue-500 focus:bg-gradient-to-br focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-white hover:border hover:border-blue-500 focus:outline-none hover:text-blue-500'>Buy</button>
	<button className='ml-2 py-2 rounded-full w-full bg-white text-blue-500 font-semibold border border-blue-500 focus:bg-gradient-to-tl focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-blue-500 hover:text-white focus:outline-none'>Add to cart</button>
	</div>
	</div>
	<div className='ml-4 w-full'>
	<img className='w-full' src={product2} alt=''/>
	<p className='mt-2 text-black text-lg font-semibold tracking-wide'>Collagen gummies</p>
	<p className='text-black text-2xl text-opacity-80 mt-2'>23,000RWF</p>
	<div className='flex flex-row mt-3'>
	<button className='py-2 rounded-full w-full bg-blue-500 text-white font-semibold border border-blue-500 focus:bg-gradient-to-br focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-white hover:border hover:border-blue-500 focus:outline-none hover:text-blue-500'>Buy</button>
	<button className='ml-2 py-2 rounded-full w-full bg-white text-blue-500 font-semibold border border-blue-500 focus:bg-gradient-to-tl focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-blue-500 hover:text-white focus:outline-none'>Add to cart</button>
	</div>
	</div>
	<div className='ml-4 w-full'>
	<img className='w-full' src={product3} alt=''/>
	<p className='mt-2 text-black text-lg font-semibold tracking-wide'>Collagen gummies</p>
	<p className='text-black text-2xl text-opacity-80 mt-2'>23,000RWF</p>
	<div className='flex flex-row mt-3'>
	<button className='py-2 rounded-full w-full bg-blue-500 text-white font-semibold border border-blue-500 focus:bg-gradient-to-br focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-white hover:border hover:border-blue-500 focus:outline-none hover:text-blue-500'>Buy</button>
	<button className='ml-2 py-2 rounded-full w-full bg-white text-blue-500 font-semibold border border-blue-500 focus:bg-gradient-to-tl focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-blue-500 hover:text-white focus:outline-none'>Add to cart</button>
	</div>
	</div>
	<div className='ml-4 w-full'>
	<img className='w-full' src={product4} alt=''/>
	<p className='mt-2 text-black text-lg font-semibold tracking-wide'>Collagen gummies</p>
	<p className='text-black text-2xl text-opacity-80 mt-2'>23,000RWF</p>
	<div className='flex flex-row mt-3'>
	<button className='py-2 rounded-full w-full bg-blue-500 text-white font-semibold border border-blue-500 focus:bg-gradient-to-br focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 focus:outline-none'>Buy</button>
	<button className='ml-2 py-2 rounded-full w-full bg-white text-blue-500 font-semibold border border-blue-500 focus:bg-gradient-to-tl focus:from-blue-600 focus:to-blue-50 focus:text-white hover:bg-blue-500 hover:text-white focus:outline-none'>Add to cart</button>
	</div>
	</div>
	
	</div>

	</div>
	
	{/* end of 3rd section(products) */}

        </div>
	</>
    )

}
export default Products