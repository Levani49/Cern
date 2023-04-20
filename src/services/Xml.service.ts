export default class XmlService {
  private base = import.meta.env.VITE_XML_PROVIDER;
  private parser = new DOMParser();

  fetch = async (xmlPath: string): Promise<Document> => {
    const response = await fetch(`${this.base}/${xmlPath}`);
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

  buildXmlUrl = (src: string): string => {
    return `${this.base}/${src}.xml`;
  };

  private parseXml = (xmlString: string): Document => {
    return this.parser.parseFromString(xmlString, 'application/xml');
  };

  constructor() {
    // do nothing
  }
}
