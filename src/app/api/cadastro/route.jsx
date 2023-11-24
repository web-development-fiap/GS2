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

const handleCadastro = async (nome, email, senha) => {
    const file = await fs.readFile(
      process.cwd() + '/src/app/api/usuarios/db.json',
      'utf8',
    );
    const lista = await JSON.parse(file);
    const id = lista.usuarios[lista.usuarios.length - 1].id + 1;

    const novoUsuario = { id, nome, email, senha };
    lista.usuarios.push(novoUsuario);
    await fs.writeFile(
      process.cwd() + '/src/app/api/usuarios/db.json',
      JSON.stringify(lista),
    );

    return novoUsuario;
};

export async function POST(request, response) {
    const { info, nome, email, senha } = await request.json();