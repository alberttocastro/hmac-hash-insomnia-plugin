// For help writing plugins, visit the documentation to get started:
//   https://support.insomnia.rest/article/26-plugins

// TODO: Add plugin code here...
const CryptoJS = require('crypto-js');

module.exports.templateTags = [{
    name: 'hmacs',
    displayName: 'HMAC hash',
    description: 'Generates HMAC hash',
    args: [
        {
            displayName: 'type',
            description: 'The type of encryption chosen',
            type: 'string',
            defaultValue: ''
        },
        {
            displayName: 'message',
            description: 'The message to be encrypted',
            type: 'string',
            defaultValue: ''
        },
        {
            displayName: 'key',
            description: 'The key for the encryption',
            type: 'string',
            defaultValue: ''
        }
    ],
    run: async (context, type, message, key) => {
        switch (type) {
            case 'sha1':
                return encodeURIComponent(CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, key)));
                break;        
            default:
                return '';
                break;
        }
    }
}]