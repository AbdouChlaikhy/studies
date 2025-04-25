const redux = require('redux')

 const inc=(val)=> {return{type:'incrementer',valeur:val}}
 const dec=(val)=> {return {type:'decrementer',valeur:val}}
 const init=(val)=>{ return{type:'initialiser'}}
 const initialstate={compteur1:0,compteur2:0}

 const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'incrementer':return{...state,compteur1:state.compteur1+action.valeur,}
        case 'decrementer' :return{...state,compteur2:state.compteur2-action.valeur,}
        case 'initialiser' :return{compteur1:0,compteur2:0    }
        default: return state

    }
 }
 const createStore=redux.createStore;
 const store=createStore(reducer);
 console.log('state initiale',store.getState())
 store.dispatch(inc(4))
 console.log('state',store.getState())
 store.dispatch(dec(2))
 console.log('state',store.getState())
 store.dispatch(inc(8))
 console.log('state',store.getState())