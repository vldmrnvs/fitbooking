import Link from 'next/link';

// Mock data for demonstration. In a real application this would come from Supabase.
const sessions = [
  {
    id: 's1',
    className: 'Pilates Suelo',
    startsAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    capacity: 8,
    bookedCount: 2
  },
  {
    id: 's2',
    className: 'Yoga Flow',
    startsAt: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(),
    capacity: 10,
    bookedCount: 10
  }
];

export default function SchedulePage({ params }: { params: { studio: string } }) {
  const { studio } = params;
  return (
    <main className="p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Agenda de {studio}</h1>
      <ul className="space-y-4">
        {sessions.map((s) => {
          const free = s.capacity - s.bookedCount;
          const dateText = new Date(s.startsAt).toLocaleString('es-ES');
          return (
            <li key={s.id} className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">{s.className}</h2>
                <p className="text-sm opacity-80">{dateText}</p>
                <p className="text-sm">
                  {free > 0 ? (
                    <span>
                      {free} libres / {s.capacity}
                    </span>
                  ) : (
                    <span className="text-error">Clase completa</span>
                  )}
                </p>
                <div className="card-actions justify-end">
                  {free > 0 ? (
                    <Link href={`/success?status=booked`} className="btn btn-primary btn-sm">Reservar</Link>
                  ) : (
                    <Link href={`/success?status=waitlisted`} className="btn btn-secondary btn-sm">Unirme a la lista</Link>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}