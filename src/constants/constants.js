import women from '../assets/women.png'
import men from '../assets/1.png'
import kid from '../assets/3.png'
import accessories from '../assets/accessories.png'
import homeDecor from '../assets/home-decor.png'
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const collections = [
    {
        img: women,
        btnName: 'Women',
        colSpan: 2
    },
    {
        img: men,
        btnName: 'Men',
        colSpan: 2
    },
    {
        img: kid,
        btnName: 'Kids',
        colSpan: 2
    },
    {
        img: accessories,
        btnName: 'Accessories',
        colSpan: 3
    },
    {
        img: homeDecor,
        btnName: 'Home Decor',
        colSpan: 3
    },
];

const footContents = [
    {
        name: 'Category',
        cls: 'flex-col',
        routes: [
            {
                name: 'Men',
                link: '/'
            },
            {
                name: 'Women',
                link: '/'
            },
            {
                name: 'Kids',
                link: '/'
            },
            {
                name: 'Accessories',
                link: '/'
            },
            {
                name: 'Home Decor',
                link: '/'
            },
        ],
    },
    {
        name: 'Information',
        cls: 'flex-col',
        routes: [
            {
                name: 'Latest News',
                link: '/'
            },
            {
                name: 'My Account',
                link: '/'
            },
            {
                name: 'Size Guide',
                link: '/'
            },
            {
                name: 'FAQs',
                link: '/'
            },
        ],
    },
    {
        name: 'About',
        cls: 'flex-col',
        routes: [
            {
                name: 'About Us',
                link: '/'
            },
            {
                name: 'Contact Us',
                link: '/'
            },
            {
                name: 'Store Location',
                link: '/'
            },
            {
                name: 'Orders Tracking',
                link: '/'
            },
        ],
    },
    {
        name: 'Services',
        cls: 'flex-col',
        routes: [
            {
                name: 'Terms & Conditions',
                link: '/'
            },
            {
                name: 'Return & Exchanges',
                link: '/'
            },
            {
                name: 'Shipping & Delivery',
                link: '/'
            },
            {
                name: 'Privacy Policy',
                link: '/'
            },
        ],
    },
    {
        name: 'Follow Us',
        cls: 'flex-row',
        description: 'Feel free to connect with us on social media for latest updates.',
        routes: [
            {
                name: FaFacebookSquare,
                link: '/'
            },
            {
                name: FaInstagramSquare,
                link: '/'
            }
        ],
    },
];

export { footContents, collections }