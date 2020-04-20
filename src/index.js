const bcrypt = require('bcrypt');
const saltRounds = 10;

const types = {
    BCRYPT: 'bcrypt'
};

const hash = (text, options) => {
    if(options.type == types.BCRYPT) {
        return bcrypt.hashSync(text, saltRounds);
    }
    throw Error("Encrypt type not supported");
};

const compare = (encryptedText, text, options) => {
    if(options.type == types.BCRYPT) {
        return bcrypt.compareSync(text, encryptedText);
    }
    throw Error("Encrypt type not supported");
};

module.exports = {
    hash,
    compare
};
