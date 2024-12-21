type LocaleMessages = typeof import('./messages/en.json');

// Importing other language files ..

// Create a new type by combining all message types
type Messages = LocaleMessages;

declare interface IntlMessages extends Messages {}
