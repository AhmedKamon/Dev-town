import * as actionTypes from './Shopping-type';
import jhankerSir from '../../image/jhankerSir.png'
import mosh from '../../image/mosh.jpg'
import devEd from '../../image/devEd.jpg'
import netNinja from '../../image/netNinja.jpg'

const INITIAL_STATE = {
    products: [

        {
            id: 1,
            name: 'Mosh',
            Skills: 'Python, Java, Ruby/Ruby on Rails, JavaScript, C Language, C++ C#, Objective-C. PHP. SQL. Swift',
            price: 1000,
            type: 'legend',
            image: mosh,
            dis: 'I train professional software engineers that companies love to hire. My courses: http://codewithmosh.com Connect on social media: http://www.twitter.com/moshhamedani'
        },
        {
            id: 2,
            name: 'Dev Ed',
            Skills: 'Python, Java, Ruby/Ruby on Rails, JavaScript, C Language, C++ C#, Objective-C. PHP. SQL. Swift',
            price: 2500,
            type: 'Ultra legend',
            image: devEd,
            dis: 'i am a Front End Developer currently located in ... Content Creator. Dev Ed. Juni 2018 –Heute3 Jahre. Crowdholding Grafik ... Full Stack Developer | Upcoming YouTuber @ CodeKareHum | Technical Advisor.'
        },
        {
            id: 3,
            name: 'Net Ninja',
            Skills: 'Python, Java, Ruby/Ruby on Rails, JavaScript, C Language, C++ C#, Objective-C. PHP. SQL. Swift',
            price: 3499,
            type: 'Ultra legend Pro',
            image: netNinja,
            dis: 'Black-belt your web development skills. Over 1000 free programming tutorials about:- Modern JavaScript (beginner to advanced)- Node.js- React- Vue.js- Firebace'
        },
        {
            id: 4,
            name: 'jhankar mahbub',
            Skills: 'Python, Java, Ruby/Ruby on Rails, JavaScript, C Language, C++ C#, Objective-C. PHP. SQL. Swift',
            price: 5500,
            type: 'Ultra legend Pro MAX',
            image: jhankerSir,
            dis:'ঝংকার মাহবুব এক দশক ধরে প্রোগ্রামিং ও ওয়েব ডেভেলপমেন্টের সাথে জড়িত। বুয়েটের পড়ালেখা শেষ করার পর কম্পিউটার সায়েন্সে মাস্টার্স করেন আমেরিকার নর্থ ডেকোটা স্টেট ইউনিভার্সিটি। তারপর সিনিয়র ওয়েব ডেভেলপার হিসেবে দীর্ঘদিন ধরে কাজ করেছেন যুক্তরাষ্ট্রের নিলসেন কোম্পানিতে। বর্তমানে স্ত্রী কারিনা ইসলামসহ বসবাস করছেন যুক্তরাষ্ট্রের ক্যালিফোর্নিয়ার অঙ্গরাজ্যের সিলিকনভ্যালি এরিয়াতে। '
        }
    ],//id,
    cart: [],
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //need to check item is in the cart or not
            //get the data from product
            const item = state.products.find((prod) => prod.id === action.payload.id)
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }]
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
}

export default shopReducer;