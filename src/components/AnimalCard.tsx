import React from 'react';

interface AnimalCardProps {
  name: string;
  image: string;
  record: string;
  description: string;
  facts: string[];
}

const AnimalCard: React.FC<AnimalCardProps> = ({ name, image, record, description, facts }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">{name}</h3>
        <p className="text-blue-700 font-semibold mb-2">{record}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div>
          <h4 className="font-semibold text-blue-900 mb-2">Цікаві факти:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;