const redux = require('redux')

 const inc1=(val)=> {return{type:'incrementer1',valeur:val}}
 const dec1=(val)=> {return {type:'decrementer1',valeur:val}}
 const init1=(val)=>{ return{type:'initialiser1'}}
 const inc2=(val)=> {return{type:'incrementer2',valeur:val}}
 const dec2=(val)=> {return {type:'decrementer2',valeur:val}}
 const init2=(val)=>{ return{type:'initialiser2'}}
 const cmp2={cmp2:0}
 const cmp1={cmp1:0}

 const cmp1reducer=(state=cmp1,action)=>{
    switch(action.type){
        case 'incrementer1':return{cmp1:state.cmp1+action.valeur,}
        case 'decrementer1' :return{cmp1:state.cmp1-action.valeur,}
        case 'initialiser1' :return{cmp1:0}
        default: return state

    }
 }
 const cmp2reducer=(state=cmp2,action)=>{
    switch(action.type){
        case 'incrementer2':return{cmp2:state.cmp2+action.valeur,}
        case 'decrementer2' :return{cmp2:state.cmp2-action.valeur,}
        case 'initialiser2' :return{cmp2:0}
        default: return state

    }
 }

 
  const createStore=redux.createStore;
 const combineReducers= redux.combineReducers
 const rootreducer=combineReducers({cmp1:cmp1reducer,cmp2:cmp2reducer});
 


 const store=createStore(rootreducer);
 console.log('state initiale',store.getState())
 store.dispatch(inc1(4))
 console.log('state',store.getState())
 store.dispatch(dec2(2))
 console.log('state',store.getState())
 store.dispatch(inc2(8))
 console.log('state',store.getState())
 store.dispatch(dec1(8))
 console.log('state',store.getState())