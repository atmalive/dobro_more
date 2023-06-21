import React from 'react';

const videos = [
    { src: 'https://www.youtube.com/embed/IrpQsMnLutE', title: 'VR', isWide: false },
    { src: 'https://www.youtube-nocookie.com/embed/sTQi2BmPnv8', title: 'Tech', isWide: true },
];

export const RecoveryProgram = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center max-w-5xl pt-5 m-4">

                {/* <div className="w-full flex items-center justify-between">*/}
                {/*    <div className="flex items-center gap-12">*/}
                {/*        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl p-3">Recovery</h2>*/}
                {/*    </div>*/}

                {/*    <a*/}
                {/*        href="#"*/}
                {/*        className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"*/}
                {/*    >*/}
                {/*        More*/}
                {/*    </a>*/}
                {/* </div>*/}

                <div className="w-full flex flex-col sm:flex-row gap-4 mt-8">
                    {videos.map((video, index) => (
                        <VideoBlock key={index} video={video.src} title={video.title} isWide={video.isWide} />
                    ))}
                </div>

                <div className="p-3 mt-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Центр Добро Море</h3>
                    <p className="text-gray-700 mb-4">
                        Центр Добро Море проводит программы социально-психологической реабилитации для семей, в которых ребенок пережил или страдает тяжелым заболеванием. Программа направлена на помощь участникам пережитой ситуации вернуться к нормальной счастливой жизни, найти ресурсы и расширить границы своих возможностей.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Улучшение качества жизни после перенесённого заболевания.</li>
                        <li>Восстановление физического и психического здоровья, снижение тревожности у родителей и детей.</li>
                        <li>Восстановление положительного восприятия жизни, семьи и общества.</li>
                        <li>Содействие родителям в преодолении последствий стресса и передачи детям стратегий адаптивного поведения в стрессе и коммуникаций с социумом.</li>
                        <li>Расширение для семей опыта возможного проведения досуга.</li>
                        <li>Снятия некоторых физических ограничений в специально созданной безопасной обстановке.</li>
                        <li>Переориентация с «психологии инвалида» на активного субъекта собственной жизни.</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        Программа проводится на берегу Адриатического моря в Черногории на базе пятизвёздочного отеля Splendid в течение 7 дней. Участие бесплатно. <a
                        href='https://forms.gle/5csvgnViH3mnC2j46' target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">Отправить заявку</a>.
                    </p>
                </div>

        </section>
    );
};

const VideoBlock = ({ video, title, isWide }) => {
    return (
        <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className={'group relative flex items-center overflow-hidden rounded-lg bg-gray-100 shadow-lg w-full h-80'}        >
            <iframe
                src={video}
                title={title}
                frameBorder="0"
                allowFullScreen
                className={`absolute inset-0 w-full h-full object-cover object-center transition duration-200 group-hover:scale-105 ${isWide ? 'md:h-full' : 'md:w-full'}`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>
    );
};
