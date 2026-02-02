import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    const resultQuery = await sql`SELECT *  FROM wedding WHERE id = ${id}`;
    const { rows } = resultQuery;
    const result = rows[0] || [];
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error processing your request' },
      { status: 500 }
    );
  }
}
