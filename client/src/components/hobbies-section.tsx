import { Heart, Book, Target, Zap } from "lucide-react";

export default function HobbiesSection() {
  const hobbies = [
    {
      name: "Running",
      description: "Completed the San Francisco Half Marathon",
      icon: <Target className="text-red-600 w-8 h-8" />,
      achievement: "13.1 miles through the iconic streets of SF",
      color: "red"
    },
    {
      name: "Triathlon",
      description: "Completed the Sandman Triathlon",
      icon: <Zap className="text-blue-600 w-8 h-8" />,
      achievement: "0.75 miles swim, 13 miles bike, 4 miles run",
      color: "blue"
    },
    {
      name: "Reading",
      description: "Love Dan Brown's thrilling mysteries",
      icon: <Book className="text-green-600 w-8 h-8" />,
      achievement: "Angels & Demons, Da Vinci Code, and more",
      color: "green"
    },
    {
      name: "Juggling",
      description: "Currently learning Mills Mess pattern",
      icon: <Heart className="text-purple-600 w-8 h-8" />,
      achievement: "Mastering complex 3-ball patterns",
      color: "purple"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Personal Interests</h2>
          <p className="text-lg text-gray-600">Beyond the code - what keeps me energized and inspired</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100 text-center">
                <div className={`w-16 h-16 bg-${hobby.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{hobby.name}</h3>
                <p className="text-gray-700 mb-3">{hobby.description}</p>
                <p className={`text-${hobby.color}-600 font-medium text-sm`}>{hobby.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}