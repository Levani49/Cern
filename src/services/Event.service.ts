export default class EventService {
  private path = import.meta.env.VITE_EVENTS_PROVIDER;
  private parser = new DOMParser();

  fetchXml = async (xmlPath: string): Promise<string> => {
    const response = await fetch(`${this.path}/${xmlPath}`);
    try {
      if (response.ok) {
        return await response.text();
      } else {
        throw new Error(`Error fetching XML file: ${response.statusText}`);
      }
    } catch (e) {
      throw new Error(`Error fetching XML file: ${e}`);
    }
  };

  parseXml = (xmlString: string): Document => {
    return this.parser.parseFromString(xmlString, 'application/xml');
  };

  constructor() {
    // do nothing
  }
}
