import CryptoJS from 'crypto-js';

const secret_key = "KhanaZulfanaImam";

// encrypt tidak boleh ada / + dan =, maka harus di replace
const encrypt = (text: string) => {
  const encrypted = CryptoJS.AES.encrypt(text, secret_key).toString();
  // Replace characters that might cause issues in URLs or other systems
  return encrypted.replace(/\//g, "_").replace(/\+/g, "-").replace(/\=/g, "~");
};

const decrypt = (text: string) => {
  // Revert the replacement of characters before decryption
  const revertedText = text.replace(/_/g, "/").replace(/-/g, "+").replace(/~/g, "=");
  const decrypted = CryptoJS.AES.decrypt(revertedText, secret_key).toString(CryptoJS.enc.Utf8);
  return decrypted;
};

export { encrypt, decrypt };
