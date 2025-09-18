import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from '@/components/ui/icon';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the correct form of 'to be' for 'I'?",
    options: ["am", "is", "are", "be"],
    correct: 0
  },
  {
    id: 2,
    question: "Choose the correct sentence:",
    options: ["I have 25 years old", "I am 25 years old", "I has 25 years old", "I be 25 years old"],
    correct: 1
  },
  {
    id: 3,
    question: "What's the past tense of 'go'?",
    options: ["goed", "went", "gone", "going"],
    correct: 1
  }
];

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setTestCompleted(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setTestCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-gray-800">English Tutor</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">Обо мне</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Тарифы</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Изучай английский с 
              <span className="text-primary"> профессионалом</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
              Персональные уроки, современные методики и быстрые результаты
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Icon name="Play" className="mr-2" size={20} />
                Начать обучение
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Бесплатная консультация
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-600">Учеников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-gray-600">Результат</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/img/fe6a32ef-57e4-47f7-bb0e-fd47637d7651.jpg" 
                  alt="English Tutor" 
                  className="rounded-2xl shadow-xl animate-float"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-gray-800">Обо мне</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Привет! Меня зовут Анна, и я профессиональный преподаватель английского языка 
                  с 5-летним опытом работы. За это время я помогла более 500 ученикам достичь 
                  своих целей в изучении языка.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                    <span>Сертифицированный преподаватель CELTA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                    <span>Опыт работы с учениками всех уровней</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                    <span>Индивидуальный подход к каждому</span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="User" className="mr-2" size={20} />
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Проверь свой уровень</h3>
              <p className="text-lg text-gray-600">
                Пройди быстрый тест и узнай, насколько хорошо ты знаешь английский
              </p>
            </div>

            <Card className="max-w-2xl mx-auto shadow-xl">
              <CardHeader className="bg-gradient-to-r from-primary to-accent-teal text-white">
                <CardTitle className="text-center text-xl">
                  {testCompleted ? 'Результат теста' : `Вопрос ${currentQuestion + 1} из ${questions.length}`}
                </CardTitle>
                {!testCompleted && (
                  <Progress 
                    value={((currentQuestion) / questions.length) * 100} 
                    className="mt-2"
                  />
                )}
              </CardHeader>
              <CardContent className="p-8">
                {!testCompleted ? (
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-center">
                      {questions[currentQuestion].question}
                    </h4>
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          variant={selectedAnswer === index ? "default" : "outline"}
                          className={`w-full text-left justify-start p-4 h-auto ${
                            selectedAnswer === index ? 'bg-primary text-white' : ''
                          }`}
                          onClick={() => handleAnswerSelect(index)}
                        >
                          <span className="mr-3 font-bold">
                            {String.fromCharCode(65 + index)}.
                          </span>
                          {option}
                        </Button>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={handleNextQuestion}
                      disabled={selectedAnswer === null}
                    >
                      {currentQuestion === questions.length - 1 ? 'Завершить тест' : 'Следующий вопрос'}
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                    </Button>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="space-y-4">
                      <Icon name="Trophy" className="mx-auto text-primary" size={64} />
                      <h4 className="text-2xl font-bold">Тест завершен!</h4>
                      <div className="text-4xl font-bold text-primary">
                        {score} из {questions.length}
                      </div>
                      <p className="text-gray-600">
                        {score === questions.length 
                          ? 'Отлично! У вас высокий уровень!' 
                          : score >= questions.length / 2 
                          ? 'Хороший результат! Есть куда стремиться.' 
                          : 'Не расстраивайтесь, мы поможем вам улучшиться!'}
                      </p>
                    </div>
                    <div className="flex gap-4 justify-center">
                      <Button onClick={resetTest} variant="outline">
                        <Icon name="RotateCcw" className="mr-2" size={20} />
                        Пройти заново
                      </Button>
                      <Button className="bg-primary hover:bg-primary/90">
                        <Icon name="Calendar" className="mr-2" size={20} />
                        Записаться на урок
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Тарифы и цены</h3>
              <p className="text-lg text-gray-600">
                Выберите подходящий формат обучения
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-50">
                  <CardTitle className="text-center">Базовый</CardTitle>
                  <CardDescription className="text-center">Для начинающих</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary">2000₽</div>
                    <div className="text-gray-500">за урок</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      60 минут занятие
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      Индивидуальные уроки
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      Домашние задания
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">Выбрать</Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow border-primary">
                <Badge className="absolute top-4 right-4 bg-primary">Популярный</Badge>
                <CardHeader className="bg-gradient-to-r from-primary to-accent-teal text-white">
                  <CardTitle className="text-center">Стандартный</CardTitle>
                  <CardDescription className="text-center text-white/90">Оптимальный выбор</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary">1800₽</div>
                    <div className="text-gray-500">за урок</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      60 минут занятие
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      Индивидуальные уроки
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      Домашние задания
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      Разговорная практика
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">Выбрать</Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-accent-teal to-accent-blue text-white">
                  <CardTitle className="text-center">Премиум</CardTitle>
                  <CardDescription className="text-center text-white/90">Максимальный результат</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary">1500₽</div>
                    <div className="text-gray-500">за урок</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      60 минут занятие
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      Индивидуальные уроки
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      Домашние задания
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      Разговорная практика
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={20} />
                      24/7 поддержка
                    </li>
                  </ul>
                  <Button className="w-full bg-accent-teal hover:bg-accent-teal/90">Выбрать</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Свяжитесь со мной</h3>
            <p className="text-lg text-gray-600 mb-8">
              Готовы начать изучение английского? Напишите мне!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="Phone" className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-gray-600">+7 (999) 123-45-67</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="Mail" className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600">anna@englishtutor.ru</p>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в WhatsApp
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="BookOpen" size={28} />
            <h1 className="text-2xl font-bold">English Tutor</h1>
          </div>
          <p className="text-white/80 mb-4">
            Профессиональное изучение английского языка с индивидуальным подходом
          </p>
          <p className="text-white/60 text-sm">
            © 2024 English Tutor. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;