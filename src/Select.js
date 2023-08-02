'use client';

import {useRouter} from './framework/router';

export default function Select({children}) {
  const {navigate, isPending} = useRouter();

  return (
    <select
      onClick={() => {
        navigate({showOptions: true});
      }}>
      {isPending ? <option>Loading...</option> : children}
    </select>
  );
}
