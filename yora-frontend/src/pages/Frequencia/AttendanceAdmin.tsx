import { FC, useState } from "react";

interface AttendanceAdminProps {
  attendees: { name: string, email: string }[];
}

export const AttendanceAdmin: FC<AttendanceAdminProps> = ({ attendees }) => {
  const [search, setSearch] = useState("");

  const filteredAttendees = attendees.filter(attendee =>
    attendee.name.toLowerCase().includes(search.toLowerCase()) ||
    attendee.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="rounded-lg bg-transparent hover:bg-gray-50/[0.7] font-bold px-3 w-full py-1.5 border-2 border-white/[0.5]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="mt-4">
        {filteredAttendees.map((attendee, index) => (
          <li key={index} className="border-b border-white/[0.5] py-2">
            {attendee.name} - {attendee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
