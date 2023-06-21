import imgKp from '../../images/press/kp.webp';

export const Press = () => {
    return (
        <section className="w-full max-w-5xl flex flex-col justify-center items-center p-4 gap-3">
            <h2 className="bg-white bg-opacity-60 px-3 py-2 text-lg font-medium text-center">
                Press
            </h2>

            <p className="text-gray-700 max-w-3xl">
                Когда перед родителями встает задача отправить тяжелобольного ребенка на лечение на Запад, им на помощь приходит служба православных волонтеров в Европе &quot;Доброе дело&quot;. Она объединяет свыше 400 добровольцев в 32 городах Германии, а также в ряде городов Австрии, Франции, Англии, Израиля, Голландии, Бельгии и других стран и сотрудничает с двумя сотнями европейских клиник (преимущественно в Германии).
            </p>
            <img src="https://s11.stc.yc.kpcdn.net/share/i/12/11607027/wr-960.webp" alt="DobroMore" className="w-full max-w-2xl rounded-lg shadow-lg hover:scale-105 transition duration-300 cursor-pointer" />
            <div className="flex items-center">
                <img src={imgKp} alt="kp.ru" className="rounded-full" />
                <a href="https://www.kp.ru/daily/217188/4294931/" target="_blank" rel="noreferrer" className="ml-4 text-blue-600 underline hover:text-blue-800">
                    Статья на kp.ru
                </a>
            </div>
        </section>
    );
};
