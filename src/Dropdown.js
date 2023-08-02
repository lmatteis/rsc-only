import {Suspense} from 'react';
import {Router} from './framework/router';

export default function Dropdown() {
  return (
    <Suspense fallback="Loading..">
      <Router
        componentPath="DropdownRSC.js"
        initialProps={{
          showOptions: false,
        }}
      />
    </Suspense>
  );
}
