export default function AdminHome() {
  return (
    <div className="p-8 text-center space-y-4">
      <h1 className="text-2xl font-bold">Panel de administración</h1>
      <p>Selecciona una sección para gestionar tu estudio.</p>
      <div className="space-x-4">
        <a href="/admin/sessions" className="btn btn-primary btn-sm">
          Sesiones
        </a>
        <a href="/admin/instructors" className="btn btn-secondary btn-sm">
          Instructores
        </a>
      </div>
    </div>
  );
}