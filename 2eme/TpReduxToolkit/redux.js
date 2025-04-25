const { createSlice,createAsyncThunk, configureStore } = require("@reduxjs/toolkit");

export const fetchUsers = createAsyncThunk(
  'users/getData',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => console.log(user))
  }
)

const userSlice = createSlice({
  name:'users',
  initialState:{
    users:[],
    loading:false,
    erreur:''
  },
  reducers:{},
  extraReducers:{
    [fetchUsers.pending]:(state,action)=>{
      state.loading = true;
    },
    [fetchUsers.fulfilled]:(state,action)=>{
      state.loading = false;
      state.users = action.payload;
      // state.users.push(action.payload)
    },
    [fetchUsers.rejected]:(state,action)=>{
      state.loading = false;
    },
  }
})



export const store = configureStore({
  reducer:{
    user:userSlice.reducer,
  }
})

