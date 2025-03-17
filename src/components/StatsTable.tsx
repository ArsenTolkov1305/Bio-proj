import React from 'react';

interface StatsData {
  animal: string;
  speed: number;
  weight: number;
  size: number;
}

interface StatsTableProps {
  data: StatsData[];
}

const StatsTable: React.FC<StatsTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="px-6 py-4 text-left">Тварина</th>
            <th className="px-6 py-4 text-right">Швидкість (км/год)</th>
            <th className="px-6 py-4 text-right">Вага (кг)</th>
            <th className="px-6 py-4 text-right">Розмір (м)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr 
              key={row.animal}
              className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}
            >
              <td className="px-6 py-4 font-semibold text-blue-900">{row.animal}</td>
              <td className="px-6 py-4 text-right">{row.speed}</td>
              <td className="px-6 py-4 text-right">{row.weight}</td>
              <td className="px-6 py-4 text-right">{row.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;