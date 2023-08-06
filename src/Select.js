'use client';

import {useTransition} from 'react';
import {useRouter} from './framework/router';

export default function Select({children}) {
  const {navigate} = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <select
      onClick={() => {
        startTransition(() => {
          navigate({showOptions: true});
        });
      }}>
      {isPending ? <option>Loading...</option> : children}
    </select>
  );
}
