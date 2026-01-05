export default function Orders() {
  return <ReducedTotal />;
}

const orders = [
  { id: 1, amount: 50 },
  { id: 2, amount: 30 },
  { id: 3, amount: 70 },
];
const ReducedTotal = () => {
  const total = orders.reduce((sum, order) => sum + order.amount, 0);

  const byId = orders.reduce((acc, order) => {
    acc[order.id] = order.amount;
    return acc;
  }, {});

  return (
    <div>
      <h1>Order Summary</h1>
      <p>Total amount:${total}</p>
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(byId, null, 2)}
      </pre>
    </div>
  );
};
