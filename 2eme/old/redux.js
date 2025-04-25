import { createStore } from "redux";

const iniState = [{Id:0,Nom:'abdou',Age:"22"}]


const stReducer = (state = iniState, action) => {
  switch (action.type) {
    case "Ajouter": {
      return [...state,action.payload];
    }
    case "Supprimer":{
      return state.filter(s=> s.Id !== action.payload);
    }
    case "Editer":{
      state.splice(action.payload[0],1,action.payload[1])
      return [...state];
    }
    default:
      return state;
  }
};

export const store = createStore(stReducer);
  