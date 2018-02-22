interface LogContent {
    description: string,
    data: object|string|number|boolean
}

interface Logline {
    namespace: string,
    static isConnected: boolean,
    static activeStore: StoreDef
}

interface PluginDef {
    id: string
}

interface StoreDef {
    id: string
    connect: function,
    put: function,
    get: function,
    delete: function,
    disconnect: function
}