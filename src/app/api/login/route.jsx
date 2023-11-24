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

const handleLogin = async (email, senha) => {
    const file = await fs.readFile(
      process.cwd() + '/src/app/api/usuarios/db.json',
      'utf8',
    );
    const dados = await JSON.parse(file);
  
    try {
      const user = dados.usuarios.find(
        (user) => user.email === email && user.senha === senha,
      );
  
      if (user) {
        return NextResponse.json({ status: true, user: user });
      } else {
        return NextResponse.json({ status: false, message: 'Login inválido' });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json({ status: false, message: 'Erro no servidor' });
    }
  };
  
  export async function POST(request, response) {
    const { info, email, senha } = await request.json();
  
    switch (info) {
      case 'login':
        const result = await handleLogin(email, senha);
        return result;
      default:
        return NextResponse.json({ status: false, message: 'Ação inválida' });
    }
  }