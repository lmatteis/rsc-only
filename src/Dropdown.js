import {Suspense} from 'react';
import {Router} from './framework/router';

export default function Dropdown() {
  return (
    <Router
      componentPath="DropdownRSC.js"
      initialProps={{
        showOptions: false,
      }}
    />
  );
}
