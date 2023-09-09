import { XMLParser } from "fast-xml-parser";

import { EventDetailsXML, EventOverviewData } from "#/types/app.types";

type Options = {
  eventGroup: string;
  eventIndex: number;
};

export default class Event {
  private base = import.meta.env.VITE_XML_PROVIDER;
  private parser = new XMLParser({
    ignoreAttributes: false,
  });

  fetch = async (path: string): Promise<string> => {
    const response = await fetch(this.buildURL(path));
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

  getNumbersArrayFromTag(tagText: string): number[] {
    try {
      const whiteSpaceCharacters = /\s+/;
      const content = tagText.split(whiteSpaceCharacters);
      return content.map((element: string) => parseFloat(element));
    } catch (err) {
      throw new Error(`Error while converting tag text to numbers array ${err}`);
    }
  }

  getEventGeneralInfo = (event: EventDetailsXML): EventOverviewData => {
    const dateTime = event.Event["@_dateTime"];

    return {
      runNumber: event.Event["@_runNumber"],
      eventNumber: event.Event["@_eventNumber"],
      lumiBlock: event.Event["@_lumiBlock"],
      date: dateTime.split(" ")[0],
      time: dateTime.split(" ")[1],
    };
  };

  parseXmlAsJSON = (xml: string): EventDetailsXML => this.parser.parse(xml);

  buildURLWithOptions = (options: Options): string => {
    const { eventGroup, eventIndex } = options;

    return `group${eventGroup}/event${eventIndex.toString().padStart(3, "0")}`;
  };

  private buildURL = (src: string): string => `${this.base}/${src}.xml`;
}
