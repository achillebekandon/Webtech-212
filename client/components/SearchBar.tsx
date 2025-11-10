export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      type="text"
      placeholder="Rechercher une équipe..."
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        padding: '10px',
        fontSize: '16px',
        width: '60%',
        marginBottom: '20px',
        borderRadius: '8px',
        border: '1px solid #ccc',
      }}
    />
  );
}
