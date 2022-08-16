const defaultPublishOptions = {
    targetOrigin: '*',
    targetWindow: window
}

const defaultSubscribeOptions = {
    targetWindow: window
}

export const useEventBus = () => {
    const publish = ( message, options = defaultPublishOptions ) => {
        options.targetWindow.postMessage(message, options.targetOrigin)
    }

    const subscriptionHandler = ({
        event,
        topic,
        handler
    }) => {
        if (event.data.topic === topic) {
            handler(event.data.payload)
        }
    }

    const subscribe = (
        topic,
        handler,
        options = defaultSubscribeOptions
    ) => {

        const messageEventHandler = (event) => {
            subscriptionHandler({event, topic, handler})
        }

        const attachEventListener = () => {
            options.targetWindow.addEventListener(
                'message',
                messageEventHandler
            )
        }
        const detachEventListener = () => {
            options.targetWindow.removeEventListener(
                'message',
                messageEventHandler
            )
        }

        attachEventListener()
        return { unsubscribe: detachEventListener }
    }

    return { publish, subscribe }
}