// Short local trips around Trivandrum (Thiruvananthapuram): half-day and
// day outings by taxi. Shown on the homepage, under the destinations, and on
// the /tours-and-travels-trivandrum page.
//
// Keep each note to one short sentence. No prices or timings.

export interface LocalTrip {
  name: string;
  note: string;
}

export const localTrips = {
  heading: "Local trips around Trivandrum",
  intro: "Half-day and day trips by taxi, from your hotel or home in the city.",
  whatsappLabel: "Plan a local trip on WhatsApp",
  whatsappMessage: "Hello, I would like to book a local trip in Trivandrum.",
  trips: [
    {
      name: "Shanghumugham Beach",
      note: "The city beach near the airport, known for its giant mermaid sculpture and sunsets.",
    },
    {
      name: "Ponmudi",
      note: "A hill station in the Western Ghats, up a winding road of hairpin bends, with cool air and mist.",
    },
    {
      name: "Veli Tourist Village",
      note: "Where Veli lake meets the sea, with boating, gardens and open-air sculptures.",
    },
    {
      name: "Napier Museum and Zoo",
      note: "A 19th-century museum in Kerala style, beside the city zoo and gardens.",
    },
    {
      name: "Kuthiramalika Palace",
      note: "A carved wooden palace beside Sri Padmanabhaswamy Temple, now a museum.",
    },
    {
      name: "Poovar",
      note: "Golden sand and boat rides where the Neyyar river meets the sea.",
    },
  ] satisfies LocalTrip[],
};
