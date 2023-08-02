import {Router} from './framework/router';

export default function Dropdown() {
  return (
    <Router
      componentPath="DropdownRSC.js"
      initialProps={{
        selectedId: null,
        isEditing: false,
        searchText: '',
      }}
    />
  );
}
