---
## 📌 이 글의 활용 방법

위 앱은 **Radford의 『Transformational Grammar』(국제판) Ch.3 Phrase-markers**에서 다루는 세 가지 핵심 개념 — **C-command, Binding Theory(결속 이론), NPI *ever*** — 을 예문 중심으로 정리하고 퀴즈로 점검할 수 있도록 구성되어 있습니다.

Ch.2의 구성소 판별과 Tree Diagram을 마쳤다면, Ch.3는 그 tree 위에서 **노드 간의 지배 관계**를 분석하는 단계입니다. C-command는 Ch.3 전체의 뼈대가 되는 개념이므로, 이 글에서 정의를 정확히 잡고 넘어가는 것이 가장 중요합니다.

---

## 🧠 현직쌤의 Ch.3 학습 경험

솔직히 말씀드리면, Ch.3는 Ch.2보다 체감 난이도가 훨씬 높습니다. Ch.2는 "이 묶음이 구성소인가?"라는 비교적 직관적인 질문을 다뤘다면, Ch.3는 **tree 위에서 노드 사이의 추상적 지배 관계**를 따져야 하기 때문입니다.

처음 C-command 정의를 읽었을 때 "노드 A가 노드 B를 c-command한다"는 문장이 뭘 뜻하는지 한참 헷갈렸어요. 결국 tree를 수십 번 직접 그려보면서 손으로 "A에서 위로 올라가면 B가 보이는가"를 확인하는 과정을 반복한 뒤에야 감이 잡혔습니다. 이 글에서는 그 과정을 최대한 구체적으로 풀어드릴게요.

---

## 1. C-command — Ch.3 전체의 핵심

### 정의

노드 A가 노드 B를 **c-command**한다는 것은:

> A가 B를 지배하지 않으면서(does not dominate B), A를 지배하는 모든 분기 노드(branching node)가 B도 지배할 때

쉽게 말하면, **A에서 tree를 한 칸 위로 올라갔을 때 B가 그 아래에 있으면**, A가 B를 c-command하는 것입니다.

### 🌳 C-command 예시: "John saw him"

**[여기에 이미지 삽입 → tree_03_ccommand.png]**

위 수형도에서 NP[John]은 NP[him]을 c-command합니다. 확인 절차는 이렇습니다:

- **NP[John]**은 VP를 c-command한다 (S 노드 아래에 VP가 있으므로)
- **NP[John]**은 *saw*를 c-command한다
- **NP[John]**은 *him*을 c-command한다
- **VP**는 NP[John]을 c-command한다 (S 노드 아래에 NP가 있으므로)
- **saw(V)**는 him(NP)을 c-command하지 않는다 (V 바로 위 VP가 him을 지배하지 않음)

> 💡 **현직쌤 팁**: C-command를 확인할 때 항상 "**첫 번째 분기 노드(first branching node)**"를 찾는 것이 핵심이에요. A 바로 위의 첫 번째 분기 노드가 B를 지배하면 c-command 성립, 아니면 불성립입니다. 이 한 문장만 기억하면 대부분의 문제가 풀립니다.

---

## 2. Binding Theory — 대명사와 재귀대명사의 분포

Binding Theory는 C-command를 기반으로 **대명사(pronoun)와 재귀대명사(anaphor)가 어디에 위치할 수 있는가**를 설명하는 이론입니다. 임용 기출에서 매우 자주 등장하는 파트입니다.

### 핵심 원리

**결속(binding)**이란 어떤 표현이 자신의 선행사(antecedent)에 의해 **c-command되면서 동일 지시(coreferential)**되는 관계입니다.

Radford Ch.3에서 다루는 주요 원리:

| 표현 유형 | 조건 | 예 |
|-----------|------|----|
| **Anaphor** (재귀대명사/상호대명사) | 결속 영역(binding domain) 내에서 반드시 결속되어야 함 | *himself, themselves, each other* |
| **Pronoun** (대명사) | 결속 영역 내에서 결속되어서는 안 됨 (자유로워야 함) | *him, her, them* |
| **R-expression** (지시 표현) | 어떤 경우에도 결속되어서는 안 됨 | *John, the professor* |

### 🌳 Anaphor vs Pronoun — 상보적 분포 시각화

**[여기에 이미지 삽입 → tree_04_binding.png]**

위 비교 수형도에서 보듯이:

- ① *John hurt himself*: himself는 anaphor라서 John에 의해 c-command되고 같은 절 안에 있으므로 문법적입니다 (O).
- ② *John hurt him* (him = John): him은 pronoun이라서 결속 영역 안에서 결속되면 안 되는데, 여기서는 John에 의해 같은 절 안에서 결속되기 때문에 비문이 됩니다 (X).

> 💡 **현직쌤 팁**: Anaphor와 pronoun의 분포는 서로 **상보적(complementary)** 입니다. Anaphor가 가능한 자리에서 pronoun은 불가능하고, 반대도 성립합니다. 이 상보적 분포를 tree에서 직접 확인하는 연습이 논술 답안의 질을 높입니다.

---

## 3. NPI *ever* — 부정 극성 항목

**NPI(Negative Polarity Item)**란 부정적 맥락에서만 나타날 수 있는 표현입니다. *ever*, *any*, *at all* 등이 대표적입니다.

### 핵심 원리

*ever*는 자신을 c-command하는 **부정 표현(negation)이나 부정적 맥락** 안에서만 문법적입니다.

```
① I don't think he has ever been there.   ✅ (부정 c-command)
② *I think he has ever been there.        ❌ (부정 없음)
③ Has he ever been there?                 ✅ (의문문 = 부정적 맥락)
```

### 🌳 NPI 인가 조건: 구조가 결정한다

**[여기에 이미지 삽입 → tree_05_npi.png]**

위 두 수형도가 핵심을 보여줍니다:

- ① *He doesn't think that anyone left* — *doesn't*가 상위 절에 위치해 *anyone*을 c-command하므로 정문 (O).
- ② *\*Anyone doesn't think he left* — *anyone*이 주어 자리에 있어 오히려 *doesn't*보다 높은 위치에 있습니다. *doesn't*가 *anyone*을 c-command하지 못하므로 비문 (X).

C-command와 연결되는 지점이 핵심입니다. 부정 표현이 *ever*를 c-command하지 않으면 비문이 됩니다. 이 분석은 **NPI의 분포가 선형 순서(word order)가 아니라 구조적 관계(c-command)로 결정된다**는 것을 보여주는 중요한 증거입니다.

> 💡 **현직쌤 팁**: 임용 논술에서 NPI 문제가 나오면 "왜 이 문장에서 *ever*가 가능/불가능한가"를 단순히 "부정문이어서"로 설명하면 감점입니다. **"부정 표현이 *ever*를 c-command하기 때문"** 이라는 구조적 설명이 들어가야 고득점 답안이 됩니다.

---

## 📝 Ch.3 핵심 개념 비교 요약

| 개념 | 핵심 정의 | 판별 방법 | 임용 출제 포인트 |
|------|-----------|-----------|----------------|
| C-command | A의 첫 번째 분기 노드가 B를 지배 | Tree에서 첫 분기 노드 확인 | 결속·NPI 분석의 전제 조건 |
| Anaphor 결속 | 결속 영역 내 c-command + 동일 지시 | Anaphor ↔ 선행사 관계 확인 | 정비문 판별, 분포 설명 |
| Pronoun 자유 | 결속 영역 내 결속 불가 | Pronoun ↔ 선행사 관계 확인 | Anaphor와 상보적 분포 |
| NPI *ever* | 부정 c-command 필요 | 부정 표현의 c-command 여부 | 구조적 분석 근거 서술 |

---

## 🔗 Ch.3 Phrase-markers 시리즈

- 👉 이 글 — Ch.3 핵심 개념 정리 (C-command · Binding · NPI ever)
- 👉 [Ch.3 실전 연습문제 — OX·객관식 (C-command · Anaphor · NPI ever)](https://obangti.tistory.com/35)
- 👉 [Ch.3 OX 퀴즈 — C-command · Anaphors · NPI ever 정비문 30문제](https://obangti.tistory.com/43)

**Ch.2 시리즈로 돌아가기**
- 👉 [Ch.2 핵심 개념 정리 + 미니퀴즈](https://obangti.tistory.com/18)
- 👉 [Ch.2 Tree Diagram 연습](https://obangti.tistory.com/25)

---

C-command 하나를 완전히 이해하면, Binding Theory와 NPI 분석이 자연스럽게 따라옵니다. 개념들이 서로 촘촘히 연결되어 있기 때문에, 한 개념을 예문과 tree로 확인하는 습관이 Ch.3 전체를 관통하는 열쇠입니다. 파이팅입니다! 😊

---

> 📚 **저작권 안내**: 이 글의 예문 및 개념은 *Transformational Grammar* (International Edition), Radford, Andrew 를 참고하였습니다.
