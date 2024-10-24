'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function People() {
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/members`;
    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
    };

    try {
      const res = await axios.get(url, { headers });
      setMembers(res.data.data);
    } catch (error) {
      console.error("Error fetching members data:", error);
    }
  };

  return (
    <div>
      <Navbar />
      {/* Principal Investigator Card */}
      {members.length > 0 && (
        <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
          <div className="flex justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Principal investigator</h2>
              <h1 className="text-4xl font-bold mb-2">{`${members[0].firstname} ${members[0].lastnames}`}</h1>
              <p className="text-xl mb-4">{members[0].position}</p>
              <p className="mb-4">{members[0].bio}</p>
              <div className="mt-4 flex space-x-4">
                {members[0].github && (
                  <a href={members[0].github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    GitHub
                  </a>
                )}
                {members[0].linkedin && (
                  <a href={members[0].linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LinkedIn
                  </a>
                )}
                {members[0].email && (
                  <a href={`mailto:${members[0].email}`} className="text-blue-600 hover:underline">
                    Email
                  </a>
                )}
              </div>
            </div>
            {/* Placeholder for headshot - you'll need to add this field to your API if you want to display it */}
            <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-gray-600">No Headshot</span>
            </div>
          </div>
        </div>
      )}

      {/* Lab Members Section */}
      <div className="max-w-6xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Lab members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.slice(1).map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-600">Headshot</span>
              </div>
              <h3 className="font-semibold text-lg">{`${member.firstname} ${member.lastnames}`}</h3>
              <p className="text-sm text-gray-600">{member.position}</p>
              <div className="mt-2 flex space-x-2">
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    GitHub
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
