export default function UserApp() {
  return <UserList users={users} />;
}

const users = [
  { id: 1, name: "Alice", role: "developer" },
  { id: 2, name: "Bob", role: "Manager" },
  { id: 3, name: "John", role: "Designer" },
  { id: 4, name: "Brown", role: "PM" },
];
const UserList = ({ users }) => {
  return users.map((user) => {
    const { id, name, role } = user;
    return (
      <div key={id} className="bg-gray-300 p-2 rounded">
        <li>
          <h1>{name}</h1>
          <p>{role}</p>
        </li>
      </div>
    );
  });
};
