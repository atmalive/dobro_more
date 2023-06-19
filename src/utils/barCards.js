import partnership from '../images/sidebar/partnership.webp';
import donating from '../images/sidebar/donating.webp';
import volunteers from '../images/sidebar/volonteers.webp';

export const getBarCards = (t) => [
    {
        title: t('barCards.goodseaClub.title'),
        content: t('barCards.goodseaClub.content'),
        imageUrl: partnership,
        linkUrl: 'https://forms.gle/uEWNpyAWmJ86emLdA',
        linkDesc: t('barCards.goodseaClub.linkDesc'),
        linkUrl2: ''
    },
    {
        title: t('barCards.donations.title'),
        content: t('barCards.donations.content'),
        imageUrl: donating,
        linkUrl: 'https://www.paypal.com/donate?token=xo7CD_BytKd_olQPa7z7OWjGULc5GrV_qr_FaMDctD27clXZ1YZxkC4zftVCuBmTwpaMsx8ou9x_kNgf',
        linkDesc: t('barCards.donations.linkDesc'),
        linkUrl2: ''
    },
    {
        title: t('barCards.volunteering.title'),
        content: t('barCards.volunteering.content'),
        imageUrl: volunteers,
        linkUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeXlVOgVQm7E8mbN_iCuhwvhB1FDm9KBTWZ-qHUgfxxz6trEQ/viewform',
        linkDesc: t('barCards.volunteering.linkDesc'),
        linkUrl2: ''
    },
];
