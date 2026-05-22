---
## 📌 이 글의 활용 방법

위 앱은 **Radford의 『Transformational Grammar』(국제판) Ch.3 Phrase-markers**에서 다루는 핵심 개념 — **C-command, Anaphor 결속, NPI *ever*** — 을 실전 문제 형식(OX·객관식)으로 점검할 수 있도록 구성되어 있습니다. 개념을 아는 것과 새로운 예문에 즉시 적용하는 것은 다른 능력이므로, 이 단계에서 실전 적용력을 훈련합니다.

개념 정리가 아직 충분하지 않다면 먼저 [Ch.3 핵심 개념 정리(/34번)](https://obangti.tistory.com/34)에서 C-command·Binding·NPI *ever*의 정의를 정확히 잡고 오는 것을 권장합니다.

---

## 🧠 Ch.3 실전 문제, 어떻게 접근해야 할까

Ch.3 문제에서 가장 흔한 실수는 **"예문의 의미를 이해하는 것"과 "구조 분석"을 혼동하는 것**입니다. 예를 들어 *John likes himself*의 의미는 누구나 이해합니다. 하지만 임용 논술에서 묻는 것은 "왜 *himself*가 여기에서 문법적인가"입니다. 답은 의미가 아니라 **구조(c-command와 결속 영역)** 에서 나와야 합니다.

이 글의 문제들을 풀 때는 매 문항마다 다음 3가지 중 어느 것이 쟁점인지 먼저 판단하세요.

1. **C-command 관계** — 노드 A가 노드 B를 c-command하는가?
2. **Anaphor·Pronoun 분포** — 결속 조건이 충족되는가?
3. **NPI 인가 조건** — 부정 표현이 NPI를 c-command하는가?

---

## 📋 문제 유형별 접근 전략

### 유형 1. C-command 관계 판별 (OX)

이 유형의 문제는 tree가 주어지고 "노드 X가 노드 Y를 c-command하는가"를 판별하는 형식입니다.

**접근 순서**:
1. 노드 X에서 출발
2. X의 **첫 번째 분기 노드(first branching node)**를 찾기
3. 그 분기 노드가 Y를 지배하는지 확인
4. 지배하면 O, 지배하지 않거나 X가 Y를 지배하면 X

> 💡 **현직쌤 팁**: "X가 Y를 지배하는 경우"는 c-command 성립 조건에서 명시적으로 제외됩니다. 부모-자식 관계는 c-command가 아니라는 점을 놓치지 마세요. 이 함정에 걸려 틀리는 경우가 의외로 많습니다.

### 유형 2. Anaphor 결속 조건 (OX·객관식)

*himself, themselves, each other* 등의 재귀대명사·상호대명사가 문장에서 문법적인가를 판별하는 문제입니다.

**접근 순서**:
1. Anaphor와 후보 선행사(antecedent) 확인
2. 선행사가 anaphor를 c-command하는가?
3. 둘이 **결속 영역(binding domain, 대개 가장 가까운 절) 내에 있는가**?
4. 두 조건 모두 충족되면 O, 하나라도 어긋나면 X

```
① John thinks that Mary likes himself.
   → himself의 선행사 후보 = John (바깥 절)
   → John이 결속 영역(that Mary likes ___) 밖에 있음 → 비문
```

> 💡 **현직쌤 팁**: 결속 영역을 시각적으로 확인할 때, **가장 가까운 시제 절(finite clause)의 경계선**을 펜으로 그려보세요. Anaphor가 그 경계 안에서 c-command되는 선행사를 갖고 있어야 문법적입니다. 이 시각화 습관이 판단 속도를 크게 높입니다.

### 유형 3. Pronoun 분포 (OX)

*him, her, them* 등의 대명사가 특정 위치에서 선행사와 동일 지시(coreferential) 관계를 가질 수 있는가 묻는 문제입니다. Anaphor와 **상보적 분포**를 이루는 것이 핵심입니다.

```
① John said that Mary hurt him.      ✅ (him = John, 결속 영역 밖)
② *John hurt him.                    ❌ (him = John이면, 결속 영역 내 결속 → 비문)
```

> 💡 **현직쌤 팁**: Pronoun 문제는 "의미적으로 누구를 가리키는가"가 주어져 있는 상태에서 그 지시가 구조적으로 가능한가를 묻습니다. 같은 *him*이라도 선행사를 누구로 설정하느냐에 따라 문법성이 달라집니다.

### 유형 4. NPI *ever* 인가 조건 (OX)

*ever*, *any*, *at all* 등 NPI가 문장에서 문법적인가를 판별하는 문제입니다.

**접근 순서**:
1. NPI 위치 확인
2. 문장 내 부정 표현(*not, no, never*, 의문문 등) 확인
3. 부정 표현이 NPI를 c-command하는가?
4. c-command하면 O, 아니면 X

```
① He didn't say that anyone had left.      ✅ (didn't가 anyone을 c-command)
② *Anyone didn't say that he had left.     ❌ (anyone이 오히려 didn't보다 높은 위치)
```

> 💡 **현직쌤 팁**: NPI 문제는 답안에서 반드시 "**부정 표현이 NPI를 c-command하기 때문에 문법적이다**" 또는 "**c-command하지 않기 때문에 비문이다**"라는 구조적 설명을 써야 합니다. 단순히 "부정문이 있어서"는 감점 요인입니다.

---

## 📝 문제 풀이 루틴

**1회차** — 각 문항이 어떤 유형(C-command 판별 / 결속 / NPI)인지 먼저 분류하면서 풉니다. 분류 자체가 정답의 절반입니다.

**2회차** — 틀린 문항만 재풀이하면서, 구조 분석을 tree 스케치로 확인합니다. 손으로 tree를 간단히 그려보면 c-command 관계가 시각적으로 명확해집니다.

**3회차** — 풀이 속도를 올리면서, 각 정답의 근거를 한 문장으로 서술해보는 연습을 합니다. 이 서술 문장이 실전 논술 답안의 재료가 됩니다.

---

## 🔗 Ch.3 Phrase-markers 시리즈

- 👉 [Ch.3 핵심 개념 정리 (C-command · Binding · NPI ever)](https://obangti.tistory.com/34)
- 👉 이 글 — Ch.3 실전 연습문제 (OX·객관식)
- 👉 [Ch.3 OX 퀴즈 — 정비문 30문제](https://obangti.tistory.com/43)
- 👉 [Ch.3 OX 랜덤 퀴즈 — 30문제 셔플](https://obangti.tistory.com/44)

**Ch.2로 돌아가기**
- 👉 [Ch.2 핵심 개념 정리](https://obangti.tistory.com/18)
- 👉 [Ch.2 Tree Diagram 연습](https://obangti.tistory.com/25)

---

Ch.3는 tree 위의 노드 관계를 다루는 추상적 파트라 처음에는 낯설 수 있습니다. 하지만 C-command 하나만 확실히 내면화하면 Binding과 NPI 문제가 같은 원리의 연장선임을 느끼게 됩니다. 실전 문제로 그 확인을 반복하세요. 파이팅! 😊

---

> 📚 **저작권 안내**: 이 글의 예문 및 개념은 *Transformational Grammar* (International Edition), Radford, Andrew 를 참고하였습니다.
