const CoustomApp = () => {
    // Sample data for the app cards
    const appCards = [
      { id: 1, title: "Drink and Food Menu", count: 250, image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1746197755/Rectangle_34624374_upxaip.png" },
      { id: 2, title: "Drink and Food Menu", count: 250, image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1746197755/Rectangle_34624374_upxaip.png" },
      { id: 3, title: "Drink and Food Menu", count: 250, image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1746197755/Rectangle_34624374_upxaip.png" },
      { id: 4, title: "Drink and Food Menu", count: 250, image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1746197755/Rectangle_34624374_upxaip.png" },
      { id: 5, title: "Drink and Food Menu", count: 250, image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1746197755/Rectangle_34624374_upxaip.png" },
    ]
  
    return (
      <div className="bg-gray-50  rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-700">Custom Apps</h2>
          
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appCards.map((card) => (
            <div key={card.id} className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-700 text-[18px] font-medium">{card.title}</h3>
                <button className="text-gray-400 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </button>
              </div>
  
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-5xl font-semibold  text-gray-400">{card.count}</div>
                  <div className="text-gray-500 text-md">Times open</div>
                </div>
                <div>
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt="Food menu"
                    className="w-36 h-28 object-cover rounded-md"
                  />
                </div>
              </div>
  
              <div className="flex gap-3">
                <button className="flex-1 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Preview
                </button>
                <button className="flex-1 py-2 bg-[#20325A] text-white rounded-md font-medium hover:bg-[#1b2a49] transition-colors cursor-pointer">
                  Share
                </button>
              </div>
            </div>
          ))}
  
          {/* Create New App Card */}
          <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[220px]">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Create New App</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default CoustomApp
  