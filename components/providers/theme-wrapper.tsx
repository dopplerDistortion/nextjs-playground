'use client';

import {useTheme} from 'next-themes';
import {useEffect} from 'react';

export function ThemeWrapper({children}: React.ComponentProps<'div'>) {
  const {setTheme} = useTheme();

  useEffect(() => {
    setTheme('system');
  }, [setTheme]);

  return <main>{children}</main>;
}
