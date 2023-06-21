import React from 'react';
import imgTitova from '../../images/about/iam.webp'

export const Team = () => (
    <div id="about" className="container relative bg-white overflow-hidden mt-16 max-w-3xl flex flex-col items-center gap-2">
        <div className="max-w-3xl flex flex-col items-center gap-5">
                        <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                            Алина Титова
                        </h2>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>"Объединяем мир и возвращаем людям счастье!”</p>
                        <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}

                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Алина — организатор центра "Добро Море", энергичный и опытный управленец — организовала субботние и воскресные школы в городах Германии и Шотландии; культурный фестиваль на Боденском озере; общественно-полезные организации в Германии; центры культуры и интеграции, совместные российско-германские проекты в сфере образования, культуры и благотворительности.
                        </p>
            <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
                 src={imgTitova}
                 alt="" />
    </div>
    </div>
);


