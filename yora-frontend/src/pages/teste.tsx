interface UserProps {
  name: string;
  age?: number; // A propriedade 'age' é opcional
}

const UserProfile: React.FC<UserProps> = ({ name, age }) => {
  // Tentativa de acessar a propriedade 'age' sem verificar sua existência
  const displayAge = age ? `Idade: ${age}` : "";

  return (
    <div>
      <h1>{name}</h1>
      {displayAge}
    </div>
  );
};

export default UserProfile;
