import React from 'react';
import { barCards } from '../../utils/barCards'

const SideBarRight = () => {

    return (
        <div className='flex flex-col space-y-4 p-4'>
            <div className='max-w-sm flex flex-col justify-start items-start gap-2'>
                <h2 className="text-3xl font-medium text-center text-dark-500">Сотрудничество</h2>
                <p>Центр существует благодаря вашей поддержке. Чтобы продолжать нашу деятельность приглашаем к сотрудничеству коммерческие и некоммерческие организации, фонды, волонтёров и волонтёрские объединения, преподавателей, специалистов в области психологии, медицины, психотерапии. Мы не откажемся от любой помощи!</p>
            </div>
            {barCards.map((card, index) => (
                <div
                    key={index}
                    className='bg-white rounded-xl shadow-md overflow-hidden'
                >
                    <img src={card.imageUrl} alt={card.title} className='w-full h-32 sm:h-48 object-cover' />
                    <div className='p-4'>
                        <h2 className='font-bold text-xl mb-2'>{card.title}</h2>
                        <p className='mb-2'>{card.content}</p>
                        <a href={card.linkUrl} className='text-blue-500 hover:underline'>Learn more</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideBarRight;
