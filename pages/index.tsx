import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-youlight font-poppins">
      <button
        onClick={() => router.push('/quiz/1')}
        className="bg-youpurple text-white font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
      >
        Start Trippie Quiz
      </button>
    </div>
  );
}