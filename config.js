const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61VaW+ryBL9L/3Vzph9sRTpNas3bILX+Ol9aKBZbGgwNLbxVf77CDtRojcz92aky6cWNKdOVZ1T9QOQIq3xFLdg+AOUVXpGFHdH2pYYDIHWRBGuQB+EiCIwBOvxzkPXwDKy5LYQjFxJRZl10k3Brcr9ePkqBNHrno5dYl+ewVsflI2fpcFPAOW1N94U8PVoEGGD4npEFHdC55WUl72R1zsR1ZI82awD+/gM3jpElFYpic0ywTmuUDbFrYvS6nv0x7riCMcUOjM1u+grsVpst+lAike5Gs7oPFwVvSxbtzu4Mb9HfwtfXfZ66I0mm9kisMuZtG0XN9Se93Sepdc1Lx1F10dTT3ce9Os0Jjgch5jQlLbfrnszq8vAOjOpBec5nQZqkSfeSBL3O7lhhR4KtNOMcc+b25b5HvE29E6LXdR40lX2psSW3ZwmQsoMFo7R3EjAKgIZb9GJsY5fibvVh1aO/6buyG2IiAdFtTCxofL2C8RzZqbZhEeECQOcJNra109wuxG+R98156vkeBCYm++19a01TnQ3vzWhxYtMoUdyxS9uwsUtOPblkz6iTfUzlu3cnGaH6SWf+LHd88veWRjfXjAJF6h17O2hnBiRoIRNVkhOWQgxHDmRcRWXTmFe5R3pbaE5alfqwiFeslvZAXzlEg0+3zM64nYcgiH71gcVjtOaVoimBbm/U9g+QOF5iYMK03t5wQm+HLm94G5xqoSBKRRRGXo+4swFFRKREaLxbrM5TK1wUDyDPiirIsB1jcNRWtOiah1c1yjGNRj+996pLukK5wXFkzQEQyAwsiIooiLw/H/qPy4JojUqyz8IpqAPoqrIHQyGtGpwH9zvSzwLTY7VeFGRWF7lZWhAw2R4TtdkU4Bal2H+iLlKc1xTlJdgyMq8KnKiwjFv/d9CQ+UZqPMMy0KN4xVW0yHLG7woyJbOWIzC/4IG+5toWKouMqZpWYYJJVOHhiIKJgtNS2cFmbXkX9DgfhMNRdIsQ7IE3mA41RQFU4cCyyuSrCoaq6j6L2n8rw8IvtKHpzsl8mwfRGlV0zVpyqxA4YfhPz6iICgaQpctCfTugCsw/PIaU5qSuO4SawiqgiQ9Y73LAwwjlNX4rQ9CfE4D3OEBGfo3fH3ZLIPl8clTDmdXYHDcqTkpyOOKIjGRHKDgSQyw/CSgUHzyeQk9BbyiKr7sS5IvgK4cj3Ha/fOP7k6cfOLJvnERlXgyqieEhKe4EYzD7nh36MOWuMLhR5V9FBybclUcMfkJbrlzL8tYRjSbBZU492bIbgbKwuMM+AX3YXcw/PG5wvQi7PDYlQQdVtqArltdnP8Xw1D8qxwI6u6CoKjzlHRR3lvQ/R9iitKsBkOgO7P64I8NcyqF5xlj29CMoR5D8Nmyj7H4GDtnzvLkS646A3kv26Nmbkt1QIyjWJ142JjKYFfgwwClNls//w0IGIJozUuz1dLquRst4aTjWvVUf+SzjpYYA+yiF8kYc/Ndr2aV5cazby/70dw57IJMw1PP3PGzlDZtjK/5xjkHVJjL5UXVLs9dtId0vgar1Ridz+ZqGmu2bnj8ah6aYmzWRIqu83h6mXhEuYVCKkPMHCNpv3Tdm5lzrj+pDpe9SevbZsKmsW2vN5fJ69aLaCTBl8fAvi+M7H1Rp++j9CG0KMX3vffehF+06lPxzFv/C8L7Hv0HVWm+mqyxMjmv3B6Hr4l88JpqNLmICyTRyyxxXVYaFQOuSKgP3jorlxmiUVHlXV1yH4E+yFBN4adj/2YIsGof5C0syyVF9MPoAN6fawbe/gQ1yeRXHwoAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "cosmin",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "40784858433,40784858433",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "public",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





