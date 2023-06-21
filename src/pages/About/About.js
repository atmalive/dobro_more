import React from 'react';
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div className="flex flex-col max-w-5xl items-start space-y-4 p-6 bg-white rounded shadow-lg">
            <h2 className="text-3xl font-semibold">О нас</h2>
            <p>
                Организация DobroMore занимается благотворительными, образовательными и социальными проектами.
            </p>
            <h3 className="text-2xl font-semibold">Что мы делаем?</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Поддерживаем семьи и отдельных людей в трудных ситуациях;</li>
                <li>
                    2 раза в год мы проводим реабилитационные программы для семей из бывшего Советского Союза, в которых один или
                    несколько членов переболели тяжелыми болезнями или страдают хроническими заболеваниями;
                </li>
                <li>2 раза в год мы проводим обучающие тренинги для волонтеров и специалистов в сфере благотворительности;</li>
                <li>Проводим исследовательские программы по темам образования, экологии, благотворительности и реабилитации;</li>
                {/* And so on for the rest of the items */}
            </ul>
            <h3 className="text-2xl font-semibold">Регулярно проводятся мероприятия:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Занятия в Открытой Школе, встречи психологических групп, тренинги, театральные и музыкальные вечера;</li>
                <li>Поездки и экскурсии, отдых на море и в горах, спортивные мероприятия  спортивные мероприятия, лекции и встречи с интересными людьми, астрономические наблюдения с выездами на природу, экологические акции, походы и многое другое.</li>
                {/* And so on for the rest of the items */}
            </ul>
            <p>Добро пожаловать в новый мир! Мы можем сделать его счастливее.</p>
            <p>Для того, чтобы стать Членом <a href='https://forms.gle/uEWNpyAWmJ86emLdA' target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">Клуба ДоброМоре</a>, <a
                href='https://forms.gle/67o4EbkqjzFdEr3n9' target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">волонтером</a> или <Link to='/donate' className="text-blue-600 underline hover:text-blue-800">спонсором</Link> , напишите нам!</p>
            <p>Для участия в программе реабилитации, пожалуйста, заполните <a href='https://forms.gle/5csvgnViH3mnC2j46' target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">анкету</a>.</p>
        </div>
    );
};
