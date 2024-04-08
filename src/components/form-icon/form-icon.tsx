'use client';

interface FormIconProps {
  value: 'W' | 'D' | 'L' extends string ? string : never;
}

export default function FormIcon({ value }: FormIconProps) {
  const mapValueToStyle =
    value === 'W'
      ? 'bg-green-500'
      : value === 'D'
      ? 'bg-yellow-500'
      : 'bg-red-500';

  return (
    <div
      className={`h-5 w-5 rounded-md text-center text-white ${mapValueToStyle}`}
    >
      {value}
    </div>
  );
}
