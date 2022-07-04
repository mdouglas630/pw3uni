const som = require("./page1/page1")

export default function Principal(){

    return (
 
       <div>
 
          <h1>Nova Página</h1>

          <MariaPrea/>
          <som.Name Comp="Lucas"/>

 
       </div>
 
    )
 
 }

export function MariaPrea(){

   return (

      <h2>Morreu Maria Preá...</h2>

   )

}