const HAS_CONSOLE = window.console && window.console.info && window.console.warn && window.console.error;

export default {
    id: 'logline-plugin-console',
    onRecord(namespace, level, description, data) {
        if (HAS_CONSOLE) {
            window.console[level](namespace, level.toUpperCase(), description, data);
        }
    }
}