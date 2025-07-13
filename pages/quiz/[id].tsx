import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { questions } from '@/lib/questions';
import { motion } from 'framer-motion';

export default function QuizQuestion() {
  const router = useRouter();
  const { id } = router.query;

  const questionIndex = parseInt(id as string, 10) - 1;
  const question = questions[questionIndex];
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('trippie-answers');
    if (stored) setAnswers(JSON.parse(stored));
  }, []);

  function handleAnswer(value: string) {
    const updated = [...answers];
    updated[questionIndex] = value;
    localStorage.setItem('trippie-answers', JSON.stringify(updated));

    if (questionIndex + 1 < questions.length) {
      router.push(`/quiz/${questionIndex + 2}`);
    } else {
      router.push('/result');
    }
  }

  if (!question || isNaN(questionIndex)) return <p className="p-6">Loading...</p>;

  return (
    <main className="min-h-screen bg-youlight flex items-center justify-center px-4 py-10 font-poppins">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-xl bg-youwhite shadow-xl rounded-3xl p-8"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-youdark mb-6 leading-snug">
          {question.question}
        </h2>

        <div className="flex flex-col gap-4">
          {question.choices.map((choice, idx) => (
            <motion.button
              key={idx}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleAnswer(choice.value)}
              className="text-sm md:text-base font-medium font-poppins border border-yougray bg-white text-youdark rounded-lg px-4 py-2 hover:bg-youpurple hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {choice.text}
            </motion.button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6 text-right">
          Question {questionIndex + 1} of {questions.length}
        </p>
      </motion.div>
    </main>
  );
}