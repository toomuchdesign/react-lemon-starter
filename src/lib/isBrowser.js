// isBrowser = true for client only
const isBrowser = typeof window !== 'undefined' && ({}).toString.call(window) === '[object Window]';

export default isBrowser;
