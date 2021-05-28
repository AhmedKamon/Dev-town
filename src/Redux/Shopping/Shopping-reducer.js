import * as actionTypes from './Shopping-type';
import jhankerSir from '../../image/jhankerSir.png'
import mosh from '../../image/mosh.jpg'
import devEd from '../../image/devEd.jpg'
import netNinja from '../../image/netNinja.jpg'

const INITIAL_STATE = {
    products :[
        
        {
            id:1,
            name: 'Mosh',
            Skills: 'Python, Java, Ruby/Ruby on Rails, JavaScript, C Language, C++ C#, Objective-C. PHP. SQL. Swift',
            price: 1000,
            type: 'legend',
            image: mosh
        },
        {
            id:2,
            name: 'Dev Ed',
            Skills: 'Python, Java, Ruby/Ruby on Rails, JavaScript, C Language, C++ C#, Objective-C. PHP. SQL. Swift',
            price: 1000,
            type: 'Ultra legend',
            image: devEd
        },
        {
            id:3,
            name: 'Net Ninja',
            Skills: 'Python, Java, Ruby/Ruby on Rails, JavaScript, C Language, C++ C#, Objective-C. PHP. SQL. Swift',
            price: 1000,
            type: 'Ultra legend Pro',
            image: netNinja
        },
        {
            id:4,
            name: 'jhankar mahbub',
            Skills: 'Python, Java, Ruby/Ruby on Rails, JavaScript, C Language, C++ C#, Objective-C. PHP. SQL. Swift',
            price: 1000,
            type: 'Ultra legend Pro MAX',
            image: jhankerSir
        }
    ],//id,
    cart:[],
    currentItem:null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
            default:
                return state;
    }
}

export default shopReducer;