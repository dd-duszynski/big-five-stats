'use client';

import React from 'react';
import { Text } from '../text/text';
import { Card, CardContent, CardHeader } from '../ui/card';

type IGradientCardProps = {
  cardContentClassName?: string;
  children: React.ReactNode;
  className?: string;
  headerTitle: string;
};

export const GradientCard = ({
  cardContentClassName,
  children,
  className,
  headerTitle,
}: IGradientCardProps) => {
  return (
    <Card
      className={`h-fit max-h-screen w-[300px] overflow-hidden ${className}`}
    >
      <CardHeader className="flex items-center justify-center gap-3 rounded-t-md bg-gradient-to-r from-indigo-500 to-emerald-500">
        <Text
          className="text-center text-white"
          variant="h3"
        >
          {headerTitle}
        </Text>
      </CardHeader>
      <CardContent className={cardContentClassName}>{children}</CardContent>
    </Card>
  );
};
