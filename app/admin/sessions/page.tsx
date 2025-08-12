'use client';

import { useState } from 'react';

interface Session {
  id: string;
  className: string;
  startsAt: string;
  capacity: number;
  bookedCount: number;
}

export default function AdminSessionsPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [form, setForm] = useState({
    className: '',
    startsAt: '',
    capacity: 8
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleAddSession(e: React.FormEvent) {
    e.preventDefault();
    if (!form.className || !form.startsAt) return;
    const newSession: Session = {
      // generate a simple unique id using timestamp and random number
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      className: form.className,
      startsAt: new Date(form.startsAt).toISOString(),
      capacity: Number(form.capacity),
      bookedCount: 0
    };
    setSessions((prev) => [...prev, newSession]);
    setForm({ className: '', startsAt: '', capacity: 8 });
  }

  function handleDelete(id: string) {
    setSessions((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <main className="p-4 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Sesiones</h1>
      <form onSubmit={handleAddSession} className="card bg-base-100 shadow p-4 space-y-4">
        <h2 className="text-lg font-semibold">Nueva sesión</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="className"
            value={form.className}
            onChange={handleInputChange}
            placeholder="Nombre de la clase"
            className="input input-bordered"
          />
          <input
            type="datetime-local"
            name="startsAt"
            value={form.startsAt}
            onChange={handleInputChange}
            className="input input-bordered"
          />
          <input
            type="number"
            name="capacity"
            value={form.capacity}
            onChange={handleInputChange}
            min={1}
            className="input input-bordered"
          />
          <button className="btn btn-primary" type="submit">
            Crear
          </button>
        </div>
      </form>
      <div className="space-y-4">
        {sessions.length === 0 && (
          <div className="text-center text-sm text-gray-500">No hay sesiones creadas. Usa el formulario para añadir una.</div>
        )}
        {sessions.map((s) => {
          const dateText = new Date(s.startsAt).toLocaleString('es-ES');
          return (
            <div key={s.id} className="card bg-base-100 shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-medium">{s.className}</h3>
                <p className="text-sm opacity-80">{dateText}</p>
                <p className="text-sm">
                  {s.bookedCount}/{s.capacity} reservas
                </p>
              </div>
              <button className="btn btn-error btn-sm mt-2 md:mt-0" onClick={() => handleDelete(s.id)}>
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}