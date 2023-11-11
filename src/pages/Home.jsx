import { PieChart } from "@mui/x-charts/PieChart";

function Home() {
  return (
    <div className="container">
      <h2 className="text-center mt-3 mb-4">Statistics of Records</h2>

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 60, label: "Funds" },
              { id: 1, value: 40, label: "Expenses" },
            ],
          },
        ]}
        width={400}
        height={200}
        className="chart"
      />
    </div>
  );
}

export default Home;
