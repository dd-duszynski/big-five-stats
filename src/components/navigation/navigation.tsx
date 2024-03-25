'use client';

import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const leagues: { title: string; href: string }[] = [
  {
    title: 'Premier League',
    href: '/league/39',
  },
  {
    title: 'La Liga',
    href: '/league/140',
  },
  {
    title: 'Ligue 1',
    href: '/league/61',
  },
  {
    title: 'Bundesliga',
    href: '/league/78',
  },
  {
    title: 'Serie A',
    href: '/league/135',
  },
  {
    title: 'Primeira Liga',
    href: '/league/94',
  },
  {
    title: 'Ekstraklasa',
    href: '/league/106',
  },
  {
    title: 'SuperLig',
    href: '/league/203',
  },
  {
    title: 'Eredivisie',
    href: '/league/88',
  },
  {
    title: 'ProLeague',
    href: '/league/307',
  },
];

export function Navigation() {
  return (
    <NavigationMenu className="fixed w-full max-w-none justify-start bg-white">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            href="/"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Leagues</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] grid-cols-2 grid-rows-2 gap-1 bg-white p-4 md:w-[500px] lg:w-[600px]">
              {leagues.map((league) => (
                <ListItem
                  key={league.title}
                  title={league.title}
                  href={league.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="/statistics"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Statistics
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="/top-form"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Top Form
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';
