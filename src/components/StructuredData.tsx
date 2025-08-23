'use client';

import { muscleData } from '@/data/muscles';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "근육 지도",
    "description": "인체 근육 구조와 운동법을 한눈에 볼 수 있는 인터랙티브 가이드",
    "url": "https://muscle-maps.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://muscle-maps.vercel.app/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Dataset",
      "name": "인체 근육 데이터베이스",
      "description": "인체 주요 근육들의 해부학적 정보, 기능, 운동법을 포함한 포괄적 데이터베이스",
      "keywords": ["근육", "해부학", "운동", "피트니스", "스트레칭"],
      "creator": {
        "@type": "Organization",
        "name": "근육 지도"
      },
      "distribution": {
        "@type": "DataDownload",
        "encodingFormat": "application/ld+json",
        "contentUrl": "https://muscle-maps.vercel.app"
      }
    }
  };

  const muscleDataStructured = muscleData.map(muscle => ({
    "@context": "https://schema.org",
    "@type": "MedicalEntity",
    "name": muscle.koreanName,
    "alternateName": muscle.name,
    "description": muscle.details.function,
    "anatomicalStructure": {
      "@type": "AnatomicalStructure",
      "name": muscle.koreanName,
      "alternateName": muscle.name
    },
    "medicalCondition": muscle.details.strengthenReasons.map(reason => ({
      "@type": "MedicalCondition",
      "name": reason
    })),
    "relatedDrug": muscle.details.exercises.map(exercise => ({
      "@type": "ExerciseAction",
      "name": exercise.koreanName,
      "alternateName": exercise.name,
      "description": exercise.instructions.join(' '),
      "exerciseType": exercise.type === 'strength' ? '근력 운동' : '스트레칭'
    }))
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {muscleDataStructured.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      ))}
    </>
  );
};

export default StructuredData;