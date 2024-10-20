import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface Publication {
  id: number;
  title: string;
  authors: string;
  conference: string;
  year: number;
  image: string;
  pdfLink: string;
  projectLink: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Publication 1",
    authors: "Author 1, Author 2, Author 3",
    conference: "Conference 1",
    year: 2024,
    image: "/walle.jpg",
    pdfLink: "#",
    projectLink: "#",
  },
  {
    id: 2,
    title: "Publication 2",
    authors: "Author 4, Author 5, Author 6",
    conference: "Conference 2",
    year: 2024,
    image: "/walle.jpg",
    pdfLink: "#",
    projectLink: "#",
  },
  // Add more publications as needed
];


export default function Publications() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Publications</h1>
        <div className="space-y-8">
          {publications.map((pub) => (
            <div key={pub.id} className="flex flex-col md:flex-row gap-4 border-b pb-8">
              <div className="md:w-1/3">
                <Image src={pub.image} alt={pub.title} width={300} height={200} className="w-full object-cover" />
              </div>
              <div className="md:w-2/3">
                <p className="text-sm text-gray-600 mb-2">{`${pub.conference} ${pub.year}`}</p>
                <Link href={`/publications/${pub.id}`}>
                  <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 hover:underline">{pub.title}</h2>
                </Link>
                <p className="text-sm text-gray-700 mb-4">{pub.authors}</p>
                <div className="flex gap-2">
                  <a href={pub.pdfLink} className="flex items-center gap-1 text-blue-600 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    PDF
                  </a>
                  <a href={pub.projectLink} className="flex items-center gap-1 text-blue-600 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
