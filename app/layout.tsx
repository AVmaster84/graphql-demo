import {
  OrderEnum,
  TermObjectsConnectionOrderbyEnum,
  fetchCategories,
} from '@/graphql';

import { TopNav, NavItem } from '@/server/TopNav';
import { Toaster } from '@/ui/sonner;

import './globals.css';

export const metadata = {
  title: process.env.SITE_NAME,
  description: process.env.SITE_DESCRIPTION,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await fetchCategories(
    5,
    1,
    {
    orderby: TermObjectsConnectionOrderbyEnum.COUNT,
    order: OrderEnum.DESC
    }
  ) || [];
  const menu: NavItem[] = [
    ...categories.map((category) => ({
        label: category.name as string,
        href: `/${category.slug}`,
    })),
  ];

  return (
    <html lang="en">
      <body>
        <TopNav menu={menu} />
        <main className="w-full">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}