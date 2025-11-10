interface Team {
  id: number;
  name: string;
  jersey: string;
}

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: 'white',
      padding: '10px',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease-in-out',
    }}>
      <h3>{team.name}</h3>
      <img src={team.jersey} alt={team.name} style={{ width: '100%', borderRadius: '8px' }} />
    </div>
  );
}
