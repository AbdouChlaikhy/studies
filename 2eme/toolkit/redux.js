const { createSlice,configureStore } = require("@reduxjs/toolkit");




const stagiairesSlice =createSlice({
    name:'stagiaire',
    initialState:[
        {id : 1,nom:'chalikhy',prenom:'abdou',adresse:"l'hermitage"},
        {id:2,nom:'alami',prenom:'yasser',adresse:'famagosta'},
        {id:3,nom:'ALAMI',prenom:'OUSTADA',adresse:'OFPPT'},

    ],
reducers:{
    ajouterstag:(state,action)=>{state.push(action.payload)},
    suppstag:(state,action)=>{
        const del=state.filter((x)=>{return x.id !==action.payload});
        return del},
    modstage:(state,action)=>{state.splice(action.payload,1,action.payload.x)}
}  
}
)
export const store =configureStore({
    reducer:{
        stagiaires:stagiairesSlice.reducer,
    }
    
})
export const {ajouterstag,suppstag,modstage}= stagiairesSlice