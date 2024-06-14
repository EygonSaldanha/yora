export interface TypeEventos {
  id: string;
  title: string;
  slug: string;
  startTime: Date;
  details: string | null;
  location: string;
  // image: string;
  attendeesAmount: number;
  maximumAttendees: number;
}
