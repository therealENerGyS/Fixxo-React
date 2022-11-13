import { useContext, useState } from "react"
import { createContext } from 'react'

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [twoForProducts, setTwoForProducts] = useState([])
    const [topProducts, setTopProducts] = useState([])

    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFeaturedProducts(await res.json())
    }
    const getTwoForProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setTwoForProducts(await res.json())
    }
    const getTopProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setTopProducts(await res.json())
    }
    const getProduct = async (artnr) => {
        const res = await fetch(url + `/${artnr}`)
        setProduct(await res.json())
    }

    return <ProductContext.Provider value={{product, products, featuredProducts, twoForProducts, topProducts, getProducts, getFeaturedProducts, getTwoForProducts, getProduct, getTopProducts}}>
        {children}
    </ProductContext.Provider>
}