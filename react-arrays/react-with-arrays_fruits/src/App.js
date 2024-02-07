import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      name: "🍌 banana",
      id: 1,
      color: "yellow",
    },
    {
      name: "🍒 cherry",
      id: 2,
      color: "red",
    },
    {
      name: "🍏 apple",
      id: 3,
      color: "limegreen",
    },
    { name: "🍓 strawberry", id: 4, color: "hotpink" },
    {
      name: "🫐 blueberry",
      id: 5,
      color: "darkorchid",
    },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
