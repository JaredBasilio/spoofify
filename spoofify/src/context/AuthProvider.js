import React, {createContext, useState} from 'react'

let AuthContext = createContext(null);

export default function AuthProvider({children}) {
    let [user, setUser] = useState(null);

    let signin = () => {

    }

    let signout = () => {
        
    }

    let value = {signin, signout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
