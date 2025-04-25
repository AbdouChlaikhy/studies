import { configureStore,createSlice } from "@reduxjs/toolkit";



const initialState = [
  {
    code:0,
    name:'FRANCE',
    continent:'continent1',
    surfaceArea:1007373,
    image:'https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png',
    indepYear:1940,
    population:19023801,
    cities:[
      {name:'city1',district:'reg10',population:178680,capital:true},
      {name:'city2',district:'reg1',population:1780,capital:false}
    ]
  },
  {
    code:1,
    name:'PORTUGAL',
    continent:'continent3',
    surfaceArea:1007373,
    image:'https://upload.wikimedia.org/wikipedia/commons/2/2d/Portugal_flag_300.png',
    indepYear:1900,
    population:829839,
    cities:[
      {name:'city1',district:'reg10',population:23989,capital:false},
      {name:'city2',district:'reg1',population:3030,capital:true}
    ]
  },
  {
    code:0,
    name:'CANADA',
    continent:'continent2',
    surfaceArea:883883,
    image:'https://www.transparentpng.com/thumb/canada-flag/canada-images-canada-flag-png-0.png',
    indepYear:1920,
    population:83989,
    cities:[
      {name:'city1',district:'reg19',population:83749,capital:false},
      {name:'city2',district:'reg00',population:939,capital:false}
    ]
  },
]




const pSlice = createSlice({
  name:'p',
  initialState:initialState,
  reducers:{

  }
})




export const store = configureStore({
  reducer:{
    p:pSlice.reducer
  },
})