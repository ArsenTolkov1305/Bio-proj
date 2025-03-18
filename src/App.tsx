import { Github, Instagram, Twitter } from 'lucide-react';
import AnimalCard from './components/AnimalCard';
import StatsTable from './components/StatsTable';

const animals = [
  {
    name: 'Гепард',
    image: 'https://greenpost.ua/upload/media/2024/12/04/gepard-3.jpg',
    record: 'Найшвидша тварина на планеті',
    description: 'Може розвивати швидкість до 120 км/год',
    facts: ['Розганяється з 0 до 96 км/год за 3 секунди', 'Має унікальну будову тіла для швидкого бігу', 'Використовує хвіст як кермо під час погоні']
  },
  {
    name: 'Слон',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46',
    record: 'Найбільша сухопутна тварина',
    description: 'Може важити до 6000 кг',
    facts: ['Має найбільший мозок серед наземних тварин', 'Може використовувати хобот як руку', 'Живе до 70 років']
  },
  {
    name: 'Синій кит',
    image: 'https://images.unsplash.com/photo-1568430328012-21ed450453ea',
    record: 'Найбільша тварина в світі',
    description: 'Досягає довжини 30 метрів і ваги 150,000 кг',
    facts: ['Його серце розміром з автомобіль', 'Може видавати звуки гучністю до 188 дБ', 'Харчується крилем']
  },
  {
    name: 'Страус',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKqxL3IHLKW0sI1Wy5cJh04dLFXTUYmktjA&s',
    record: 'Найшвидший птах на землі',
    description: 'Розвиває швидкість до 70 км/год',
    facts: ['Найбільше яйце серед сучасних птахів', 'Не вміє літати', 'Має найсильніший удар ногою']
  },
  {
    name: 'Колібрі',
    image: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a',
    record: 'Найменший птах',
    description: 'Деякі види важать менше 2 грамів',
    facts: ["Може зависати в повітрі', 'Серце б\'ється до 1200 разів на хвилину', 'Махає крилами до 80 разів в секунду"]
  },
  {
    name: 'Мураха',
    image: 'https://ukr.media/static/ba/aimg/4/1/0/410529_1.jpg',
    record: 'Найсильніша тварина відносно своєї ваги',
    description: 'Може підняти вагу в 50 разів більшу за власну',
    facts: ['Має два шлунки', 'Не спить у звичному розумінні', 'Живе в колоніях до мільйона особин']
  }
];

const statsData = [
  { animal: 'Гепард', speed: 120, weight: 60, size: 1.5 },
  { animal: 'Слон', speed: 40, weight: 6000, size: 3.5 },
  { animal: 'Синій кит', speed: 50, weight: 150000, size: 30 }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564349683136-77e08dba1ef7')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6">Тварини-рекордсмени</h1>
          <p className="text-xl md:text-2xl text-blue-800 mb-8">
            Ми створили цей проект, щоб показати неймовірні досягнення тваринного світу. 
            Тут ви дізнаєтесь про найшвидших, найсильніших і найвитриваліших тварин, 
            які встановили рекорди в природі.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Наша Команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Арсен Толков', role: 'Developer, UI/UX designer' },
              { name: 'Роман Білецький', role: 'Project Manager' },
              { name: 'Кирило Степанов', role: 'Content Manager' }
            ].map((member) => (
              <div key={member.name} className="text-center p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{member.name}</h3>
                <p className="text-blue-700">{member.role}</p>
              </div>
            ))}
          </div>
          <p className="text-xl text-center text-blue-800 mt-12 max-w-3xl mx-auto">
            Ми хочемо надихнути людей цікавитися природою та її неймовірними досягненнями.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Рекордсмени Природи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.map((animal) => (
              <AnimalCard key={animal.name} {...animal} />
            ))}
          </div>
          
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">Порівняльна Статистика</h3>
            <StatsTable data={statsData} />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">© 2025 Тварини-рекордсмени. Усі права захищені.</p>
              <p className="text-sm opacity-80">
                Матеріали сайту можна використовувати лише з дозволу авторів.
              </p>
            </div>
            <div className="md:text-right">
              <div className="flex gap-4 justify-start md:justify-end mb-4">
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Github size={24} />
                </a>
              </div>
              <p className="text-sm">
                Контакти: <a href="mailto:tolkov1109@gmail.com" className="hover:text-blue-300 transition-colors">tolkov1109@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;