import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslation from './locales/en/translation.json'
import ukTranslation from './locales/uk/translation.json'
import ruTranslation from './locales/ru/translation.json'
import meTranslation from './locales/me/translation.json'
import bsTranslation from './locales/bs/translation.json'
import srTranslation from './locales/sr/translation.json'
import deTranslation from './locales/de/translation.json'
import frTranslation from './locales/fr/translation.json'
import esTranslation from './locales/es/translation.json'

i18n.use(
    new LanguageDetector(null, {
        order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag'], // Changed order here
        lookupAlias: {
            sr: 'sr',
            me: 'me',
            hr: 'bs',
            ua: 'uk',
        },
    }),
)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            uk: {
                translation: ukTranslation,
            },
            ru: {
                translation: ruTranslation,
            },
            me: {
                translation: meTranslation,
            },
            bs: {
                translation: bsTranslation,
            },
            sr: {
                translation: srTranslation,
            },
            de: {
                translation: deTranslation,
            },
            fr: {
                translation: frTranslation,
            },
            es: {
                translation: esTranslation,
            },
        },
        fallbackLng: 'en',
        whitelist: ['en', 'ru', 'bs', 'ua', 'uk', 'de', 'fr', 'es'], // Added this line
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
