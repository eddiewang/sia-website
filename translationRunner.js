// translationRunner.js
const manageTranslations = require('react-intl-translations-manager').default;

// es2015 import
// import manageTranslations from 'react-intl-translations-manager';

manageTranslations({
  messagesDirectory: './translations/extractedMessages',
  translationsDirectory: './app/locales',
  languages: ['en'], // any language you need
});
