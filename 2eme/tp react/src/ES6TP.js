import React from "react";
import { useState } from "react";



let Stagiaires=[ {nom:"Ali",NoteBac:13,option:"DEV"},
              {nom:"ahmed",NoteBac:11,option:"ID"},
              {nom:"yassine",NoteBac:16,option:"ID"},
              {nom:"Mohammed",NoteBac:14,option:"DEV"},
              {nom:"Alae",NoteBac:10,option:"Multimedia"},
              {npm:"Mohammed",NoteBac:15,option:"DEV"}
]
Stagiaires.sort((a, b) => a.NoteBac - b.NoteBac)
function ES6TP(){
const results = [];
  return(
      <div><p>{console.log(Stagiaires[0])}
        
        
</p>
</div>

    )
}
export default ES6TP





