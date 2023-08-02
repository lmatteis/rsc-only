'use client';

import {useRouter} from './framework/router';

export default function Select({children}) {
  const {navigate} = useRouter();

  return (
    <select
      onClick={() => {
        navigate({showOptions: true});
      }}>
      {children}
    </select>
  );
}
