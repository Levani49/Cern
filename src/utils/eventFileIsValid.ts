interface EventObject {
  Event: any;
}

export function eventFileIsValid(event: EventObject): boolean {
  if (!event.Event) {
    return false;
  }

  if (!event.Event.Jet) {
    return false;
  }

  if (!event.Event.ETMis) {
    return false;
  }

  if (!event.Event.Track) {
    return false;
  }

  return true;
}
