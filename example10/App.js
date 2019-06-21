import React from "react"
import Product from "./Components/Product"
import productsData from "./Components/vschoolProducts"

function App() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
    
    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App