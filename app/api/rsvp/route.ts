// app/api/rsvp/route.ts
export interface RSVPData {
  nombre: string;
  invitados: number;
}

export async function POST(request: Request) {
  const data: RSVPData = await request.json();

  console.log('RSVP recibido:', data.nombre, data.invitados);

  return new Response(
    JSON.stringify({ message: `Gracias ${data.nombre}, confirmaste ${data.invitados} invitados.` }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}