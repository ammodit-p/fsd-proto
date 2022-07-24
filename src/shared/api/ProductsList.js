const products = [
    {
        id: "78797",
        name: 'Product1'
    },
    {
        id: "78796787",
        name: 'Product2'
    }
]

const apiGetProducts = async () => new Promise((res, rej) => setTimeout(() => {
    res (products)
}, 500))

class ProductsList {
    static _instance
    constructor () {
        if (ProductsList._instance) {
			return ProductsList._instance;
        }
        
        ProductsList._instance = this;
    }

    async getProductsList() {
        if(this.products) {
            return this.products
        }
        
        this.products = await apiGetProducts()
        return this.products
    }
}

export const productsApi = new ProductsList()