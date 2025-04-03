export default function Invesinput({ id, label, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        defaultValue={0}
        id={id}
        onChange={(event) => onChange(id, event.target.value)}
      />
    </div>
  );
}
