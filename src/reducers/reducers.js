import { CHANGE_ABILITIES } from '../actions';

export const abilities = (state = [], action) => {
    switch (action.type){
        case CHANGE_ABILITIES:
            return action.payload;
        default:
            return state;
    }
}