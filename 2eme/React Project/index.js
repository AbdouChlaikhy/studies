const redux = require('redux')

console.log('bonjour les amix ');
 const action1 ={type:'incrementer',valeur:1}
 const action2 ={type:'decrementer',valeur:2}

 const inc=(val)=> {return{type:'incrementer',valeur:val}}
 const dec=(val)=> {return {type:'decrementer',valeur:val}}
 const init=(val)=>{ return{type:'initialiser'}}
 const initialstate={compteur:0}

 const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'incrementer':return{compteur:state.compteur+action.valeur,}
        case 'decrementer' :return{compteur:state.compteur-action.valeur,}
        case 'initialiser' :return{compteur:0       }
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


