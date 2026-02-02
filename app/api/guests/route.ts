import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    if (request.headers.get('Content-Type') !== 'application/json') {
      return NextResponse.json(
        { error: 'Content-Type must be application/json', success: false },
        { status: 400 }
      );
    }

    const { id, passconfirmed, comments } = await request.json();

    if (!id || passconfirmed === undefined) {
      return NextResponse.json(
        { error: 'ID and passconfirmed are required', success: false },
        { status: 400 }
      );
    }

    const result = await sql`
        UPDATE wedding
        SET passconfirmed = ${passconfirmed}, comments = ${comments}, dateconfirmation = NOW()
        WHERE id = ${id}`;

    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: 'No rows were updated', success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Invitation updated' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error processing your request', success: false },
      { status: 500 }
    );
  }
}
