import {createContext, useState} from 'react'

const PageInView = {
    home: false,
    socials: false,
    about: false,
    pinkPaper: false
}

export const PageInViewContext = createContext({
    pageInView: PageInView,
    setPageInView: () => PageInView
});

export const PageInViewProvider = ({children}) => {
    const [pageInView, setPageInView] = useState(PageInView)
    const value = {pageInView, setPageInView}
    return <PageInViewContext.Provider value={value}>{children}</PageInViewContext.Provider>
};