export default function Home() {
  return (
    <main className="p-8 max-w-2xl mx-auto space-y-4 text-center">
      <h1 className="text-3xl font-bold">Bienvenido a FitBooking</h1>
      <p>Gestiona las clases de tu estudio y permite que tus clientes reserven con facilidad.</p>
      <div className="space-x-4">
        <a href="/lumi/schedule" className="btn btn-primary btn-sm">Ver agenda</a>
        <a href="/admin" className="btn btn-secondary btn-sm">Panel Admin</a>
      </div>
    </main>
  );
}