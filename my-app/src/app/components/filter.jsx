export default function FilterUser() {
  return <ActiveUsers users={users} />;
}
const users = [
  { id: 1, name: "Alice", active: "developer" },
  { id: 2, name: "Bob", active: "Manager" },
  { id: 3, name: "John", active: "Designer" },
  { id: 4, name: "Brown", active: "PM" },
];
const ActiveUsers = ({ users }) => {
  const activeUsers = users.filter((user) => user.active);
  return (
    <ul className="bg-gray-200 p-2 rounded">
      {activeUsers.map((user) => (
        <li className="text-emerald-700" key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};
