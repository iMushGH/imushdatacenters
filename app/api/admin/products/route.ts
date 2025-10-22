import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data', 'products.json');

function readProducts() {
  if (!fs.existsSync(DATA_PATH)) return {};
  const raw = fs.readFileSync(DATA_PATH, 'utf8');
  return JSON.parse(raw || '{}');
}

function writeProducts(data: any) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
}

export async function GET() {
  try {
    const products = readProducts();
    return NextResponse.json({ products });
  } catch (err) {
    console.error('GET /api/admin/products error', err);
    return NextResponse.json({ error: 'Failed to read products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body || !body.slug) return NextResponse.json({ error: 'Missing product slug' }, { status: 400 });
    const products = readProducts();
    products[body.slug] = body;
    writeProducts(products);
    return NextResponse.json({ success: true, product: body });
  } catch (err) {
    console.error('POST /api/admin/products error', err);
    return NextResponse.json({ error: 'Failed to save product' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { slug } = await request.json();
    if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
    const products = readProducts();
    delete products[slug];
    writeProducts(products);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('DELETE /api/admin/products error', err);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
