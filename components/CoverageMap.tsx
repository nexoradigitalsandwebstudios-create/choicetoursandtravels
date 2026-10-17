// A simple route map of South India: our base in Thiruvananthapuram joined
// to some of the places we drive to. It is a diagram, not a road map: each
// dot is plotted from the town's real latitude and longitude, and the lines
// are straight. State borders are not drawn; the states are listed beside it.
//
// To add a place: look up its latitude and longitude and add a row below.
// `label` says which side of the dot the name goes on.

interface MapPlace {
  name: string;
  lat: number;
  lon: number;
  label: "left" | "right" | "above";
}

const BASE: MapPlace = { name: "Thiruvananthapuram", lat: 8.52, lon: 76.94, label: "left" };

const PLACES: MapPlace[] = [
  { name: "Kanyakumari", lat: 8.08, lon: 77.54, label: "right" },
  { name: "Alleppey", lat: 9.5, lon: 76.34, label: "left" },
  { name: "Kochi", lat: 9.93, lon: 76.27, label: "left" },
  { name: "Munnar", lat: 10.09, lon: 77.06, label: "above" },
  { name: "Madurai", lat: 9.93, lon: 78.12, label: "right" },
  { name: "Rameswaram", lat: 9.29, lon: 79.31, label: "right" },
  { name: "Guruvayur", lat: 10.59, lon: 76.04, label: "left" },
  { name: "Coimbatore", lat: 11.02, lon: 76.96, label: "left" },
  { name: "Thanjavur", lat: 10.79, lon: 79.14, label: "right" },
  { name: "Puducherry", lat: 11.94, lon: 79.81, label: "right" },
  { name: "Mysuru", lat: 12.3, lon: 76.64, label: "left" },
  { name: "Bengaluru", lat: 12.97, lon: 77.59, label: "left" },
  { name: "Chennai", lat: 13.08, lon: 80.27, label: "right" },
  { name: "Tirupati", lat: 13.63, lon: 79.42, label: "right" },
  { name: "Hampi", lat: 15.34, lon: 76.46, label: "left" },
  { name: "Hyderabad", lat: 17.39, lon: 78.49, label: "right" },
  { name: "Visakhapatnam", lat: 17.69, lon: 83.22, label: "left" },
];

// Turns latitude/longitude into x/y inside the drawing. 40 units per degree;
// longitude is squeezed slightly (cos 13°) so shapes are not stretched.
function toPoint(place: MapPlace) {
  return {
    x: 70 + (place.lon - 74.5) * 0.974 * 40,
    y: 20 + (18.2 - place.lat) * 40,
  };
}

function labelPosition(place: MapPlace, x: number, y: number) {
  if (place.label === "left") {
    return { x: x - 8, y: y + 5, anchor: "end" as const };
  }
  if (place.label === "above") {
    return { x, y: y - 10, anchor: "middle" as const };
  }
  return { x: x + 8, y: y + 5, anchor: "start" as const };
}

export default function CoverageMap() {
  const base = toPoint(BASE);

  return (
    <svg
      viewBox="0 0 430 450"
      role="img"
      aria-label="Map of South India showing routes from Thiruvananthapuram to places including Kanyakumari, Madurai, Rameswaram, Kochi, Munnar, Bengaluru, Chennai and Hyderabad"
      className="h-auto w-full"
    >
      {PLACES.map((place) => {
        const point = toPoint(place);
        return (
          <line
            key={`line-${place.name}`}
            x1={base.x}
            y1={base.y}
            x2={point.x}
            y2={point.y}
            className="stroke-accent"
            strokeWidth={1}
            strokeOpacity={0.7}
          />
        );
      })}

      {PLACES.map((place) => {
        const point = toPoint(place);
        const label = labelPosition(place, point.x, point.y);
        return (
          <g key={place.name}>
            <circle cx={point.x} cy={point.y} r={3.5} className="fill-ink" />
            <text x={label.x} y={label.y} textAnchor={label.anchor} className="fill-text text-[13px]">
              {place.name}
            </text>
          </g>
        );
      })}

      <circle cx={base.x} cy={base.y} r={9} className="fill-accent" fillOpacity={0.3} />
      <circle cx={base.x} cy={base.y} r={5} className="fill-ink" />
      <text x={base.x - 12} y={base.y + 5} textAnchor="end" className="fill-ink text-[14px] font-semibold">
        {BASE.name}
      </text>
    </svg>
  );
}
