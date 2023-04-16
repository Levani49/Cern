export default class EventService {
  private path = import.meta.env.VITE_EVENTS_PROVIDER;

  load = async (xmlPath: string): Promise<string> => {
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

  constructor() {
    // do nothing
  }
}
