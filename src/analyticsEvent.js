class SDK {
  constructor({ events = [], fn = () => null, delay = 0 }) {
    const updatedEvents = events.map((event, idx) => ({
      eventName: event,
      iterator: idx + 1,
    }));
    this.eventQueue = [...(updatedEvents ?? [])];
    this.timerId = null;
    this.delay = delay;
    this.fn = fn;
    this.count = 1;
  }
  logEvent(eventName) {
    const idx = this.eventQueue.length;
    this.eventQueue.push({ eventName, iterator: idx + 1 });
  }
  send() {
    this.timerId = setInterval(() => {
      const analyticsEvent = this.eventQueue.shift();
      if (!analyticsEvent) {
        clearInterval(this.timerId);
      } else {
        if (!(this.count % 5)) {
          console.log(`Failed to send ${analyticsEvent.eventName}`);
          clearInterval(this.timerId);
          console.log(`Retrying sending ${analyticsEvent.eventName}`);
          this.eventQueue.unshift(analyticsEvent);
          this.count = 1;
          this.send();
        } else {
          this.count++;
          this.fn(analyticsEvent);
        }
      }
    }, this.delay);
  }
}

// Input
const sdk = new SDK({
  fn: (event) => {
    console.log(`Analytics sent ${event.eventName}`);
  },
  delay: 300,
});

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");
sdk.logEvent("event 11");
sdk.logEvent("event 12");
sdk.logEvent("event 13");
sdk.logEvent("event 14");
sdk.logEvent("event 15");
sdk.logEvent("event 16");
sdk.logEvent("event 17");
sdk.logEvent("event 18");
sdk.logEvent("event 19");
sdk.logEvent("event 20");

sdk.send();

Output: "Analytics sent event 1";
("Analytics sent event 2");
("Analytics sent event 3");
("Analytics sent event 4");
("-----------------------");
("Failed to send event 5");
("Retrying sending event 5");
("-----------------------");
("Analytics sent event 5");
("Analytics sent event 6");
("Analytics sent event 7");
("Analytics sent event 8");
("-----------------------");
("Failed to send event 9");
("Retrying sending event 9");
("-----------------------");
("Analytics sent event 9");
("Analytics sent event 10");
