import deMessages from './de.json';
import enMessages from './en.json';
import frMessages from './fr.json';
import itMessages from './it.json';
import kaMessages from './ka.json';
import esMessages from './es.json';
import nlMessages from './nl.json';

type Translation = {
  [key: string]: string;
};

type Messages = {
  [key: string]: Translation;
};

/*
  en : english
  es : spain
  de : germany
  fr : france 
  it : italy
  ka : georgia
  nl : netherland
*/

export const messages: Messages = {
  en: enMessages,
  es: esMessages,
  de: deMessages,
  fr: frMessages,
  it: itMessages,
  ka: kaMessages,
  nl: nlMessages,
};
