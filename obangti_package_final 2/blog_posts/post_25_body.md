---
## 📌 이 글의 활용 방법

위 앱은 **Radford의 『Transformational Grammar』(국제판) Ch.2 Structure** 예문을 변형하여, **phrase structure tree(구 구조 수형도)**를 직접 그려보며 연습할 수 있도록 구성되어 있습니다. Ch.2 시리즈의 마지막 단계로, 앞서 O/X 퀴즈와 실전 문제로 훈련한 구성소 판별 능력을 **시각적 구조 분석**으로 완성하는 과정입니다.

O/X 퀴즈가 아직 익숙하지 않다면 먼저 [순서대로 풀기(/23번)](https://obangti.tistory.com/23)과 [랜덤 풀기(/24번)](https://obangti.tistory.com/24)로 예문 판별 훈련을 마친 뒤 이 글로 오는 것을 권장합니다.

---

## 🧠 현직쌤이 Tree Diagram을 강조하는 이유

통사론 공부를 하면서 "개념은 이해했는데 논술에서 어떻게 쓰지?"라는 막막함을 많이 겪었습니다. 그 막막함을 해결해 준 것이 바로 tree diagram이었어요.

Tree diagram은 단순한 그림이 아닙니다. 임용 논술에서 통사 구조를 분석할 때, **"왜 이렇게 분석하는가"의 근거를 시각적으로 제시하는 도구**입니다. 예를 들어, phrasal verb와 prepositional verb의 차이를 서술할 때 tree를 함께 제시하면 "동사와 particle이 하나의 V 노드 아래 묶인다"는 구조적 근거가 명확하게 드러납니다. 글로만 설명하는 것보다 훨씬 설득력 있는 답안이 됩니다.

임용 기출을 분석해보면, tree diagram을 그리거나 특정 노드의 관계를 설명하는 문제가 꾸준히 출제되어 왔습니다. 단순히 "알고 있다"는 수준을 넘어, **새로운 예문에 빠르게 tree를 적용할 수 있는 능력**이 요구됩니다.

---

## 📋 Tree Diagram 핵심 원리 정리

### 1. X-bar 구조의 기본 틀

Radford Ch.2에서 다루는 tree는 **X-bar 이론**을 기반으로 합니다. 모든 구(phrase)는 핵어(head)를 중심으로 specifier — head — complement의 계층 구조를 이룹니다.

- **NP(명사구)**: *the old professor* → Det + N' 구조
- **VP(동사구)**: *read the book carefully* → V + NP + AdvP 구조
- **PP(전치사구)**: *on the table* → P + NP 구조

### 🌳 기본 구 구조 수형도 예시

**[여기에 이미지 삽입 → tree_01_ch2_basic.png]**

위 수형도는 *"The student reads the book on the table"* 문장의 완전한 구조를 보여줍니다. S가 가장 위에 있고, NP(주어)와 VP가 직접 분기하며, VP 안에서 V + 목적어 NP + PP가 결합하는 모습을 한눈에 확인할 수 있어요. 이런 기본 틀을 완전히 내면화해야 새 예문을 만났을 때 어디서 분기점이 생기는지 즉시 판단할 수 있습니다.

### 2. Phrasal Verb vs. Prepositional Verb — Tree의 차이

Ch.2에서 가장 핵심적인 tree 구분입니다.

**Phrasal verb** (*turn off*)의 경우, particle(*off*)은 동사와 함께 **하나의 V 노드** 아래 묶입니다. 즉, tree에서 V가 *turn off* 전체를 포함하는 구조입니다.

**Prepositional verb** (*look at*)의 경우, *at*은 독립적인 **P 노드**를 형성하고, 그 아래 NP 목적어가 결합합니다. 즉, VP → V + PP 구조입니다.

### 🌳 Phrasal Verb vs Prepositional Verb 구조 비교

**[여기에 이미지 삽입 → tree_02_phrasal_vs_prep.png]**

이 구조적 차이가 particle movement의 가능 여부를 설명하는 근거가 됩니다. Particle이 V 노드 내부에 있기 때문에 목적어 뒤로 이동할 수 있는 것이고, 전치사가 독립 PP를 이루기 때문에 이동이 불가능한 것입니다.

> 💡 **현직쌤 팁**: Tree를 그릴 때 phrasal verb인지 먼저 판단하고 나서 노드를 배치하세요. 반대로 tree를 보고 "이 구조라면 particle movement가 가능/불가능하다"를 역으로 읽는 연습도 논술 대비에 필수입니다.

### 3. VP-adverb vs. S-adverb — 위치가 다르다

부사의 수식 범위에 따라 tree에서 부착(adjoin) 위치가 달라집니다.

- **VP-adverb** (*carefully*, *quickly* 등): VP 노드에 부착 → VP 내부 요소
- **S-adverb** (*probably*, *certainly*, *honestly* 등): S(IP) 노드에 부착 → 문장 전체 수식

이 구분은 *do so* proform test와 직결됩니다. *do so*로 대체했을 때 S-adverb는 문장에 남고, VP-adverb는 *do so* 안에 포함됩니다. Tree에서 어느 노드에 부착되는지를 파악하면 proform test 결과를 구조적으로 설명할 수 있습니다.

> 💡 **현직쌤 팁**: 부사 위치를 tree에 표시할 때, 해당 부사가 수식하는 요소의 **바로 위 노드**에 adjoin한다고 기억하세요. 그 노드를 먼저 확정한 뒤 부착 위치를 결정하는 순서가 오류를 줄여줍니다.

### 4. Coordination — 같은 레벨, 같은 범주

등위 결합은 tree에서 **동일 범주의 노드끼리** 같은 레벨에서 and/or/but으로 연결됩니다. *[NP and NP]*, *[VP and VP]* 구조가 tree에서 자연스럽게 표현됩니다.

범주가 다른 요소를 등위 연결하면 tree 구조 자체가 성립하지 않습니다. 이것이 coordination test가 구성소 판별의 근거가 되는 이유입니다.

---

## 📝 Tree 그리기 체크리스트

새 예문을 만났을 때 아래 순서로 tree를 그리면 오류가 줄어듭니다.

1. **문장 성분 파악**: S → NP + VP 분리
2. **핵어(head) 확인**: 각 구의 핵어(N, V, P, A)를 먼저 표시
3. **보충어(complement) 결합**: 핵어에 직접 결합하는 요소 추가
4. **지정어(specifier) 결합**: Det, Aux 등 추가
5. **부가어(adjunct) 처리**: 부사, 수식어의 부착 위치 결정
6. **구조 테스트로 검증**: particle movement / proform / coordination 테스트로 최종 확인

---

## 🔗 Ch.2 Structure 시리즈 전체 목록

| 순서 | 글 | 특징 |
|------|-----|------|
| 1단계 | [핵심 개념 정리 + 미니퀴즈](https://obangti.tistory.com/18) | 세 가지 테스트 원리 파악 |
| 2단계 | [실전 연습문제 (Exercise III~VIII)](https://obangti.tistory.com/19) | OX·객관식·빈칸 복합 유형 |
| 3단계 | [예문 O/X 퀴즈 — 순서대로 (43문제)](https://obangti.tistory.com/23) | 예문 전체 순서대로 익히기 |
| 4단계 | [예문 O/X 퀴즈 — 랜덤 (43문제)](https://obangti.tistory.com/24) | 랜덤 배치로 실전 감각 훈련 |
| 5단계 | 이 글 — Tree Diagram 연습 | 구조를 시각화하는 마무리 |

Ch.2를 완료했다면 다음 단계로 넘어가세요!

- 👉 [Ch.3 Phrase-markers 핵심 정리 — C-command · Binding · NPI ever 완전 분석](https://obangti.tistory.com/34)
- 👉 [Ch.3 Phrase-markers 연습문제 — C-command · NPI ever · Anaphor 실전 OX·객관식](https://obangti.tistory.com/35)

---

Tree diagram을 손으로 그리고, 구조 테스트로 검증하고, 논술 문장으로 서술하는 세 단계가 자연스럽게 연결될 때 통사론 고득점의 문이 열립니다. Ch.2 시리즈 완주하신 것, 정말 잘 하셨습니다. 파이팅! 😊

---

> 📚 **저작권 안내**: 이 글의 예문 및 개념은 *Transformational Grammar* (International Edition), Radford, Andrew 를 참고하였습니다.
