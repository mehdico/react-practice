import React from "react"

import ContactCardA  from "./Components/ContactCardA"
import ContactCardB  from "./Components/ContactCardB"

function App() {
    return (
        <div>
            
            <ContactCardA
                name="Mr. Whiskerson" 
                imgUrl="http://placekitten.com/300/200" 
                phone="(212) 555-1234" 
                email="mr.whiskaz@catnap.meow"
            />
            
            <ContactCardA
                name="Fluffykins" 
                imgUrl="http://placekitten.com/400/200" 
                phone="(212) 555-2345" 
                email="fluff@me.com"
            />
            
            <ContactCardB 
                contact={{name: "dsadsadas", imgUrl: "http://placekitten.com/200/200", phone: "(3-1234", email: "dasdsa.meow"}}
            />
            
            <ContactCardB
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
        </div>
    )
}

export default App