import React from 'react';
import img1 from '../../images/galery/PHOTO-2020-11-26-18-15-18.webp'
import img2 from '../../images/galery/PHOTO-2020-11-26-18-15-19-1.webp'
import img3 from '../../images/galery/PHOTO-2020-11-26-18-15-23-1.webp'
import img4 from '../../images/galery/PHOTO-2020-11-26-18-15-28-2.webp'
import img5 from '../../images/galery/PHOTO-2020-11-26-18-15-28.webp'

const images = [
    { src: img1, title: 'VR', isWide: false },
    { src: img2, title: 'Tech', isWide: true },
    { src: img3, title: 'Dev', isWide: true },
    { src: img4, title: 'Retro', isWide: false },
    { src: img5, title: 'Art', isWide: false },
];

export const Gallery = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div className="flex items-center gap-12">
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Gallery</h2>

                        <p className="hidden max-w-screen-sm text-gray-500 md:block">...</p>
                    </div>

                    <a href="#"
                       className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</a>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                    {images.map((image, index) => (
                        <ImageBlock key={index} img={image.src} title={image.title} isWide={image.isWide} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const ImageBlock = ({ img, title, isWide }) => {
    return (
        <a href="#"
           className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${isWide ? 'md:col-span-2' : ''} md:h-80`}>
            <img src={img} loading="lazy" alt={title} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
            </div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{title}</span>
        </a>
    )
}


