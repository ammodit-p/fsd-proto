const config = {
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
}

const apiGetConfig = async () => new Promise((res, rej) => setTimeout(() => {
    res (config)
}, 200))

const apiSaveConfig = async (config) => setTimeout(() => config = config, 200)


class Config {
    static _instance
    constructor () {
        if (Config._instance) {
			return Config._instance;
        }
        
        Config._instance = this;
    }

    #getConfig = async () =>  {
        if(this.config) {
            return this.config
        }
        try {

        this.config = await apiGetConfig()
        return this.config
        }
        catch(e) {
            console.log('e', e)
            throw e
        }
    }

    async #saveConfig(config) {
        await apiSaveConfig(config)
        this.config = config
    }

    /** Вопрос насколько в этом есть смысл. Конкретно этот метод нужен в слое процесс для сборки целого конфига и отправки на бэк
     * Либо процесс у нас валидирует только какой-то кусок кофига, за который отвественно конкретно это приложение и отдает на сборку
     * сюда все куски.
     * Либо процесс (process) должен таки получить весь конфиг
     */
    getConfig = async () => {
      return this.#getConfig().then((res) => {
            
            return res})
    }

    getProducts = async () => {
       return  this.#getConfig()
        .then((res) => {
            
            return res?.products ?? []})
    }

    getOffers = async () => {
       return  this.#getConfig()
        .then((res) => {            
            return res?.data?.market?.offers ?? []})
    }


    saveProject = async () => {
        await this.#saveConfig()
    }
}

const configApi = new Config()
configApi.getConfig()
export {configApi}