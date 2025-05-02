import { ChevronRight, Plus } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Dashboard = () => {
  const data1 = [
    { name: "Sat", pv: 1200 },
    { name: "Sun", pv: 1500 },
    { name: "Mon", pv: 800 },
    { name: "Tue", pv: 1700 },
    { name: "Wed", pv: 2000 },
    { name: "Thu", pv: 1300 },
    { name: "Fri", pv: 1600 },
  ];

  const appsData = [
    {
      id: 1,
      title: "Hotel Name",
      description: "Effortlessly manage bookings, guest preferences, and service requests.",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1746197755/Rectangle_859_jdlgvm.png",
    },
    {
      id: 2,
      title: "Drink Menu",
      description: "Effortlessly manage bookings, guest preferences, and service requests.",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1746197755/Rectangle_859_2_goiwkw.png",
    },
    {
      id: 3,
      title: "Food Menu",
      description: "Effortlessly manage bookings, guest preferences, and service requests.",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1746197755/Rectangle_859_1_yqchfg.png",
    },
    {
      id: 4,
      title: "Tourist spot",
      description: "Effortlessly manage bookings, guest preferences, and service requests.",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1746197755/Rectangle_34624377_zauztz.png",
    },
  ];

  return (
    <div className="">
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-gray-700">Welcome, Mr. Daniel Thomas</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column: Cards */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Custom apps */}
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-[20px] text-gray-600 mb-2 font-bold">Custom apps</h2>
              <div className="flex items-center justify-between">
              <span className="text-3xl font-semibold ">04</span>
                <div className="bg-orange-100 p-[5px] rounded-lg mr-3">
                    
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                
              </div>
            </div>

            {/* Generations */}
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-[20px] text-gray-600 mb-2 font-bold">Generations</h2>
              <div className="flex items-center justify-between">
              <span className="text-3xl font-semibold ">04</span>
                <div className="bg-green-100 p-[5px] rounded-lg mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
               
              </div>
            </div>

            {/* AI Activated */}
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-[20px] text-gray-600 mb-2 font-bold">AI Activated</h2>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm uppercase">YES</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full border border-gray-300 mr-2"></div>
                  <span className="text-sm uppercase">NO</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Custom Apps</h2>
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <div className="bg-gray-500 p-[2px] rounded mr-1">
                  <Plus className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm">Add App</span>
              </button>
            </div>

            <div className="space-y-4">
              {appsData.map((app) => (
                <div key={app.id} className="flex items-center rounded-lg overflow-hidden">
                  <img
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    className="w-32 h-24 "
                  />
                  <div className="flex-1 p-4">
                    <h3 className="font-medium text-lg text-gray-800">{app.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{app.description}</p>
                  </div>
                  <div className="pr-4">
                    <ChevronRight className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Chart and Stats */}
        <div className="w-full md:w-1/2">
          {/* Chart */}
          <div className="bg-white rounded-lg p-6 h-[400px] mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Chatbot Interaction</h3>
            <div style={{ height: "330px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data1}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  barSize={23}
                >
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 14 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 14 }}
                    tickFormatter={(value) => value}
                  />
                  <Tooltip
                    formatter={(value) => `${value} upgrades`}
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 14, color: "#6b7280" }} />
                  <Bar
                    dataKey="pv"
                    fill="#4C6291"
                    background={{ fill: "#f3f4f6" }}
                    name="Upgrades Per Day"
                    radius={[7, 7, 2, 2]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* AI Interactions */}
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-[20px] text-gray-600 mb-2">AI Interactions</h2>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-semibold">20.5k</span>
                <div className="bg-purple-100 p-[5px] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Button clicks */}
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-[20px] text-gray-600 mb-2">Button clicks</h2>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-semibold">1050</span>
                <div className="bg-pink-100 p-[5px] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Most Interacted Apps Today</h2>
            </div>

            <div className="space-y-4">
              {appsData.map((app) => (
                <div key={app.id} className="flex items-center rounded-lg overflow-hidden">
                  <img
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    className="w-32 h-24 "
                  />
                  <div className="flex-1 p-4">
                    <h3 className="font-medium text-lg text-gray-800">{app.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;