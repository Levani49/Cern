import { GeneralInfoType } from './Xml.service.types';

export default class XmlService {
  private base = import.meta.env.VITE_XML_PROVIDER;
  private parser = new DOMParser();

  fetch = async (xmlPath: string): Promise<Document> => {
    const response = await fetch(this.buildXmlUrl(xmlPath));
    try {
      if (response.ok) {
        const data = await response.text();

        return this.parseXml(data);
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

  getXmlGeneralInfo = (xml: Document): GeneralInfoType => {
    const tag = this.readEventParametersByName(xml, 'Event', 0);

    if (tag) {
      const runNumber = this.readEventAttribute(tag, 'runNumber') || '';
      const eventNumber = this.readEventAttribute(tag, 'eventNumber') || '';
      const lumiBlock = this.readEventAttribute(tag, 'lumiBlock') || '';
      const dateTime = this.readEventAttribute(tag, 'dateTime') || '';
      const date = dateTime?.split(' ')[0] || '';
      const time = dateTime?.split(' ')[1] || '';

      return {
        runNumber,
        eventNumber,
        lumiBlock,
        dateTime,
        date,
        time,
      };
    }
  };

  private buildXmlUrl = (src: string): string => {
    return `${this.base}/${src}.xml`;
  };

  private parseXml = (xmlString: string): Document => {
    return this.parser.parseFromString(xmlString, 'application/xml');
  };

  constructor() {
    // do nothing
  }
}
