import { NavLink } from '@/ui/NavLink';
import { UserNav } from '@/client/UserNav';

export interface NavItem {
    label: string;
    href: string;
    cta?: boolean;
}

export interface TopNavProps {
    menu: NavItem[];
}

export function TopNav({ menu }: TopNavProps) {
  return (
    <nav className="w-full bg-white min-h-24 py-4 px-4">
      <ul className="max-w-screen-lg m-auto w-full flex flex-row gap-x-4 justify-end items-center">
        <h1>{process.env.SITE_NAME}</h1>
        {menu.map((item, i) => (
          <li key={i} className="group">
            <NavLink href={item.href}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}