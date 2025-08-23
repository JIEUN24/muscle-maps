'use client';

import React from 'react';
import { Muscle, Exercise, MuscleGroup } from '@/data/muscles';
import { X, Dumbbell, ArrowUpDown } from 'lucide-react';

interface MuscleDetailProps {
  muscle: Muscle;
  onClose: () => void;
}

const MuscleDetail: React.FC<MuscleDetailProps> = ({ muscle, onClose }) => {
  const getDifficultyColor = (difficulty: Exercise['difficulty']) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: Exercise['difficulty']) => {
    switch (difficulty) {
      case 'beginner':
        return '초급';
      case 'intermediate':
        return '중급';
      case 'advanced':
        return '고급';
      default:
        return '알 수 없음';
    }
  };

  const getMuscleGroupName = (group: MuscleGroup) => {
    const groupNames = {
      [MuscleGroup.CHEST]: '가슴',
      [MuscleGroup.BACK]: '등',
      [MuscleGroup.SHOULDERS]: '어깨',
      [MuscleGroup.ARMS]: '팔',
      [MuscleGroup.CORE]: '복부',
      [MuscleGroup.LEGS]: '다리',
      [MuscleGroup.GLUTES]: '둔부',
    };
    return groupNames[group];
  };

  const strengthExercises = muscle.details.exercises.filter(ex => ex.type === 'strength');
  const stretchExercises = muscle.details.exercises.filter(ex => ex.type === 'stretch');

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="muscle-detail-title"
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex justify-between items-center">
          <div>
            <h1 id="muscle-detail-title" className="text-xl sm:text-2xl font-bold text-gray-900">{muscle.koreanName}</h1>
            <p className="text-xs sm:text-sm text-gray-500">{muscle.name} • {getMuscleGroupName(muscle.group)}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="근육 상세 정보 닫기"
            autoFocus
          >
            <X size={24} />
          </button>
        </div>

        {/* 내용 */}
        <div className="px-4 sm:px-6 py-4 space-y-6 sm:space-y-8">
          {/* 기능 설명 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">기능</h2>
            <p className="text-gray-700 leading-relaxed">{muscle.details.function}</p>
          </section>

          {/* 해부학적 정보 */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">해부학적 정보</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">기시점 (근육이 시작하는 부위)</h3>
                <p className="text-gray-600 text-sm">{muscle.details.anatomy.origin}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">정지점 (근육이 끝나는 부위)</h3>
                <p className="text-gray-600 text-sm">{muscle.details.anatomy.insertion}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">작용</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  {muscle.details.anatomy.action.map((action, index) => (
                    <li key={index}>• {action}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 강화가 필요한 이유 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">강화해야 하는 이유</h2>
            <ul className="space-y-2">
              {muscle.details.strengthenReasons.map((reason, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Dumbbell size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 스트레칭이 필요한 이유 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">스트레칭이 필요한 이유</h2>
            <ul className="space-y-2">
              {muscle.details.stretchingReasons.map((reason, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <ArrowUpDown size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 관련 운동 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">관련 운동</h2>
            
            {/* 강화 운동 */}
            {strengthExercises.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center space-x-2">
                  <Dumbbell size={20} className="text-blue-500" />
                  <span>강화 운동</span>
                </h3>
                <div className="grid gap-4">
                  {strengthExercises.map((exercise, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{exercise.koreanName}</h4>
                          <p className="text-sm text-gray-500">{exercise.name}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                          {getDifficultyText(exercise.difficulty)}
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-1">실행 방법</h5>
                          <ol className="text-sm text-gray-600 space-y-1">
                            {exercise.instructions.map((instruction, idx) => (
                              <li key={idx} className="flex">
                                <span className="text-blue-500 mr-2 font-medium">{idx + 1}.</span>
                                <span>{instruction}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                        
                        {exercise.tips.length > 0 && (
                          <div>
                            <h5 className="font-medium text-gray-700 mb-1">주의사항</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {exercise.tips.map((tip, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-yellow-500 mt-1">💡</span>
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 스트레칭 운동 */}
            {stretchExercises.length > 0 && (
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center space-x-2">
                  <ArrowUpDown size={20} className="text-green-500" />
                  <span>스트레칭</span>
                </h3>
                <div className="grid gap-4">
                  {stretchExercises.map((exercise, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{exercise.koreanName}</h4>
                          <p className="text-sm text-gray-500">{exercise.name}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                          {getDifficultyText(exercise.difficulty)}
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-1">실행 방법</h5>
                          <ol className="text-sm text-gray-600 space-y-1">
                            {exercise.instructions.map((instruction, idx) => (
                              <li key={idx} className="flex">
                                <span className="text-green-500 mr-2 font-medium">{idx + 1}.</span>
                                <span>{instruction}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                        
                        {exercise.tips.length > 0 && (
                          <div>
                            <h5 className="font-medium text-gray-700 mb-1">주의사항</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {exercise.tips.map((tip, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-yellow-500 mt-1">💡</span>
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>

        {/* 하단 여백 */}
        <div className="h-4"></div>
      </div>
    </div>
  );
};

export default MuscleDetail;