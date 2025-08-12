import { Suspense } from 'react';

function SuccessContent({ searchParams }: { searchParams: { status?: string } }) {
  const status = searchParams?.status;
  return (
    <main className="p-8 max-w-md mx-auto space-y-4 text-center">
      <h1 className="text-2xl font-bold">¡Gracias!</h1>
      {status === 'booked' && (
        <p className="text-success">Tu plaza está confirmada. Recibirás un recordatorio 24h antes de la clase.</p>
      )}
      {status === 'waitlisted' && (
        <p className="text-warning">Te hemos añadido a la lista de espera. Te avisaremos si se libera una plaza.</p>
      )}
      {!status && <p>Acción completada.</p>}
      <div className="flex justify-center space-x-4 mt-4">
        <a href="/" className="btn btn-outline btn-sm">Inicio</a>
        <a href="/lumi/schedule" className="btn btn-primary btn-sm">Agenda</a>
      </div>
    </main>
  );
}

export default function SuccessPage(props: any) {
  // Wrapping in Suspense is a workaround for searchParams in RSC.
  return (
    <Suspense>
      <SuccessContent {...props} />
    </Suspense>
  );
}