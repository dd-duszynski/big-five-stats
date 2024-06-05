'use client';

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
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

const leagues: { title: string; href: string; flag: string }[] = [
  {
    title: 'Premier League',
    href: '/league/39',
    flag: 'https://media.api-sports.io/flags/gb.svg',
  },
  {
    title: 'La Liga',
    href: '/league/140',
    flag: 'https://media.api-sports.io/flags/es.svg',
  },
  {
    title: 'Ligue 1',
    href: '/league/61',
    flag: 'https://media.api-sports.io/flags/fr.svg',
  },
  {
    title: 'Bundesliga',
    href: '/league/78',
    flag: 'https://media.api-sports.io/flags/de.svg',
  },
  {
    title: 'Serie A',
    href: '/league/135',
    flag: 'https://media.api-sports.io/flags/it.svg',
  },
  // {
  //   title: 'Primeira Liga',
  //   href: '/league/94',
  //   flag: 'https://media.api-sports.io/flags/pt.svg',
  // },
  // {
  //   title: 'Ekstraklasa',
  //   href: '/league/106',
  //   flag: 'https://media.api-sports.io/flags/pl.svg',
  // },
  // {
  //   title: 'SuperLig',
  //   href: '/league/203',
  //   flag: 'https://media.api-sports.io/flags/tr.svg',
  // },
  // {
  //   title: 'Eredivisie',
  //   href: '/league/88',
  //   flag: 'https://media.api-sports.io/flags/nl.svg',
  // },
  // {
  //   title: 'ProLeague',
  //   href: '/league/307',
  //   flag: 'https://media.api-sports.io/flags/sa.svg',
  // },
];

export function Navigation() {
  return (
    <NavigationMenu className="h-12 w-full max-w-none justify-start bg-indigo-500 px-4 py-2 text-white">
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
            <ul className="grid w-[350px] grid-cols-2 grid-rows-2 gap-1 bg-white p-3 md:w-[500px] lg:w-[600px]">
              {leagues.map((league) => (
                <ListItem
                  key={league.title}
                  // title={league.title}
                  href={league.href}
                  className="hover:underline"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={league.flag}
                      alt={league.title}
                      className="h-6 w-6"
                      width={22}
                      height={22}
                    />
                    <p>{league.title}</p>
                  </div>
                </ListItem>
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
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none text-black no-underline outline-none transition-colors',
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
