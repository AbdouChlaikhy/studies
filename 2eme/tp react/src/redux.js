import { createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";

const initialState={
    users:[],
    loading:false,erreur:''
};
export const fetchUsers=() => dispatch => {
    dispatch({type:"chargement"})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => dispatch({type:'fetch_users',payload:users}))
}

const reducer =( state =initialState, action) => { 
    switch(action.type) {
        case"fetch_users":{
            return {...state,users:action.payload};
        }
        case "Erreur":{
            return{...state,erreur:'error'};

        }
        case"chargement":{
            return{...state,loading:true}
        }
        default:
            return state;
    }
}
export const store =createStore(reducer,applyMiddleware(thunk));