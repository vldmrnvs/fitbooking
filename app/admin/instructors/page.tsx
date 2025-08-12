'use client';

import { useState } from 'react';

interface Instructor {
  id: string;
  name: string;
  email: string;
  phone?: string;
  specialties: string;
  active: boolean;
}

export default function InstructorsPage() {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    specialties: ''
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) return;
    const newInstructor: Instructor = {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name: form.name,
      email: form.email,
      phone: form.phone,
      specialties: form.specialties,
      active: true
    };
    setInstructors((prev) => [...prev, newInstructor]);
    setForm({ name: '', email: '', phone: '', specialties: '' });
  }

  function toggleActive(id: string) {
    setInstructors((prev) =>
      prev.map((ins) => (ins.id === id ? { ...ins, active: !ins.active } : ins))
    );
  }

  return (
    <main className="p-4 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Instructores</h1>
      <form onSubmit={handleAdd} className="card bg-base-100 shadow p-4 space-y-4">
        <h2 className="text-lg font-semibold">Nuevo instructor</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="input input-bordered"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="input input-bordered"
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Teléfono"
            className="input input-bordered"
          />
          <input
            type="text"
            name="specialties"
            value={form.specialties}
            onChange={handleChange}
            placeholder="Especialidades"
            className="input input-bordered"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Añadir
        </button>
      </form>
      <div className="space-y-4">
        {instructors.length === 0 && (
          <div className="text-center text-sm text-gray-500">
            No hay instructores. Usa el formulario para añadir uno.
          </div>
        )}
        {instructors.map((ins) => (
          <div
            key={ins.id}
            className="card bg-base-100 shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="font-medium">{ins.name}</h3>
              <p className="text-sm opacity-80">{ins.email}</p>
              <p className="text-sm">{ins.specialties}</p>
            </div>
            <button
              className={`btn btn-sm mt-2 md:mt-0 ${ins.active ? 'btn-error' : 'btn-success'}`}
              onClick={() => toggleActive(ins.id)}
            >
              {ins.active ? 'Desactivar' : 'Activar'}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}