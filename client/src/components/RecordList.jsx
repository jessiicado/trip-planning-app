import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Trip = (props) => (
  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
      {props.trips.name}
    </td>
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
      {props.trips.position}
    </td>
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
      {props.trips.level}
    </td>
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
      <div className="flex gap-2">
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          to={`/edit/${props.trips._id}`}
        >
          Edit
        </Link>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
          color="red"
          type="button"
          onClick={() => {
            props.deleteTrips(props.trips._id);
          }}
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
);

export default function RecordList() {
  const [trips, setTrips] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getTrips() {
      const response = await fetch(`http://localhost:5050/trip/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const trips = await response.json();
      setTrips(trips);
    }
    getTrips();
    return;
  }, [trips.length]);

  // This method will delete a record
  async function deleteTrips(id) {
    await fetch(`http://localhost:5050/trip/${id}`, {
      method: "DELETE",
    });
    const newTrips = trips.filter((el) => el._id !== id);
    setTrips(newTrips);
  }

  // This method will map out the records on the table
  function recordList() {
    return trips.map((trip) => {
      return (
        <Trip
          trip={trips}
          deleteTrips={() => deleteTrips(trips._id)}
          key={trips._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <>
      <h3 className="text-lg font-semibold p-4">Trips</h3>
      <div className="border rounded-lg overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Trip Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Position
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Level
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">{recordList()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
