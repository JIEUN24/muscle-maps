export interface Muscle {
  id: string;
  name: string;
  koreanName: string;
  group: MuscleGroup;
  location: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  view: 'front' | 'back';
  side?: 'left' | 'right';
  details: {
    function: string;
    strengthenReasons: string[];
    stretchingReasons: string[];
    exercises: Exercise[];
    anatomy: {
      origin: string;
      insertion: string;
      action: string[];
    };
  };
}

export interface Exercise {
  name: string;
  koreanName: string;
  type: 'strength' | 'stretch';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructions: string[];
  tips: string[];
}

export enum MuscleGroup {
  CHEST = 'chest',
  BACK = 'back',
  SHOULDERS = 'shoulders',
  ARMS = 'arms',
  CORE = 'core',
  LEGS = 'legs',
  GLUTES = 'glutes'
}

export const muscleData: Muscle[] = [
  {
    id: 'pectoralis-major',
    name: 'Pectoralis Major',
    koreanName: '대흉근',
    group: MuscleGroup.CHEST,
    view: 'front',
    location: {
      x: 32,
      y: 20,
      width: 36,
      height: 16
    },
    details: {
      function: '어깨 관절의 내전, 굴곡, 내회전을 담당하는 주요 가슴 근육',
      strengthenReasons: [
        '상체의 pushing 동작 향상',
        '어깨 안정성 증진',
        '일상생활에서의 밀기 동작 개선',
        '운동 퍼포먼스 향상'
      ],
      stretchingReasons: [
        '어깨 굽음 자세 개선',
        '가슴 근육 단축 방지',
        '어깨 가동범위 증진',
        '상체 균형 회복'
      ],
      exercises: [
        {
          name: 'Push-up',
          koreanName: '푸쉬업',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '플랭크 자세에서 시작',
            '손은 어깨 바로 아래 위치',
            '몸을 일직선으로 유지하며 가슴을 바닥으로 내림',
            '가슴이 바닥에 닿기 직전까지 내린 후 원래 자세로 복귀'
          ],
          tips: [
            '코어를 단단히 유지하세요',
            '목은 자연스럽게 중립 위치를 유지하세요',
            '내려갈 때는 천천히, 올라올 때는 빠르게'
          ]
        },
        {
          name: 'Chest Stretch',
          koreanName: '가슴 스트레칭',
          type: 'stretch',
          difficulty: 'beginner',
          instructions: [
            '벽 앞에 서서 한쪽 팔을 벽에 대고',
            '팔꿈치는 어깨 높이로 유지',
            '몸을 벽 반대쪽으로 돌려 가슴 근육을 늘림',
            '15-30초 유지 후 반대쪽도 실시'
          ],
          tips: [
            '무리하지 말고 편안한 범위에서 스트레칭하세요',
            '호흡을 깊게 유지하세요'
          ]
        }
      ],
      anatomy: {
        origin: '쇄골(어깨뼈), 흉골(가슴뼈), 늑연골(갈비뼈)',
        insertion: '상완골 대결절능(팔뚝뼈 윗부분)',
        action: ['어깨관절 내전', '굴곡', '내회전']
      }
    }
  },
  {
    id: 'latissimus-dorsi-left',
    name: 'Latissimus Dorsi',
    koreanName: '광배근',
    group: MuscleGroup.BACK,
    view: 'back',
    side: 'left',
    location: {
      x: 26,
      y: 26,
      width: 12,
      height: 28
    },
    details: {
      function: '어깨 관절의 내전, 신전, 내회전을 담당하는 등의 대표 근육',
      strengthenReasons: [
        '상체의 pulling 동작 향상',
        '자세 개선',
        '어깨 안정성 증진',
        'V자 형 상체 라인 형성'
      ],
      stretchingReasons: [
        '어깨 가동범위 개선',
        '등 근육 긴장 완화',
        '라운드숄더 개선',
        '척추 측만 예방'
      ],
      exercises: [
        {
          name: 'Pull-up',
          koreanName: '풀업',
          type: 'strength',
          difficulty: 'intermediate',
          instructions: [
            '철봉에 매달려 어깨너비보다 넓게 그립',
            '어깨날개를 아래로 당기며 몸을 올림',
            '턱이 철봉을 넘어갈 때까지 올림',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '어깨를 귀에서 멀리 떨어뜨리세요',
            '전신의 힘을 사용하지 말고 등 근육을 집중적으로 사용하세요'
          ]
        }
      ],
      anatomy: {
        origin: '척추돌기 T7-L5(등뼈 7번~허리뼈 5번), 장골능(골반뼈 윗부분)',
        insertion: '상완골 소결절능(팔뚝뼈 안쪽부분)',
        action: ['어깨관절 내전', '신전', '내회전']
      }
    }
  },
  {
    id: 'latissimus-dorsi-right',
    name: 'Latissimus Dorsi',
    koreanName: '광배근',
    group: MuscleGroup.BACK,
    view: 'back',
    side: 'right',
    location: {
      x: 62,
      y: 26,
      width: 12,
      height: 28
    },
    details: {
      function: '어깨 관절의 내전, 신전, 내회전을 담당하는 등의 대표 근육',
      strengthenReasons: [
        '상체의 pulling 동작 향상',
        '자세 개선',
        '어깨 안정성 증진',
        'V자 형 상체 라인 형성'
      ],
      stretchingReasons: [
        '어깨 가동범위 개선',
        '등 근육 긴장 완화',
        '라운드숄더 개선',
        '척추 측만 예방'
      ],
      exercises: [
        {
          name: 'Pull-up',
          koreanName: '풀업',
          type: 'strength',
          difficulty: 'intermediate',
          instructions: [
            '철봉에 매달려 어깨너비보다 넓게 그립',
            '어깨날개를 아래로 당기며 몸을 올림',
            '턱이 철봉을 넘어갈 때까지 올림',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '어깨를 귀에서 멀리 떨어뜨리세요',
            '전신의 힘을 사용하지 말고 등 근육을 집중적으로 사용하세요'
          ]
        }
      ],
      anatomy: {
        origin: '척추돌기 T7-L5(등뼈 7번~허리뼈 5번), 장골능(골반뼈 윗부분)',
        insertion: '상완골 소결절능(팔뚝뼈 안쪽부분)',
        action: ['어깨관절 내전', '신전', '내회전']
      }
    }
  },
  {
    id: 'deltoids-front-left',
    name: 'Deltoids',
    koreanName: '삼각근',
    group: MuscleGroup.SHOULDERS,
    view: 'front',
    side: 'left',
    location: {
      x: 19,
      y: 12,
      width: 13,
      height: 15
    },
    details: {
      function: '어깨의 굴곡, 신전, 외전을 담당하는 어깨 근육',
      strengthenReasons: [
        '어깨 안정성 향상',
        '상체 운동 퍼포먼스 개선',
        '어깨 부상 예방',
        '어깨 라인 개선'
      ],
      stretchingReasons: [
        '어깨 경직 완화',
        '어깨 가동범위 증진',
        '목과 어깨 통증 완화',
        '혈액순환 개선'
      ],
      exercises: [
        {
          name: 'Shoulder Press',
          koreanName: '숄더 프레스',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '덤벨을 어깨 높이에서 시작',
            '코어를 단단히 유지',
            '덤벨을 위로 밀어 올림',
            '팔이 완전히 펴질 때까지 올린 후 천천히 내림'
          ],
          tips: [
            '허리가 과도하게 휘지 않도록 주의하세요',
            '무게보다는 정확한 폼을 우선하세요'
          ]
        }
      ],
      anatomy: {
        origin: '쇄골(어깨뼈), 견봉(어깨끝), 견갑극(날개뼈 돌기)',
        insertion: '상완골 삼각근조면(팔뚝뼈 중간부분)',
        action: ['어깨관절 굴곡', '신전', '외전']
      }
    }
  },
  {
    id: 'deltoids-front-right',
    name: 'Deltoids',
    koreanName: '삼각근',
    group: MuscleGroup.SHOULDERS,
    view: 'front',
    side: 'right',
    location: {
      x: 68,
      y: 12,
      width: 13,
      height: 15
    },
    details: {
      function: '어깨의 굴곡, 신전, 외전을 담당하는 어깨 근육',
      strengthenReasons: [
        '어깨 안정성 향상',
        '상체 운동 퍼포먼스 개선',
        '어깨 부상 예방',
        '어깨 라인 개선'
      ],
      stretchingReasons: [
        '어깨 경직 완화',
        '어깨 가동범위 증진',
        '목과 어깨 통증 완화',
        '혈액순환 개선'
      ],
      exercises: [
        {
          name: 'Shoulder Press',
          koreanName: '숄더 프레스',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '덤벨을 어깨 높이에서 시작',
            '코어를 단단히 유지',
            '덤벨을 위로 밀어 올림',
            '팔이 완전히 펴질 때까지 올린 후 천천히 내림'
          ],
          tips: [
            '허리가 과도하게 휘지 않도록 주의하세요',
            '무게보다는 정확한 폼을 우선하세요'
          ]
        }
      ],
      anatomy: {
        origin: '쇄골(어깨뼈), 견봉(어깨끝), 견갑극(날개뼈 돌기)',
        insertion: '상완골 삼각근조면(팔뚝뼈 중간부분)',
        action: ['어깨관절 굴곡', '신전', '외전']
      }
    }
  },
  {
    id: 'biceps-left',
    name: 'Biceps Brachii',
    koreanName: '이두근',
    group: MuscleGroup.ARMS,
    view: 'front',
    side: 'left',
    location: {
      x: 17,
      y: 27,
      width: 8,
      height: 18
    },
    details: {
      function: '팔꿈치 굴곡과 전완의 회외를 담당하는 상완 전면 근육',
      strengthenReasons: [
        '상체 pulling 동작 향상',
        '팔 근력 증진',
        '일상생활 동작 개선',
        '팔 라인 개선'
      ],
      stretchingReasons: [
        '팔꿈치 관절 가동범위 증진',
        '근육 경직 완화',
        '혈액순환 개선',
        '운동 후 회복 촉진'
      ],
      exercises: [
        {
          name: 'Bicep Curls',
          koreanName: '바이셉 컬',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '덤벨을 양손에 들고 팔을 몸 옆에 자연스럽게 위치',
            '팔꿈치를 고정하고 전완만 위로 올림',
            '이두근의 수축을 느끼며 최대한 올림',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '팔꿈치가 앞뒤로 흔들리지 않도록 주의하세요',
            '내릴 때 완전히 펴지 말고 약간의 긴장을 유지하세요'
          ]
        }
      ],
      anatomy: {
        origin: '견갑골 관절상결절(날개뼈 위쪽), 오구돌기(날개뼈 앞쪽 돌기)',
        insertion: '요골조면(아래팔뼈 윗부분)',
        action: ['팔꿈치 굴곡', '전완 회외']
      }
    }
  },
  {
    id: 'biceps-right',
    name: 'Biceps Brachii',
    koreanName: '이두근',
    group: MuscleGroup.ARMS,
    view: 'front',
    side: 'right',
    location: {
      x: 75,
      y: 27,
      width: 8,
      height: 18
    },
    details: {
      function: '팔꿈치 굴곡과 전완의 회외를 담당하는 상완 전면 근육',
      strengthenReasons: [
        '상체 pulling 동작 향상',
        '팔 근력 증진',
        '일상생활 동작 개선',
        '팔 라인 개선'
      ],
      stretchingReasons: [
        '팔꿈치 관절 가동범위 증진',
        '근육 경직 완화',
        '혈액순환 개선',
        '운동 후 회복 촉진'
      ],
      exercises: [
        {
          name: 'Bicep Curls',
          koreanName: '바이셉 컬',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '덤벨을 양손에 들고 팔을 몸 옆에 자연스럽게 위치',
            '팔꿈치를 고정하고 전완만 위로 올림',
            '이두근의 수축을 느끼며 최대한 올림',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '팔꿈치가 앞뒤로 흔들리지 않도록 주의하세요',
            '내릴 때 완전히 펴지 말고 약간의 긴장을 유지하세요'
          ]
        }
      ],
      anatomy: {
        origin: '견갑골 관절상결절(날개뼈 위쪽), 오구돌기(날개뼈 앞쪽 돌기)',
        insertion: '요골조면(아래팔뼈 윗부분)',
        action: ['팔꿈치 굴곡', '전완 회외']
      }
    }
  },
  {
    id: 'triceps-left',
    name: 'Triceps Brachii',
    koreanName: '삼두근',
    group: MuscleGroup.ARMS,
    view: 'back',
    side: 'left',
    location: {
      x: 17,
      y: 27,
      width: 8,
      height: 18
    },
    details: {
      function: '팔꿈치 신전을 담당하는 상완 후면의 주요 근육',
      strengthenReasons: [
        '상체 pushing 동작 향상',
        '팔 근력 증진',
        '어깨 안정성 향상',
        '팔 뒷면 라인 개선'
      ],
      stretchingReasons: [
        '팔꿈치 관절 가동범위 증진',
        '어깨 유연성 개선',
        '근육 긴장 완화',
        '자세 개선'
      ],
      exercises: [
        {
          name: 'Tricep Dips',
          koreanName: '트라이셉 딥스',
          type: 'strength',
          difficulty: 'intermediate',
          instructions: [
            '의자나 벤치 가장자리에 손을 올리고',
            '다리를 앞으로 뻗어 몸을 지지',
            '팔꿈치를 굽혀 몸을 아래로 내림',
            '삼두근의 힘으로 몸을 위로 밀어올림'
          ],
          tips: [
            '어깨가 귀 쪽으로 올라가지 않도록 주의하세요',
            '팔꿈치가 바깥쪽으로 벌어지지 않도록 하세요'
          ]
        }
      ],
      anatomy: {
        origin: '견갑골 관절하결절(날개뼈 아래쪽), 상완골 후면(팔뚝뼈 뒷면)',
        insertion: '척골 주두돌기(아래팔뼈 팔꿈치 부분)',
        action: ['팔꿈치 신전']
      }
    }
  },
  {
    id: 'triceps-right',
    name: 'Triceps Brachii',
    koreanName: '삼두근',
    group: MuscleGroup.ARMS,
    view: 'back',
    side: 'right',
    location: {
      x: 75,
      y: 27,
      width: 8,
      height: 18
    },
    details: {
      function: '팔꿈치 신전을 담당하는 상완 후면의 주요 근육',
      strengthenReasons: [
        '상체 pushing 동작 향상',
        '팔 근력 증진',
        '어깨 안정성 향상',
        '팔 뒷면 라인 개선'
      ],
      stretchingReasons: [
        '팔꿈치 관절 가동범위 증진',
        '어깨 유연성 개선',
        '근육 긴장 완화',
        '자세 개선'
      ],
      exercises: [
        {
          name: 'Tricep Dips',
          koreanName: '트라이셉 딥스',
          type: 'strength',
          difficulty: 'intermediate',
          instructions: [
            '의자나 벤치 가장자리에 손을 올리고',
            '다리를 앞으로 뻗어 몸을 지지',
            '팔꿈치를 굽혀 몸을 아래로 내림',
            '삼두근의 힘으로 몸을 위로 밀어올림'
          ],
          tips: [
            '어깨가 귀 쪽으로 올라가지 않도록 주의하세요',
            '팔꿈치가 바깥쪽으로 벌어지지 않도록 하세요'
          ]
        }
      ],
      anatomy: {
        origin: '견갑골 관절하결절(날개뼈 아래쪽), 상완골 후면(팔뚝뼈 뒷면)',
        insertion: '척골 주두돌기(아래팔뼈 팔꿈치 부분)',
        action: ['팔꿈치 신전']
      }
    }
  },
  {
    id: 'rectus-abdominis',
    name: 'Rectus Abdominis',
    koreanName: '복직근',
    group: MuscleGroup.CORE,
    view: 'front',
    location: {
      x: 33,
      y: 36,
      width: 34,
      height: 30
    },
    details: {
      function: '척추 굴곡을 담당하는 복부 전면의 주요 근육',
      strengthenReasons: [
        '코어 안정성 향상',
        '자세 개선',
        '허리 통증 예방',
        '운동 퍼포먼스 향상'
      ],
      stretchingReasons: [
        '복부 근육 긴장 완화',
        '척추 신전 가동범위 증진',
        '자세 균형 개선',
        '소화 기능 개선'
      ],
      exercises: [
        {
          name: 'Plank',
          koreanName: '플랭크',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '팔꿈치와 발가락으로 몸을 지지',
            '머리부터 발끝까지 일직선 유지',
            '복부에 힘을 주어 자세 유지',
            '정해진 시간 동안 버티기'
          ],
          tips: [
            '엉덩이가 올라가거나 내려가지 않도록 주의하세요',
            '목은 자연스럽게 중립을 유지하세요'
          ]
        }
      ],
      anatomy: {
        origin: '치골(골반뼈 앞쪽)',
        insertion: '늑연골 5-7번(갈비뼈 5~7번)',
        action: ['척추 굴곡']
      }
    }
  },
  {
    id: 'trapezius',
    name: 'Trapezius',
    koreanName: '승모근',
    group: MuscleGroup.BACK,
    view: 'back',
    location: {
      x: 30,
      y: 9,
      width: 40,
      height: 15
    },
    details: {
      function: '어깨를 위로 들어올리고 견갑골을 모으며 목과 머리를 지지하는 근육',
      strengthenReasons: [
        '자세 교정',
        '어깨와 목 안정성 향상',
        '상체 라인 개선',
        '어깨 부상 예방'
      ],
      stretchingReasons: [
        '목과 어깨 긴장 완화',
        '스트레스성 어깨 결림 해소',
        '혈액순환 개선',
        '두통 완화'
      ],
      exercises: [
        {
          name: 'Shrug',
          koreanName: '슈러그',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '덤벨을 양손에 들고 팔을 자연스럽게 내림',
            '어깨를 귀 쪽으로 들어올림',
            '최대한 올린 상태에서 잠깐 정지',
            '천천히 원래 자세로 내림'
          ],
          tips: [
            '어깨를 앞뒤로 돌리지 말고 수직으로만 움직이세요',
            '목에 힘을 주지 말고 어깨 근육만 사용하세요'
          ]
        }
      ],
      anatomy: {
        origin: '후두골(뒷머리뼈), 목뼈, 흉추(등뼈)',
        insertion: '쇄골(어깨뼈), 견봉(어깨끝), 견갑극(날개뼈 돌기)',
        action: ['견갑골 거상', '내전', '상방회전']
      }
    }
  },
  {
    id: 'quadriceps-left',
    name: 'Quadriceps',
    koreanName: '대퇴사두근',
    group: MuscleGroup.LEGS,
    view: 'front',
    side: 'left',
    location: {
      x: 30,
      y: 66,
      width: 12,
      height: 28
    },
    details: {
      function: '무릎 신전과 고관절 굴곡을 담당하는 대퇴부 전면 근육',
      strengthenReasons: [
        '하체 힘 증진',
        '무릎 안정성 향상',
        '점프력 향상',
        '일상 동작 개선'
      ],
      stretchingReasons: [
        '무릎 관절 가동범위 증진',
        '대퇴부 긴장 완화',
        '자세 개선',
        '운동 후 회복 촉진'
      ],
      exercises: [
        {
          name: 'Squats',
          koreanName: '스쿼트',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '발을 어깨너비로 벌리고 서기',
            '가슴을 펴고 코어에 힘을 줌',
            '엉덩이를 뒤로 빼며 무릎을 굽힘',
            '허벅지가 바닥과 평행이 될 때까지 내림',
            '발뒤꿈치로 밀어 원래 자세로 복귀'
          ],
          tips: [
            '무릎이 발가락 방향을 향하도록 하세요',
            '허리는 자연스러운 곡선을 유지하세요'
          ]
        }
      ],
      anatomy: {
        origin: '장골(골반뼈), 대퇴골(허벅지뼈)',
        insertion: '경골조면(정강이뼈 윗부분)',
        action: ['무릎 신전', '고관절 굴곡']
      }
    }
  },
  {
    id: 'quadriceps-right',
    name: 'Quadriceps',
    koreanName: '대퇴사두근',
    group: MuscleGroup.LEGS,
    view: 'front',
    side: 'right',
    location: {
      x: 58,
      y: 66,
      width: 12,
      height: 28
    },
    details: {
      function: '무릎 신전과 고관절 굴곡을 담당하는 대퇴부 전면 근육',
      strengthenReasons: [
        '하체 힘 증진',
        '무릎 안정성 향상',
        '점프력 향상',
        '일상 동작 개선'
      ],
      stretchingReasons: [
        '무릎 관절 가동범위 증진',
        '대퇴부 긴장 완화',
        '자세 개선',
        '운동 후 회복 촉진'
      ],
      exercises: [
        {
          name: 'Squats',
          koreanName: '스쿼트',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '발을 어깨너비로 벌리고 서기',
            '가슴을 펴고 코어에 힘을 줌',
            '엉덩이를 뒤로 빼며 무릎을 굽힘',
            '허벅지가 바닥과 평행이 될 때까지 내림',
            '발뒤꿈치로 밀어 원래 자세로 복귀'
          ],
          tips: [
            '무릎이 발가락 방향을 향하도록 하세요',
            '허리는 자연스러운 곡선을 유지하세요'
          ]
        }
      ],
      anatomy: {
        origin: '장골(골반뼈), 대퇴골(허벅지뼈)',
        insertion: '경골조면(정강이뼈 윗부분)',
        action: ['무릎 신전', '고관절 굴곡']
      }
    }
  },
  {
    id: 'hamstrings-left',
    name: 'Hamstrings',
    koreanName: '햄스트링',
    group: MuscleGroup.LEGS,
    view: 'back',
    side: 'left',
    location: {
      x: 30,
      y: 70,
      width: 12,
      height: 20
    },
    details: {
      function: '무릎 굴곡과 고관절 신전을 담당하는 대퇴부 후면 근육',
      strengthenReasons: [
        '하체 균형 개선',
        '무릎 부상 예방',
        '스프린트 능력 향상',
        '자세 개선'
      ],
      stretchingReasons: [
        '허리 통증 완화',
        '햄스트링 단축 방지',
        '무릎 관절 가동범위 증진',
        '골반 정렬 개선'
      ],
      exercises: [
        {
          name: 'Romanian Deadlift',
          koreanName: '루마니안 데드리프트',
          type: 'strength',
          difficulty: 'intermediate',
          instructions: [
            '바벨을 양손으로 잡고 어깨너비로 서기',
            '가슴을 펴고 어깨날개를 뒤로 당김',
            '엉덩이를 뒤로 빼며 상체를 숙임',
            '햄스트링의 스트레칭을 느끼며 바를 내림',
            '엉덩이를 앞으로 밀어 원래 자세로 복귀'
          ],
          tips: [
            '무릎은 살짝만 굽히고 고정하세요',
            '허리는 항상 중립을 유지하세요'
          ]
        }
      ],
      anatomy: {
        origin: '좌골결절(엉덩이뼈 아래쪽)',
        insertion: '경골, 비골(정강이뼈, 종아리뼈)',
        action: ['무릎 굴곡', '고관절 신전']
      }
    }
  },
  {
    id: 'hamstrings-right',
    name: 'Hamstrings',
    koreanName: '햄스트링',
    group: MuscleGroup.LEGS,
    view: 'back',
    side: 'right',
    location: {
      x: 58,
      y: 70,
      width: 12,
      height: 20
    },
    details: {
      function: '무릎 굴곡과 고관절 신전을 담당하는 대퇴부 후면 근육',
      strengthenReasons: [
        '하체 균형 개선',
        '무릎 부상 예방',
        '스프린트 능력 향상',
        '자세 개선'
      ],
      stretchingReasons: [
        '허리 통증 완화',
        '햄스트링 단축 방지',
        '무릎 관절 가동범위 증진',
        '골반 정렬 개선'
      ],
      exercises: [
        {
          name: 'Romanian Deadlift',
          koreanName: '루마니안 데드리프트',
          type: 'strength',
          difficulty: 'intermediate',
          instructions: [
            '바벨을 양손으로 잡고 어깨너비로 서기',
            '가슴을 펴고 어깨날개를 뒤로 당김',
            '엉덩이를 뒤로 빼며 상체를 숙임',
            '햄스트링의 스트레칭을 느끼며 바를 내림',
            '엉덩이를 앞으로 밀어 원래 자세로 복귀'
          ],
          tips: [
            '무릎은 살짝만 굽히고 고정하세요',
            '허리는 항상 중립을 유지하세요'
          ]
        }
      ],
      anatomy: {
        origin: '좌골결절(엉덩이뼈 아래쪽)',
        insertion: '경골, 비골(정강이뼈, 종아리뼈)',
        action: ['무릎 굴곡', '고관절 신전']
      }
    }
  },
  {
    id: 'gluteus-maximus',
    name: 'Gluteus Maximus',
    koreanName: '대둔근',
    group: MuscleGroup.GLUTES,
    view: 'back',
    location: {
      x: 32,
      y: 54,
      width: 36,
      height: 16
    },
    details: {
      function: '고관절 신전을 담당하는 인체에서 가장 큰 근육',
      strengthenReasons: [
        '하체 파워 증진',
        '자세 개선',
        '허리 통증 예방',
        '운동 능력 향상'
      ],
      stretchingReasons: [
        '고관절 가동범위 증진',
        '둔부 긴장 완화',
        '골반 정렬 개선',
        '허리 부담 감소'
      ],
      exercises: [
        {
          name: 'Hip Thrust',
          koreanName: '힙 스러스트',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '벤치에 등 상부를 기대고 바닥에 앉기',
            '무릎을 90도로 굽히고 발을 바닥에 고정',
            '둔근에 힘을 주어 엉덩이를 위로 들어올림',
            '몸이 일직선이 될 때까지 올림',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '허리가 과도하게 휘지 않도록 주의하세요',
            '둔근의 수축을 확실히 느끼세요'
          ]
        }
      ],
      anatomy: {
        origin: '장골, 천골, 미골',
        insertion: '대퇴골 둔근조면',
        action: ['고관절 신전', '외회전']
      }
    }
  },
  // 전완근 추가
  {
    id: 'forearms-left',
    name: 'Forearm Muscles',
    koreanName: '전완근',
    group: MuscleGroup.ARMS,
    view: 'front',
    side: 'left',
    location: {
      x: 16,
      y: 45,
      width: 6,
      height: 15
    },
    details: {
      function: '손목의 굴곡, 신전과 손가락 움직임을 담당하는 근육군',
      strengthenReasons: [
        '그립력 향상',
        '손목 안정성 증진',
        '일상생활 동작 개선',
        '운동 수행능력 향상'
      ],
      stretchingReasons: [
        '손목터널증후군 예방',
        '반복적 손목 사용으로 인한 긴장 완화',
        '손목 관절 가동범위 증진',
        '혈액순환 개선'
      ],
      exercises: [
        {
          name: 'Wrist Curls',
          koreanName: '리스트 컬',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '덤벨을 잡고 팔뚝이를 벤치에 올림',
            '손목만 벤치 바깥쪽으로 내림',
            '손목을 위로 굽힘',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '전완근만 사용하고 팔을 고정하세요',
            '가동범위를 최대한 활용하세요'
          ]
        }
      ],
      anatomy: {
        origin: '상완골 내측과적, 외측과적(팔뚝뼈 팔꿈치 안쪽, 바깥쪽)',
        insertion: '수근골, 지골(손목뼈, 손가락뼈)',
        action: ['손목 굴곡', '신전', '손가락 굴곡']
      }
    }
  },
  {
    id: 'forearms-right',
    name: 'Forearm Muscles',
    koreanName: '전완근',
    group: MuscleGroup.ARMS,
    view: 'front',
    side: 'right',
    location: {
      x: 78,
      y: 45,
      width: 6,
      height: 15
    },
    details: {
      function: '손목의 굴곡, 신전과 손가락 움직임을 담당하는 근육군',
      strengthenReasons: [
        '그립력 향상',
        '손목 안정성 증진',
        '일상생활 동작 개선',
        '운동 수행능력 향상'
      ],
      stretchingReasons: [
        '손목터널증후군 예방',
        '반복적 손목 사용으로 인한 긴장 완화',
        '손목 관절 가동범위 증진',
        '혈액순환 개선'
      ],
      exercises: [
        {
          name: 'Wrist Curls',
          koreanName: '리스트 컬',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '덤벨을 잡고 팔뚝이를 벤치에 올림',
            '손목만 벤치 바깥쪽으로 내림',
            '손목을 위로 굽힘',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '전완근만 사용하고 팔을 고정하세요',
            '가동범위를 최대한 활용하세요'
          ]
        }
      ],
      anatomy: {
        origin: '상완골 내측과적, 외측과적(팔뚝뼈 팔꿈치 안쪽, 바깥쪽)',
        insertion: '수근골, 지골(손목뼈, 손가락뼈)',
        action: ['손목 굴곡', '신전', '손가락 굴곡']
      }
    }
  },
  // 소흉근 추가
  {
    id: 'pectoralis-minor-left',
    name: 'Pectoralis Minor',
    koreanName: '소흉근',
    group: MuscleGroup.CHEST,
    view: 'front',
    side: 'left',
    location: {
      x: 28,
      y: 24,
      width: 8,
      height: 10
    },
    details: {
      function: '견갑골을 전하방으로 당기고 늑골을 들어올려 호흡을 돕는 근육',
      strengthenReasons: [
        '견갑골 안정성 향상',
        '호흡 보조근 강화',
        '가슴 라인 개선',
        '자세 교정 보조'
      ],
      stretchingReasons: [
        '라운드숄더 개선',
        '가슴 개방감 증진',
        '호흡 기능 향상',
        '어깨 긴장 완화'
      ],
      exercises: [
        {
          name: 'Chest Dips',
          koreanName: '체스트 딥스',
          type: 'strength',
          difficulty: 'intermediate',
          instructions: [
            '평행봉이나 딥 스테이션에 손을 올림',
            '몸을 살짝 앞으로 기울임',
            '팔꿈치를 굽혀 가슴이 늘어나는 느낌으로 내림',
            '소흉근의 수축을 느끼며 원래 자세로 복귀'
          ],
          tips: [
            '몸을 앞으로 기울여 가슴에 집중하세요',
            '어깨가 귀 쪽으로 올라가지 않도록 주의하세요'
          ]
        }
      ],
      anatomy: {
        origin: '늑골 3-5번',
        insertion: '견갑골 오구돌기(날개뼈 앞쪽 갈고리)',
        action: ['견갑골 전인', '하방회전', '호흡 보조']
      }
    }
  },
  {
    id: 'pectoralis-minor-right',
    name: 'Pectoralis Minor',
    koreanName: '소흉근',
    group: MuscleGroup.CHEST,
    view: 'front',
    side: 'right',
    location: {
      x: 64,
      y: 24,
      width: 8,
      height: 10
    },
    details: {
      function: '견갑골을 전하방으로 당기고 늑골을 들어올려 호흡을 돕는 근육',
      strengthenReasons: [
        '견갑골 안정성 향상',
        '호흡 보조근 강화',
        '가슴 라인 개선',
        '자세 교정 보조'
      ],
      stretchingReasons: [
        '라운드숄더 개선',
        '가슴 개방감 증진',
        '호흡 기능 향상',
        '어깨 긴장 완화'
      ],
      exercises: [
        {
          name: 'Chest Dips',
          koreanName: '체스트 딥스',
          type: 'strength',
          difficulty: 'intermediate',
          instructions: [
            '평행봉이나 딥 스테이션에 손을 올림',
            '몸을 살짝 앞으로 기울임',
            '팔꿈치를 굽혀 가슴이 늘어나는 느낌으로 내림',
            '소흉근의 수축을 느끼며 원래 자세로 복귀'
          ],
          tips: [
            '몸을 앞으로 기울여 가슴에 집중하세요',
            '어깨가 귀 쪽으로 올라가지 않도록 주의하세요'
          ]
        }
      ],
      anatomy: {
        origin: '늑골 3-5번',
        insertion: '견갑골 오구돌기(날개뼈 앞쪽 갈고리)',
        action: ['견갑골 전인', '하방회전', '호흡 보조']
      }
    }
  },
  // 전거근 추가
  {
    id: 'serratus-anterior-left',
    name: 'Serratus Anterior',
    koreanName: '전거근',
    group: MuscleGroup.CHEST,
    view: 'front',
    side: 'left',
    location: {
      x: 30,
      y: 32,
      width: 6,
      height: 14
    },
    details: {
      function: '견갑골을 앞으로 밀고 상방회전시켜 어깨 안정성을 제공하는 근육',
      strengthenReasons: [
        '견갑골 안정성 향상',
        '어깨 충돌증후군 예방',
        'Push-up 동작 개선',
        '날개뼈 튀어나옴 방지',
        '오버헤드 동작 시 어깨 안정성 제공',
        '어깨 관절 보호 및 부상 예방'
      ],
      stretchingReasons: [
        '가슴 근육과 함께 이완',
        '어깨 가동범위 증진',
        '자세 개선',
        '호흡 기능 향상'
      ],
      exercises: [
        {
          name: 'Push-up Plus',
          koreanName: '푸시업 플러스',
          type: 'strength',
          difficulty: 'intermediate',
          instructions: [
            '일반 푸시업 자세에서 시작',
            '팔을 완전히 편 상태에서 견갑골을 더 앞으로 밀어냄',
            '등이 둥글게 되도록 견갑골을 분리',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '견갑골의 움직임에 집중하세요',
            '등 상부가 둥글게 되는 느낌을 확인하세요'
          ]
        }
      ],
      anatomy: {
        origin: '늑골 1-8번(갈비뼈 1~8번)',
        insertion: '견갑골 내측연(날개뼈 안쪽 가장자리)',
        action: ['견갑골 전인', '상방회전']
      }
    }
  },
  {
    id: 'serratus-anterior-right',
    name: 'Serratus Anterior',
    koreanName: '전거근',
    group: MuscleGroup.CHEST,
    view: 'front',
    side: 'right',
    location: {
      x: 64,
      y: 32,
      width: 6,
      height: 14
    },
    details: {
      function: '견갑골을 앞으로 밀고 상방회전시켜 어깨 안정성을 제공하는 근육',
      strengthenReasons: [
        '견갑골 안정성 향상',
        '어깨 충돌증후군 예방',
        'Push-up 동작 개선',
        '날개뼈 튀어나옴 방지',
        '오버헤드 동작 시 어깨 안정성 제공',
        '어깨 관절 보호 및 부상 예방'
      ],
      stretchingReasons: [
        '가슴 근육과 함께 이완',
        '어깨 가동범위 증진',
        '자세 개선',
        '호흡 기능 향상'
      ],
      exercises: [
        {
          name: 'Push-up Plus',
          koreanName: '푸시업 플러스',
          type: 'strength',
          difficulty: 'intermediate',
          instructions: [
            '일반 푸시업 자세에서 시작',
            '팔을 완전히 편 상태에서 견갑골을 더 앞으로 밀어냄',
            '등이 둥글게 되도록 견갑골을 분리',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '견갑골의 움직임에 집중하세요',
            '등 상부가 둥글게 되는 느낌을 확인하세요'
          ]
        }
      ],
      anatomy: {
        origin: '늑골 1-8번(갈비뼈 1~8번)',
        insertion: '견갑골 내측연(날개뼈 안쪽 가장자리)',
        action: ['견갑골 전인', '상방회전']
      }
    }
  },
  // 후면 삼각근 추가
  {
    id: 'deltoids-back-left',
    name: 'Posterior Deltoids',
    koreanName: '후면삼각근',
    group: MuscleGroup.SHOULDERS,
    view: 'back',
    side: 'left',
    location: {
      x: 19,
      y: 12,
      width: 11,
      height: 12
    },
    details: {
      function: '어깨의 신전과 외회전을 담당하며 자세 교정에 중요한 근육',
      strengthenReasons: [
        '라운드숄더 개선',
        '어깨 균형 회복',
        '어깨 부상 예방',
        '자세 교정'
      ],
      stretchingReasons: [
        '어깨 경직 완화',
        '가동범위 증진',
        '혈액순환 개선',
        '긴장 완화'
      ],
      exercises: [
        {
          name: 'Rear Delt Fly',
          koreanName: '리어 델트 플라이',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '덤벨을 양손에 들고 상체를 앞으로 숙임',
            '팔을 약간 굽힌 상태로 옆으로 들어올림',
            '견갑골을 모으는 느낌으로 수축',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '무게보다는 정확한 폼을 우선하세요',
            '견갑골을 모으는 움직임에 집중하세요'
          ]
        }
      ],
      anatomy: {
        origin: '견갑극',
        insertion: '상완골 삼각근조면(팔뚝뼈 중간부분)',
        action: ['어깨관절 신전', '외회전']
      }
    }
  },
  {
    id: 'deltoids-back-right',
    name: 'Posterior Deltoids',
    koreanName: '후면삼각근',
    group: MuscleGroup.SHOULDERS,
    view: 'back',
    side: 'right',
    location: {
      x: 70,
      y: 12,
      width: 11,
      height: 12
    },
    details: {
      function: '어깨의 신전과 외회전을 담당하며 자세 교정에 중요한 근육',
      strengthenReasons: [
        '라운드숄더 개선',
        '어깨 균형 회복',
        '어깨 부상 예방',
        '자세 교정'
      ],
      stretchingReasons: [
        '어깨 경직 완화',
        '가동범위 증진',
        '혈액순환 개선',
        '긴장 완화'
      ],
      exercises: [
        {
          name: 'Rear Delt Fly',
          koreanName: '리어 델트 플라이',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '덤벨을 양손에 들고 상체를 앞으로 숙임',
            '팔을 약간 굽힌 상태로 옆으로 들어올림',
            '견갑골을 모으는 느낌으로 수축',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '무게보다는 정확한 폼을 우선하세요',
            '견갑골을 모으는 움직임에 집중하세요'
          ]
        }
      ],
      anatomy: {
        origin: '견갑극',
        insertion: '상완골 삼각근조면(팔뚝뼈 중간부분)',
        action: ['어깨관절 신전', '외회전']
      }
    }
  },
  // 능형근 추가
  {
    id: 'rhomboids',
    name: 'Rhomboids',
    koreanName: '능형근',
    group: MuscleGroup.BACK,
    view: 'back',
    location: {
      x: 33,
      y: 20,
      width: 34,
      height: 12
    },
    details: {
      function: '견갑골을 척추 쪽으로 모으고 하방회전시키는 자세 교정의 핵심 근육',
      strengthenReasons: [
        '라운드숄더 교정',
        '자세 개선',
        '어깨 균형 회복',
        '상체 안정성 향상'
      ],
      stretchingReasons: [
        '견갑골 사이 긴장 완화',
        '어깨 가동범위 증진',
        '자세 균형 개선',
        '혈액순환 향상'
      ],
      exercises: [
        {
          name: 'Rows',
          koreanName: '로우',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '케이블이나 밴드를 잡고 팔을 앞으로 뻗음',
            '견갑골을 먼저 뒤로 당김',
            '팔꿈치를 몸 옆으로 당겨옴',
            '견갑골을 모으며 수축 유지 후 천천히 복귀'
          ],
          tips: [
            '견갑골 움직임을 먼저 시작하세요',
            '가슴을 펴고 어깨를 아래로 내리세요'
          ]
        }
      ],
      anatomy: {
        origin: '경추 7번, 흉추 1-5번',
        insertion: '견갑골 내측연',
        action: ['견갑골 내전', '하방회전']
      }
    }
  },
  // 척추기립근 추가
  {
    id: 'erector-spinae',
    name: 'Erector Spinae',
    koreanName: '척추기립근',
    group: MuscleGroup.BACK,
    view: 'back',
    location: {
      x: 40,
      y: 30,
      width: 20,
      height: 35
    },
    details: {
      function: '척추를 세우고 신전시켜 바른 자세를 유지하는 핵심 근육',
      strengthenReasons: [
        '척추 건강 유지',
        '자세 교정',
        '허리 통증 예방',
        '전신 안정성 향상'
      ],
      stretchingReasons: [
        '척추 유연성 증진',
        '등 긴장 완화',
        '혈액순환 개선',
        '전신 이완'
      ],
      exercises: [
        {
          name: 'Superman',
          koreanName: '슈퍼맨',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '엎드린 자세에서 팔과 다리를 뻗음',
            '가슴과 다리를 동시에 들어올림',
            '척추기립근의 수축을 느끼며 유지',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '목을 과도하게 젖히지 마세요',
            '허리 아래쪽보다 가슴 위쪽을 더 들어올리세요'
          ]
        }
      ],
      anatomy: {
        origin: '천골, 장골능, 늑골',
        insertion: '늑골, 경추',
        action: ['척추 신전', '측굴']
      }
    }
  },
  // 중둔근 추가
  {
    id: 'gluteus-medius-left',
    name: 'Gluteus Medius',
    koreanName: '중둔근',
    group: MuscleGroup.GLUTES,
    view: 'back',
    side: 'left',
    location: {
      x: 28,
      y: 50,
      width: 14,
      height: 8
    },
    details: {
      function: '고관절의 외전과 안정성을 담당하는 중요한 엉덩이 근육',
      strengthenReasons: [
        '골반 안정성 향상',
        '무릎 부상 예방',
        '보행 시 균형 개선',
        '허리 통증 예방'
      ],
      stretchingReasons: [
        '고관절 가동범위 증진',
        '엉덩이 긴장 완화',
        '골반 정렬 개선',
        'IT밴드 긴장 완화'
      ],
      exercises: [
        {
          name: 'Side-lying Hip Abduction',
          koreanName: '옆누워 다리 벌리기',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '옆으로 누워 아래쪽 다리는 약간 굽힘',
            '위쪽 다리를 곧게 펴고 천장 쪽으로 들어올림',
            '중둔근의 수축을 느끼며 최대한 올림',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '다리를 앞이나 뒤로 기울이지 말고 정확히 옆으로만 올리세요',
            '골반이 앞뒤로 기울지 않도록 코어를 유지하세요'
          ]
        }
      ],
      anatomy: {
        origin: '장골 외면',
        insertion: '대퇴골 대전자',
        action: ['고관절 외전', '내회전', '골반 안정화']
      }
    }
  },
  {
    id: 'gluteus-medius-right',
    name: 'Gluteus Medius',
    koreanName: '중둔근',
    group: MuscleGroup.GLUTES,
    view: 'back',
    side: 'right',
    location: {
      x: 58,
      y: 50,
      width: 14,
      height: 8
    },
    details: {
      function: '고관절의 외전과 안정성을 담당하는 중요한 엉덩이 근육',
      strengthenReasons: [
        '골반 안정성 향상',
        '무릎 부상 예방',
        '보행 시 균형 개선',
        '허리 통증 예방'
      ],
      stretchingReasons: [
        '고관절 가동범위 증진',
        '엉덩이 긴장 완화',
        '골반 정렬 개선',
        'IT밴드 긴장 완화'
      ],
      exercises: [
        {
          name: 'Side-lying Hip Abduction',
          koreanName: '옆누워 다리 벌리기',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '옆으로 누워 아래쪽 다리는 약간 굽힘',
            '위쪽 다리를 곧게 펴고 천장 쪽으로 들어올림',
            '중둔근의 수축을 느끼며 최대한 올림',
            '천천히 원래 자세로 복귀'
          ],
          tips: [
            '다리를 앞이나 뒤로 기울이지 말고 정확히 옆으로만 올리세요',
            '골반이 앞뒤로 기울지 않도록 코어를 유지하세요'
          ]
        }
      ],
      anatomy: {
        origin: '장골 외면',
        insertion: '대퇴골 대전자',
        action: ['고관절 외전', '내회전', '골반 안정화']
      }
    }
  },
  // 내전근군 추가
  {
    id: 'adductors-left',
    name: 'Adductors',
    koreanName: '내전근',
    group: MuscleGroup.LEGS,
    view: 'front',
    side: 'left',
    location: {
      x: 38,
      y: 68,
      width: 8,
      height: 22
    },
    details: {
      function: '다리를 몸의 중심선으로 모으고 고관절 안정성을 제공하는 근육군',
      strengthenReasons: [
        '고관절 안정성 향상',
        '무릎 부상 예방',
        '운동 능력 향상',
        '골반 균형 개선'
      ],
      stretchingReasons: [
        '사타구니 유연성 증진',
        '고관절 가동범위 확대',
        '하체 순환 개선',
        '운동 후 회복'
      ],
      exercises: [
        {
          name: 'Sumo Squats',
          koreanName: '스모 스쿼트',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '발을 어깨너비보다 넓게 벌리고 발끝을 바깥쪽으로',
            '가슴을 펴고 엉덩이를 뒤로 빼며 앉음',
            '허벅지가 바닥과 평행이 될 때까지',
            '내전근을 사용하여 원래 자세로 복귀'
          ],
          tips: [
            '무릎이 발끝 방향을 향하도록 하세요',
            '내전근의 수축을 의식하며 실행하세요'
          ]
        }
      ],
      anatomy: {
        origin: '치골, 좌골',
        insertion: '대퇴골 내측',
        action: ['고관절 내전', '고관절 굴곡 보조']
      }
    }
  },
  {
    id: 'adductors-right',
    name: 'Adductors',
    koreanName: '내전근',
    group: MuscleGroup.LEGS,
    view: 'front',
    side: 'right',
    location: {
      x: 54,
      y: 68,
      width: 8,
      height: 22
    },
    details: {
      function: '다리를 몸의 중심선으로 모으고 고관절 안정성을 제공하는 근육군',
      strengthenReasons: [
        '고관절 안정성 향상',
        '무릎 부상 예방',
        '운동 능력 향상',
        '골반 균형 개선'
      ],
      stretchingReasons: [
        '사타구니 유연성 증진',
        '고관절 가동범위 확대',
        '하체 순환 개선',
        '운동 후 회복'
      ],
      exercises: [
        {
          name: 'Sumo Squats',
          koreanName: '스모 스쿼트',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '발을 어깨너비보다 넓게 벌리고 발끝을 바깥쪽으로',
            '가슴을 펴고 엉덩이를 뒤로 빼며 앉음',
            '허벅지가 바닥과 평행이 될 때까지',
            '내전근을 사용하여 원래 자세로 복귀'
          ],
          tips: [
            '무릎이 발끝 방향을 향하도록 하세요',
            '내전근의 수축을 의식하며 실행하세요'
          ]
        }
      ],
      anatomy: {
        origin: '치골, 좌골',
        insertion: '대퇴골 내측',
        action: ['고관절 내전', '고관절 굴곡 보조']
      }
    }
  },
  // 종아리 근육 추가
  {
    id: 'calves-left',
    name: 'Gastrocnemius & Soleus',
    koreanName: '종아리근',
    group: MuscleGroup.LEGS,
    view: 'back',
    side: 'left',
    location: {
      x: 32,
      y: 78,
      width: 8,
      height: 18
    },
    details: {
      function: '발목의 저굴과 보행 시 추진력을 제공하는 종아리 후면 근육',
      strengthenReasons: [
        '보행과 달리기 능력 향상',
        '점프력 증진',
        '발목 안정성 향상',
        '하지 순환 개선'
      ],
      stretchingReasons: [
        '아킬레스건 유연성 증진',
        '족저근막염 예방',
        '종아리 경직 완화',
        '발목 가동범위 증진'
      ],
      exercises: [
        {
          name: 'Calf Raises',
          koreanName: '종아리 올리기',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '발끝으로 서서 발뒤꿈치를 최대한 올림',
            '종아리 근육의 수축을 느끼며 정점에서 정지',
            '천천히 발뒤꿈치를 바닥으로 내림',
            '반복하여 실시'
          ],
          tips: [
            '가동범위를 최대한 활용하세요',
            '균형을 위해 벽이나 손잡이를 잡아도 됩니다'
          ]
        }
      ],
      anatomy: {
        origin: '대퇴골 하단, 경골 상단',
        insertion: '종골 (아킬레스건)',
        action: ['발목 저굴', '무릎 굴곡 보조']
      }
    }
  },
  {
    id: 'calves-right',
    name: 'Gastrocnemius & Soleus',
    koreanName: '종아리근',
    group: MuscleGroup.LEGS,
    view: 'back',
    side: 'right',
    location: {
      x: 60,
      y: 78,
      width: 8,
      height: 18
    },
    details: {
      function: '발목의 저굴과 보행 시 추진력을 제공하는 종아리 후면 근육',
      strengthenReasons: [
        '보행과 달리기 능력 향상',
        '점프력 증진',
        '발목 안정성 향상',
        '하지 순환 개선'
      ],
      stretchingReasons: [
        '아킬레스건 유연성 증진',
        '족저근막염 예방',
        '종아리 경직 완화',
        '발목 가동범위 증진'
      ],
      exercises: [
        {
          name: 'Calf Raises',
          koreanName: '종아리 올리기',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '발끝으로 서서 발뒤꿈치를 최대한 올림',
            '종아리 근육의 수축을 느끼며 정점에서 정지',
            '천천히 발뒤꿈치를 바닥으로 내림',
            '반복하여 실시'
          ],
          tips: [
            '가동범위를 최대한 활용하세요',
            '균형을 위해 벽이나 손잡이를 잡아도 됩니다'
          ]
        }
      ],
      anatomy: {
        origin: '대퇴골 하단, 경골 상단',
        insertion: '종골 (아킬레스건)',
        action: ['발목 저굴', '무릎 굴곡 보조']
      }
    }
  },
  // 정강이 근육 추가
  {
    id: 'tibialis-anterior-left',
    name: 'Tibialis Anterior',
    koreanName: '앞정강이근',
    group: MuscleGroup.LEGS,
    view: 'front',
    side: 'left',
    location: {
      x: 36,
      y: 94,
      width: 3,
      height: 8
    },
    details: {
      function: '발목의 배굴과 발의 내번을 담당하는 정강이 전면 근육',
      strengthenReasons: [
        '발목 안정성 향상',
        '정강이 통증 예방',
        '보행 능력 개선',
        '발목 부상 예방'
      ],
      stretchingReasons: [
        '정강이 긴장 완화',
        '발목 유연성 증진',
        '족저근막 건강',
        '하지 순환 개선'
      ],
      exercises: [
        {
          name: 'Toe Raises',
          koreanName: '발끝 올리기',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '발뒤꿈치를 바닥에 고정',
            '발끝을 최대한 위로 들어올림',
            '앞정강이근의 수축을 느끼며 유지',
            '천천히 발끝을 내림'
          ],
          tips: [
            '발뒤꿈치가 바닥에서 떨어지지 않도록 하세요',
            '정강이 앞쪽 근육의 수축을 의식하세요'
          ]
        }
      ],
      anatomy: {
        origin: '경골 외측(정강이뼈 바깥쪽)',
        insertion: '첫째 중족골, 내측 설상골(엄지발가락 뼈, 발등 안쪽 뼈)',
        action: ['발목 배굴', '발의 내번']
      }
    }
  },
  {
    id: 'tibialis-anterior-right',
    name: 'Tibialis Anterior',
    koreanName: '앞정강이근',
    group: MuscleGroup.LEGS,
    view: 'front',
    side: 'right',
    location: {
      x: 61,
      y: 94,
      width: 3,
      height: 8
    },
    details: {
      function: '발목의 배굴과 발의 내번을 담당하는 정강이 전면 근육',
      strengthenReasons: [
        '발목 안정성 향상',
        '정강이 통증 예방',
        '보행 능력 개선',
        '발목 부상 예방'
      ],
      stretchingReasons: [
        '정강이 긴장 완화',
        '발목 유연성 증진',
        '족저근막 건강',
        '하지 순환 개선'
      ],
      exercises: [
        {
          name: 'Toe Raises',
          koreanName: '발끝 올리기',
          type: 'strength',
          difficulty: 'beginner',
          instructions: [
            '발뒤꿈치를 바닥에 고정',
            '발끝을 최대한 위로 들어올림',
            '앞정강이근의 수축을 느끼며 유지',
            '천천히 발끝을 내림'
          ],
          tips: [
            '발뒤꿈치가 바닥에서 떨어지지 않도록 하세요',
            '정강이 앞쪽 근육의 수축을 의식하세요'
          ]
        }
      ],
      anatomy: {
        origin: '경골 외측(정강이뼈 바깥쪽)',
        insertion: '첫째 중족골, 내측 설상골(엄지발가락 뼈, 발등 안쪽 뼈)',
        action: ['발목 배굴', '발의 내번']
      }
    }
  }
];