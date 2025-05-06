
const Membership = () => {
  // Data object for all membership plans and current plan overview
  const plansData = {
    header: "Available Membership Plans",
    currentPlan: {
      startDate: "12 July, 2025",
      planName: "Membership (Free trial)",
      upgradeText: "Upgrade for more",
      endDate: "12 July, 2025",
    },
    plans: [
      {
        name: "We-Free",
        price: "$0",
        period: "/Month",
        buttonText: "Start Free Trial",
        features: [
          "2 Posting Generations",
          "1 Custom App",
          "AI Not Included",
          "Custom Design not Included",
          "No Color Section Only Logo",
          "WePro Branding",
        ],
      },
      {
        name: "We-Basic",
        price: "$70",
        period: "/Month",
        buttonText: "Start Free Trial",
        features: [
          "2 Posting Generations",
          "1 Custom App",
          "AI Not Included",
          "Custom Design not Included",
          "No Color Section Only Logo",
          "WePro Branding",
        ],
      },
      {
        name: "We-Pro",
        price: "$44.99",
        period: "/Month",
        buttonText: "Buy Now",
        features: [
          "35 Posting Generations",
          "4 Custom App",
          "AI Chatbot Included 1500 messages",
          "Custom Design Included",
          "No Color Section Only Logo",
          "No WePro Branding",
        ],
      },
      {
        name: "We-Enterprise",
        price: "Price On Request",
        period: "",
        buttonText: "Buy Now",
        features: [
          "Unlimited Posting Generations",
          "10 Custom App",
          "AI Chatbot Included unlimited Messages",
          "No Color Section Only Logo",
          "Individual Design as your business",
          "No WePro Branding",
        ],
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-semibold  text-gray-700 mb-12">
        {plansData.header}
      </h2>

      <div className=" rounded-lg p-4 mb-8 border border-gray-300">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-left">
            <p className="font-medium text-gray-700">Date of Starting</p>
            <p className="text-sm text-gray-600">{plansData.currentPlan.startDate}</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-gray-700">{plansData.currentPlan.planName}</p>
            <p className="text-sm text-gray-600">{plansData.currentPlan.upgradeText}</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-700">Date of end</p>
            <p className="text-sm text-gray-600">{plansData.currentPlan.endDate}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plansData.plans.map((plan, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#20325A] hover:scale-105 hover:text-white group w-[37vh] h-[55vh] flex flex-col"
          >
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span
                    className={`text-pink-500 ${
                      plan.name === "We-Enterprise" ? "text-xl" : "text-5xl"
                    } font-bold`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 text-sm group-hover:text-gray-300">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>
              <button
                className="w-full py-2 border border-gray-300 rounded-md text-gray-700 font-medium group-hover:bg-[#EB5A8E] group-hover:text-white transition-colors"
              >
                {plan.buttonText}
              </button>
            </div>

            <div className="px-6 pb-6">
              <h4 className="font-medium mb-4 border-b pb-2 group-hover:text-white">
                Core Features
              </h4>
              <ul className="space-y-2 text-gray-600 group-hover:text-gray-300">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
