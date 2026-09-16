import React, { useEffect, useRef, useState } from 'react'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NewArrival = () => {

    const scrollref = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0); 
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [canScrollLeft, setCanScrollLeft] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(true);

    const newArrival = [
        {
            _id: "1",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylish Jacket"
                },
            ],
        },
        {
            _id: "2",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Stylish Jacket"
                },
            ],
        },
        {
            _id: "3",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Stylish Jacket"
                },
            ],
        },
        {
            _id: "4",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Stylish Jacket"
                },
            ],
        },
        {
            _id: "5",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Stylish Jacket"
                },
            ],
        },
        {
            _id: "6",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Stylish Jacket"
                },
            ],
        },
        {
            _id: "7",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Stylish Jacket"
                },
            ],
        },
        {
            _id: "8",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Stylish Jacket"
                },
            ],
        },
    ];

    const scroll = (direction) => {
       const scrollAmount = direction === "left" ? -300 : 300;
       scrollref.current.scrollBy({left: scrollAmount, behaviour: "smooth"});
    }
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollref.current.offsetLeft);
        setScrollLeft(scrollref.current.scrollLeft);
    }
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - scrollref.current.offsetLeft;
        const walk = x - startX;
        scrollref.current.scrollLeft = scrollLeft - walk;
    }
    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    }

    const updateScrollButtons = () => {
        const container = scrollref.current;
        if (container) {
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth >  leftScroll + container.clientWidth;

            setCanScrollLeft(leftScroll > 0);
            setCanScrollRight(rightScrollable);

        }

    }

    useEffect(()=>{
        const container = scrollref.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons)
            updateScrollButtons();
            return () => container.removeEventListener("scroll", updateScrollButtons);
        }
    }, [])

  return (
    <section className='px-8'>
       <div className='container mx-auto text-center mb-10 relative'>
        <h2 className='text-3xl font-bold mb-4'>Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
            Discover the latest styles straight off the runaway, fresh added to keep your wardrobe on the cutting edges of fashion.
        </p>
        {/* Scroll Buttons */}
        <div className="absolute right-5 bottom-[-30px] flex space-x-2">
            <button
             onClick={()=> scroll("left")} 
             disabled={!canScrollLeft}
             className={`p-2 rounded border ${!canScrollLeft? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white text-black"}`}
             >
                <FiChevronLeft className='text-2xl'/>
            </button>
            <button 
            onClick={()=> scroll("right")} 
            className={`p-2 rounded border ${!canScrollRight? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white text-black"}`}
            >
                <FiChevronRight className='text-2xl'/>
            </button>
        </div>
       </div>
       {/* Scrollable Content */}
       <div ref={scrollref}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging? "cursor-grabbing" : "cursor-grab"}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
       >
        {
            newArrival.map((product)=>(
                <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                    <img 
                    src={product.images[0]?.url}
                    alt={product.images[0]?.altText || product.name} 
                    draggable="false"
                    className='w-full h-[500px] object-cover rounded-lg'
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                        <Link to={`/product/${product._id}`} className='block'>
                            <h4 className='font-medium'>{product.name}</h4>
                            <p className='mt-1'>${product.price}</p>
                        </Link>
                    </div>
                </div>
            ))
        }
       </div>
    </section>
  )
}

export default NewArrival