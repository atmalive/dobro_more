import React from 'react';

import { useTranslation } from 'react-i18next'
import { getBarCards } from '../../utils/barCards'

const SideBarRight = () => {

    const { t } = useTranslation();
    const barCards = getBarCards(t);

    return (
        <div className='flex flex-col space-y-4 p-4'>
            <div className='max-w-sm flex flex-col justify-start items-start gap-2'>
                <h2 className="text-3xl font-medium text-center text-dark-500">{t('sidebarRight.partnershipTitle')}</h2>
                <p>{t('sidebarRight.partnershipContent')}</p>
            </div>
            {barCards.map((card, index) => (
                <div
                    key={index}
                    className='bg-white max-w-sm rounded-xl shadow-md overflow-hidden '
                >
                    <img src={card.imageUrl} alt={card.title} className='w-full sm:h-48 object-cover' />
                    <div className='p-4'>
                        <h2 className='font-bold text-xl mb-2'>{card.title}</h2>
                        <p className='mb-2'>{card.content}</p>
                        <a
                            href={card.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-blue-500 hover:underline'
                        >
                            {card.linkDesc}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideBarRight;
