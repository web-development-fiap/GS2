import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const file = await fs.readFile(
    process.cwd() + '/src/app/api/usuarios/db.json',
    'utf8',
  );
  const lista = await JSON.parse(file);
  return NextResponse.json(lista);
}