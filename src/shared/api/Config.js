class Config {
    static _instance
    constructor () {
        if (Config._instance) {
			return Config._instance;
        }
        
        Config._instance = this;
    }

    async #getConfig() {
        console.log('hi i return config')
        if(this.config) {
            return this.config
        }
        const config = await setTimeout(() => ({
            id: '123',
            products: [
                {
                    id: '123-1',
                    name: 'pr1',
                    offerId: '1'
                }
            ],
            data: {
                market: {
                    offers: [
                        {
                            id: '1',
                            offerType: 'site'
                        }
                    ]
                },
                slides: [
                    {
                        componentName: 'div',
                        children: [{
                            componentName: 'button'
                        }]
                    }
                ]
            }
        }), 200)
        this.config = config
        return config
    }

    async #saveConfig(config) {
        await setTimeout(() => {
            this.config = config
        }, 200)
    }

    getProducts = async () => {
        this.#getConfig()
        .then(() => this.config?.products ?? [])
    }

    getOffers = async () => {
        this.#getConfig()
        .then(() => this.config?.data?.market?.offers ?? [])
    }

    saveProducts = (products) => {
        this.config.products = products
    }

    saveOffers = (offers) => {
        this.config.data.market.offers = offers
    }

    saveProject = async () => {
        await this.#saveConfig()
    }
}

const configApi = new Config()
export {configApi}