import Select from './Select';

async function getOptions() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return ['foo', 'bar', 'baz'];
}

export default async function DropdownRSC({showOptions}) {
  const options = await getOptions();
  if (showOptions) {
    const options = await getOptions();

    return (
      <Select>
        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </Select>
    );
  }
  return <Select />;
}
