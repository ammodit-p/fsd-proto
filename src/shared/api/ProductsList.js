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
        const products = await setTimeout(() => ([
            {
                id: "78797",
                name: 'Product1'
            },
            {
                id: "78796787",
                name: 'Product2'
            }
        ]), 200)
        this.products = products
        return products
    }
}

export const productsApi = new ProductsList()