'use client';
import {LimitedInput} from '@/components/app/limited-input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Separator} from '@/components/ui/separator';
import {cn, integerToRoman} from '@/lib/utils';
import {useTheme} from 'next-themes';
import {Roboto_Slab} from 'next/font/google';
import {useEffect, useState} from 'react';

export const robotSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function Home() {
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col justify-center items-center h-screen p-8 sm:p-0">
      <Card>
        <CardHeader>
          <CardTitle>Roman Numeral Converter</CardTitle>
          <CardDescription>
            Type number between 1 to 1000 inclusive
          </CardDescription>
          <Separator />
        </CardHeader>

        <CardContent>
          <CardTitle className="text-sm">Integer Value</CardTitle>
          <LimitedInput value={value} setValue={setValue} />
        </CardContent>

        <CardContent>
          <CardTitle className="text-sm">Converted Value</CardTitle>
          <CardDescription className={cn(robotSlab.className, 'text-lg')}>
            {value === '' ? 'NO VALUE' : integerToRoman(value)}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
