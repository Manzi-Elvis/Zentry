const transactions = [
  {
    id: "TXN-1001",
    name: "Freelance payout",
    type: "Incoming",
    amount: "+$2,400.00",
    status: "Completed",
  },
  {
    id: "TXN-1002",
    name: "Currency conversion",
    type: "Exchange",
    amount: "-$320.00",
    status: "Completed",
  },
  {
    id: "TXN-1003",
    name: "Client invoice",
    type: "Incoming",
    amount: "+$980.00",
    status: "Pending",
  },
  {
    id: "TXN-1004",
    name: "Team payout",
    type: "Outgoing",
    amount: "-$740.00",
    status: "Completed",
  },
];

export default function TransactionsPage() {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm text-muted-foreground">Transactions</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Transaction history
          </h1>
        </div>

        <section className="mt-8 overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="hidden grid-cols-5 border-b px-5 py-3 text-sm text-muted-foreground md:grid">
            <p>ID</p>
            <p>Name</p>
            <p>Type</p>
            <p>Status</p>
            <p className="text-right">Amount</p>
          </div>

          <div className="divide-y">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="grid gap-3 px-5 py-4 text-sm md:grid-cols-5 md:items-center"
              >
                <p className="font-medium">{transaction.id}</p>
                <p>{transaction.name}</p>
                <p className="text-muted-foreground">{transaction.type}</p>
                <p className="text-muted-foreground">{transaction.status}</p>
                <p className="font-semibold md:text-right">{transaction.amount}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}