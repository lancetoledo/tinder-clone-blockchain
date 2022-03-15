import { useState, createContext, useEffect } from 'react'
import { faker } from '@faker-js/faker'

export const TinderContext = createContext()

export const TinderProvider = ({children}) => {

    const [cardsData, setCardsData] = useState([])
    const [currentAccount, setCurrentAccount] = useState()
    const [currentUser, setCurrentUser] = useState()




    return(
        <TinderContext.Provider
        value = {{}}
        >{children}
        </TinderContext.Provider>
    )
}