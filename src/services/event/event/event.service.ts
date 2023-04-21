import { GeneralInfoType, XmlEvent } from './event.service.types';

import { XMLParser } from 'fast-xml-parser';

export default class EventService {
  private base = import.meta.env.VITE_XML_PROVIDER;
  private parser = new XMLParser({
    ignoreAttributes: false,
  });

  fetch = async (xmlPath: string): Promise<string> => {
    const response = await fetch(this.buildXmlUrl(xmlPath));
    try {
      if (response.ok) {
        const data = await response.text();
        return data;
      } else {
        throw new Error(`Error fetching XML file: ${response.statusText}`);
      }
    } catch (e) {
      throw new Error(`Error fetching XML file: ${e}`);
    }
  };

  readEventParametersByName(XML: Document, tagName: string, index: number): undefined | Element {
    return XML.getElementsByTagName(tagName)[index];
  }

  readEventAttribute(xmlElement: Element, attrName: string): string | null {
    return xmlElement.getAttribute(attrName);
  }

  readTagText(element: Element, childElement: string, index: number): string[] | null {
    try {
      const whiteSpaceCharacters = /\s+/;
      let content: null | string[] = null;
      const childNode = element.getElementsByTagName(childElement)[index].childNodes[0];

      if (childNode.textContent) {
        content = childNode.textContent
          .slice(1, childNode.textContent.length - 2)
          .split(whiteSpaceCharacters);
      }

      return content;
    } catch (err) {
      throw new Error(`Error while reading tag text ${err}`);
    }
  }

  getEventGeneralInfo = (event: XmlEvent): GeneralInfoType => {
    const dateTime = event.Event['@_dateTime'];

    return {
      runNumber: event.Event['@_runNumber'],
      eventNumber: event.Event['@_eventNumber'],
      lumiBlock: event.Event['@_lumiBlock'],
      date: dateTime.split(' ')[0],
      time: dateTime.split(' ')[1],
    };
  };

  parseXmlAsJSON = (xmlString: string): XmlEvent => {
    return this.parser.parse(xmlString);
  };

  private buildXmlUrl = (src: string): string => {
    return `${this.base}/${src}.xml`;
  };

  constructor() {
    // do nothing
  }
}
