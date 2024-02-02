import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Feline" isCoach />
    </div>
  );
}

function Greeting({ name, isCoach }) {
  return <h1>Hello {isCoach ? "Coach" : name}!</h1>;
}
