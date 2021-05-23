import bcrypt from 'bcrypt';

import config from '../config';

export const encrypt = async (content: string) => {
  try {
    const encryptedContent = await bcrypt.hash(content, config.salt);
    return encryptedContent;
  } catch (e) {
    throw 'fail to encrypt';
  }
};

export const isMatch = async (content: string, cryptContent: string) => {
  try {
    return await bcrypt.compare(content, cryptContent);
  } catch (e) {
    throw 'fail to decrypt';
  }
};
