import './Hero.css';

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20 px-6 text-center">
      <p className="text-xl mb-6">
        Together, we empower the youth to lead innovation for a better world.
      </p>
      <a href="/get-involved" className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200">
        Get Involved
      </a>
    </section>
  );
}
