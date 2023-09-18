import CryptoJS from 'crypto-js';

const IV = CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef");
const _k = CryptoJS.MD5("123456").toString();
const key = CryptoJS.enc.Hex.parse(_k);
const options = {iv:IV, padding:CryptoJS.pad.ZeroPadding};

export function encryptByAES(text) {
    const encrypted = CryptoJS.AES.encrypt(text, key, options);
    return encrypted.toString();
}

export function decryptByAES(text){
    const decrypted = CryptoJS.AES.decrypt(text, key, options);
    return CryptoJS.enc.Utf8.stringify(decrypted);
}
