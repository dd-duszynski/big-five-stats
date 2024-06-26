'use client';

import React from 'react';
import { Text } from '../text/text';
import { Card, CardContent, CardHeader } from '../ui/card';

interface IGradientCardProps {
  children: React.ReactNode;
  headerTitle: string;
  className?: string;
}

const GradientCard = ({
  children,
  headerTitle,
  className,
}: IGradientCardProps) => {
  return (
    <Card className={`w-[300px] ${className}`}>
      <CardHeader className="flex items-center justify-center gap-3 rounded-t-md bg-gradient-to-r from-indigo-500 to-emerald-500">
        <Text
          variant="h3"
          className="text-center text-white"
        >
          {headerTitle}
        </Text>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default GradientCard;
