import MuscleMap from "@/components/MuscleMap";
import { Dumbbell, Target, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <Dumbbell size={32} className="text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">근육 지도</h1>
              <p className="text-sm text-gray-600">
                인체 근육 구조와 운동법을 한눈에
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 소개 섹션 */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            인체 근육을 클릭하여 상세 정보를 확인하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            PT와 운동에 필요한 근육별 기능, 강화 방법, 스트레칭, 관련 운동을
            인터랙티브한 근육 지도를 통해 쉽게 학습할 수 있습니다.
          </p>

          {/* 특징 카드 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                정확한 해부학 정보
              </h3>
              <p className="text-gray-600 text-sm">
                각 근육의 기시점, 정지점, 작용을 정확하게 제공합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                맞춤형 운동법
              </h3>
              <p className="text-gray-600 text-sm">
                각 근육별로 최적화된 강화 운동과 스트레칭을 제공합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                PT 기록
              </h3>
              <p className="text-gray-600 text-sm">
                왜 해당 근육을 강화하고 스트레칭해야 하는지 배운 것을 기록하여
                설명합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 근육 지도 */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <MuscleMap />
        </section>

        {/* 추가 정보 */}
        <section className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              더 나은 운동을 위한 첫걸음
            </h3>
            <p className="text-lg opacity-90 mb-6">
              근육의 구조와 기능을 이해하면 더 효과적이고 안전한 운동을 할 수
              있습니다.
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  💪 강화 운동의 중요성
                </h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• 근력 향상과 체력 증진</li>
                  <li>• 부상 예방과 관절 안정성</li>
                  <li>• 일상생활 동작 개선</li>
                  <li>• 체형 교정과 자세 개선</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  🧘‍♀️ 스트레칭의 필요성
                </h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• 근육 긴장 완화와 이완</li>
                  <li>• 관절 가동범위 증진</li>
                  <li>• 혈액순환 개선</li>
                  <li>• 운동 후 회복 촉진</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Dumbbell size={24} />
            <span className="text-xl font-bold">근육 지도</span>
          </div>
          <p className="text-gray-400 text-sm">
            더 건강하고 효과적인 운동을 위한 근육 해부학 가이드
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2024 근육 지도. 개인 학습 목적으로 제작된 교육용 사이트입니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
