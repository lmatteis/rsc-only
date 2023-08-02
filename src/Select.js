'use client';

import {useRouter} from './framework/router';

export default function Select({children}) {
  const {refresh, navigate} = useRouter();

  return (
    <select
      onClick={() => {
        refresh();
        // navigate({showOptions: true});
      }}>
      {children}
    </select>
  );
}
