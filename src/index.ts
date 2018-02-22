class Logline {
    constructor(namespace: string = 'default') {
        this.namespace = namespace;
    }

    put() {

    }

    get() {

    }

    delete() {

    }

    static checkConnection() {

    }

    static connect() {
        window.console && window.console.warn('logline cannot find available store, thus will not record anything persistly');
    }

    static disconnect() {

    }
}