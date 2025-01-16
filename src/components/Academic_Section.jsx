import React from 'react';

function AcademicSection() {
  const academicData = [
    {
      title: 'B.E - Electronic and Telecommunication Engineering',
      duration: 'Nov. 2022 – May 2026',
      institution: 'Pravara Rural Engineering College',
      location: 'Loni, Maharashtra',
    },
    {
      title: 'Higher Secondary Certificate Examination',
      duration: 'Jun. 2021 – Feb. 2022',
      institution: 'D.K. More Janata Junior College',
      location: 'Vadgoanpan Sangamner, Maharashtra',
    },
    {
      title: 'Secondary Certificate Examination',
      duration: 'Jun. 2019 – Feb. 2020',
      institution: 'D.K. More Janata Vidyalaya',
      location: 'Vadgoanpan Sangamner, Maharashtra',
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5">
      <h1 className="text-2xl font-bold text-center mb-8">Academic Section</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {academicData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-1">{item.duration}</p>
            <p className="text-gray-600 mb-1">{item.institution}</p>
            <p className="text-gray-600">{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademicSection;
