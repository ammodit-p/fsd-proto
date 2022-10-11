

export const useProductsList = () => {
    const productList = [
        {
            id: "78797",
            name: 'Product1'
        },
        {
            id: "78796787",
            name: 'Product2'
        }
    ]
    const isLoading = false

    const getProductById = (id) => productList.find(item => item.id === id)

    return {
        productList,
        getProductById,
        isLoading
    }
}