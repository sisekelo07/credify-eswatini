export function TextField({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type={type} />
    </label>
  );
}

export function TextArea({ label }: { label: string }) {
  return (
    <label className="field full">
      <span>{label}</span>
      <textarea rows={5} />
    </label>
  );
}

export function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="field">
      <span>{label}</span>
      <select defaultValue="">
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
