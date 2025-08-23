'use client';

import React, { useState } from 'react';
import { muscleData, Muscle, MuscleGroup } from '@/data/muscles';
import MuscleDetail from './MuscleDetail';

interface MuscleMapProps {
  className?: string;
}

const MuscleMap: React.FC<MuscleMapProps> = ({ className = '' }) => {
  const [selectedMuscle, setSelectedMuscle] = useState<Muscle | null>(null);
  const [hoveredMuscle, setHoveredMuscle] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'front' | 'back'>('front');

  const handleMuscleClick = (muscle: Muscle) => {
    setSelectedMuscle(muscle);
  };

  const handleCloseDetail = () => {
    setSelectedMuscle(null);
  };

  const handleViewChange = (view: 'front' | 'back') => {
    setCurrentView(view);
    setSelectedMuscle(null);
    setHoveredMuscle(null);
  };

  const handleMuscleHover = (muscleId: string) => {
    // 같은 근육의 좌우를 함께 호버
    const baseName = muscleId.replace(/-left|-right/, '');
    setHoveredMuscle(baseName);
  };

  const handleMuscleLeave = () => {
    setHoveredMuscle(null);
  };

  const isHovered = (muscleId: string) => {
    if (!hoveredMuscle) return false;
    const baseName = muscleId.replace(/-left|-right/, '');
    return hoveredMuscle === baseName;
  };

  const filteredMuscles = muscleData.filter(muscle => muscle.view === currentView);

  // 근육명을 항상 표시 (양쪽 모두)
  const getDisplayName = (muscle: Muscle): string => {
    return muscle.koreanName;
  };

  // sample.html의 색상 스타일을 참고하여 근육별 색상 지정
  const getMuscleColor = (muscleId: string): string => {
    // sample.html의 색상 매핑을 참고
    if (muscleId.includes('pectoralis-major')) return 'rgba(255, 99, 132, 0.7)'; // 대흉근 - 빨강
    if (muscleId.includes('pectoralis-minor')) return 'rgba(255, 159, 64, 0.7)'; // 소흉근 - 주황
    if (muscleId.includes('deltoids')) return 'rgba(54, 162, 235, 0.7)'; // 삼각근 - 파랑
    if (muscleId.includes('biceps')) return 'rgba(255, 206, 86, 0.7)'; // 이두근 - 노랑
    if (muscleId.includes('triceps')) return 'rgba(75, 192, 192, 0.7)'; // 삼두근 - 청록
    if (muscleId.includes('rectus-abdominis')) return 'rgba(75, 192, 192, 0.7)'; // 복근 - 청록
    if (muscleId.includes('forearms')) return 'rgba(153, 102, 255, 0.7)'; // 전완근 - 보라
    if (muscleId.includes('serratus')) return 'rgba(255, 159, 64, 0.7)'; // 전거근 - 주황
    
    // 후면 근육들
    if (muscleId.includes('trapezius')) return 'rgba(255, 99, 132, 0.7)'; // 승모근 - 빨강
    if (muscleId.includes('latissimus')) return 'rgba(54, 162, 235, 0.7)'; // 광배근 - 파랑
    if (muscleId.includes('rhomboids')) return 'rgba(255, 206, 86, 0.7)'; // 능형근 - 노랑
    if (muscleId.includes('erector')) return 'rgba(255, 159, 64, 0.7)'; // 척추기립근 - 주황
    
    // 다리 근육들
    if (muscleId.includes('quadriceps')) return 'rgba(255, 159, 64, 0.7)'; // 대퇴사두근 - 주황
    if (muscleId.includes('hamstrings')) return 'rgba(153, 102, 255, 0.7)'; // 햄스트링 - 보라
    if (muscleId.includes('gluteus-maximus')) return 'rgba(255, 99, 132, 0.7)'; // 대둔근 - 빨강
    if (muscleId.includes('gluteus-medius')) return 'rgba(255, 206, 86, 0.7)'; // 중둔근 - 노랑
    if (muscleId.includes('adductors')) return 'rgba(75, 192, 192, 0.7)'; // 내전근군 - 청록
    if (muscleId.includes('calves')) return 'rgba(54, 162, 235, 0.7)'; // 종아리 - 파랑
    if (muscleId.includes('tibialis')) return 'rgba(153, 102, 255, 0.7)'; // 경골근 - 보라
    
    return 'rgba(156, 163, 175, 0.7)'; // 기본 회색
  };

  const getMuscleGroupColor = (group: MuscleGroup): string => {
    const colorMap = {
      [MuscleGroup.CHEST]: 'bg-red-500',
      [MuscleGroup.BACK]: 'bg-blue-500',
      [MuscleGroup.SHOULDERS]: 'bg-yellow-500',
      [MuscleGroup.ARMS]: 'bg-green-500',
      [MuscleGroup.CORE]: 'bg-purple-500',
      [MuscleGroup.LEGS]: 'bg-orange-500',
      [MuscleGroup.GLUTES]: 'bg-pink-500',
    };
    return colorMap[group];
  };

  return (
    <div className={`relative ${className}`}>
      {/* 근육 지도 컨테이너 */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* 전면/후면 선택 버튼 */}
        <div className="flex justify-center gap-1 mb-8 bg-gray-100 p-1 rounded-xl border border-gray-200">
          <button
            onClick={() => handleViewChange('front')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentView === 'front'
                ? 'bg-gray-800 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
            }`}
          >
            전면 (Front)
          </button>
          <button
            onClick={() => handleViewChange('back')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentView === 'back'
                ? 'bg-gray-800 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
            }`}
          >
            후면 (Back)
          </button>
        </div>

        {/* SVG 기반 인체 실루엣 */}
        <div className="relative">
          <svg
            viewBox="0 0 100 110"
            className="w-full h-auto border border-gray-300 rounded-lg bg-white"
            style={{ aspectRatio: '1/1.3' }}
          >
            {/* 인체 윤곽 */}
            <g className="body-outline" stroke="#cbd5e1" strokeWidth="2" fill="#f8fafc">
              {/* 머리 */}
              <ellipse cx="50" cy="8" rx="8" ry="10" />
              {/* 목 */}
              <rect x="46" y="16" width="8" height="4" rx="4" />
              {/* 몸통 */}
              <path d="M35 20 Q50 18, 65 20 L68 45 Q65 50, 50 50 Q35 50, 32 45 Z" />
              {/* 허리 */}
              <path d="M38 45 Q50 43, 62 45 L60 60 Q50 58, 40 60 Z" />
              {/* 왼쪽 팔 */}
              <rect x="22" y="22" width="6" height="25" rx="3" />
              <rect x="20" y="45" width="5" height="18" rx="2.5" />
              {/* 오른쪽 팔 */}
              <rect x="72" y="22" width="6" height="25" rx="3" />
              <rect x="75" y="45" width="5" height="18" rx="2.5" />
              {/* 왼쪽 다리 */}
              <rect x="35" y="60" width="8" height="45" rx="4" />
              {/* 오른쪽 다리 */}
              <rect x="57" y="60" width="8" height="45" rx="4" />
            </g>

            {/* 중앙선 */}
            {currentView === 'front' && (
              <line x1="50" y1="20" x2="50" y2="55" stroke="#94a3b8" strokeWidth="0.5" opacity="0.4" />
            )}
            {currentView === 'back' && (
              <line x1="50" y1="20" x2="50" y2="55" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
            )}
            
            {/* 근육 영역들 */}
            {filteredMuscles.map((muscle) => (
            <g key={muscle.id}>
              {/* 근육 영역 */}
              <rect
                x={muscle.location.x}
                y={muscle.location.y}
                width={muscle.location.width}
                height={muscle.location.height}
                fill={getMuscleColor(muscle.id)}
                className={`cursor-pointer transition-all duration-200 ${
                  isHovered(muscle.id) ? 'opacity-90' : 'opacity-80'
                } ${selectedMuscle?.id === muscle.id ? 'opacity-100' : ''}`}
                rx="1"
                onClick={() => handleMuscleClick(muscle)}
                onMouseEnter={() => handleMuscleHover(muscle.id)}
                onMouseLeave={handleMuscleLeave}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleMuscleClick(muscle);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`${muscle.koreanName} 근육 정보 보기`}
              />
              
              {/* 근육 이름 라벨 - 항상 표시 */}
              {getDisplayName(muscle) && (
                <text
                  x={muscle.location.x + muscle.location.width / 2}
                  y={muscle.location.y + muscle.location.height / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`font-medium pointer-events-none transition-all duration-200 ${
                    isHovered(muscle.id) ? 'fill-white text-shadow' : 'fill-gray-800'
                  }`}
                  style={{ fontSize: muscle.location.width > 15 ? '2.2px' : '1.8px' }}
                >
                  {getDisplayName(muscle)}
                </text>
              )}
            </g>
          ))}
          </svg>

          {/* 범례 */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {Object.values(MuscleGroup).map((group) => {
              const groupMuscles = filteredMuscles.filter(m => m.group === group);
              const groupNames = {
                [MuscleGroup.CHEST]: '가슴',
                [MuscleGroup.BACK]: '등',
                [MuscleGroup.SHOULDERS]: '어깨',
                [MuscleGroup.ARMS]: '팔',
                [MuscleGroup.CORE]: '복부',
                [MuscleGroup.LEGS]: '다리',
                [MuscleGroup.GLUTES]: '둔부',
              };
              
              if (groupMuscles.length === 0) return null;
              
              return (
                <div key={group} className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded ${getMuscleGroupColor(group).split(' ')[0]}`} />
                  <span className="text-sm font-medium text-gray-700">
                    {groupNames[group]} ({groupMuscles.length})
                  </span>
                </div>
              );
            })}
          </div>

          {/* 사용 가이드 */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">사용 방법</h3>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• 근육 영역을 클릭하면 상세 정보를 확인할 수 있습니다</li>
              <li>• 마우스를 올리면 근육 이름이 표시됩니다</li>
              <li>• 전면/후면 버튼으로 시점을 변경할 수 있습니다</li>
              <li>• 색상별로 근육 그룹이 구분되어 있습니다</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 근육 상세 정보 모달 */}
      {selectedMuscle && (
        <MuscleDetail
          muscle={selectedMuscle}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

export default MuscleMap;