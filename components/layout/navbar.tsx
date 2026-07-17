import { getAllCategories } from '@/lib/products';
import { NavbarClient } from './navbar-client';
import type { ProductCategory } from '@/lib/data';

export const revalidate = 3600;

export async function Navbar() {
  let categories: ProductCategory[] = [];
  try {
    categories = await getAllCategories();
  } catch {
    categories = [];
  }

  return <NavbarClient categories={categories} />;
}
