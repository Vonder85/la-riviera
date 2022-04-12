// Define interface for process.env
interface ProcessEnvVar {
    [key: string]: string;
}

/**
 * Get, replace variables and format an environment variable.
 *
 * @param {string} key - The key of the env variable.
 * @param {string} defaultValue - The default value
 * @returns The value of the env variable.
 */
export const getEnv = function (key: string, defaultValue = ''): string {
    const keys = process.env as ProcessEnvVar;
    keys['REACT_APP_PUBLIC_URL'] = `${window.location.protocol}//${window.location.host}`;
    return replaceEnvKey(key, keys) || defaultValue;
};

// Private methods to replace vars
const replaceRegex = /{{(.*?)}}/g;
const replaceEnvKey = function (value: string, keys: ProcessEnvVar): string {
    return (keys[value] || '').replace(replaceRegex, (match: string, offset: string) => {
        if (replaceRegex.test(keys[offset])) {
            return replaceEnvKey(offset, keys);
        }
        return keys[offset];
    });
};
