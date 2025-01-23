import { CheckCircle2 } from "lucide-react";

const skills = {
  Frontend: ["HTML", "JavaScript", "TypeScript", "Tailwind / CSS", "Python"],
  Backend: ["Node.js", "Express", "MySQL", "MariaDB", "ORM Prisma"],
  Tools: ["Git", "AWS", "Jest", "React", "Next.js"],
};

export default function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Habilidades</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">{category}</h3>
              <ul className="space-y-4">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
