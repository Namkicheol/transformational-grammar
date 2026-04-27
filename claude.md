# 트포(변형생성문법) HTML 프로젝트 지침

> 중학교 영어교사의 임용시험(2차) 대비 변형생성문법 학습 사이트 제작 프로젝트.  
> GitHub Pages로 배포, 티스토리 블로그(obangti.tistory.com) iframe 삽입 방식.

---

## 🔗 testmaster(giulmmaster) 연동 — concept_link 자동 적용 (필수)

이 레포의 `_study.html` / `_concepts.html` 챕터를 만들거나 변경하면, testmaster의 기출 데이터가 자동으로 그 챕터를 "💎 합격자 노트에서 더 자세히" 링크로 가리키도록 매핑표를 갱신해야 한다.

**이 레포명 (concept_anchors.json key): `transformational-grammar`**

### 새 챕터 만들 때 절차

1. 해당 HTML 안 각 섹션에 `id="..."` anchor 부여 (의미 있는 영문 slug 권장: `move-alpha`, `theta-criterion` 등)
2. testmaster의 `data/concept_anchors.json` 갱신 — 해당 챕터의 anchor·title·terms 추가:
   ```json
   "transformational-grammar": {
     "ch2_concepts.html": [
       { "anchor": "move-alpha", "title": "Move α",
         "terms": ["Move α", "Move alpha", "movement", "wh-movement"] }
     ]
   }
   ```
3. testmaster에서 자동 적용 + 검증 실행:
   ```bash
   cd ~/Library/CloudStorage/OneDrive-학장중학교/giulmmaster
   python3 scripts/wire_concept_links.py
   ```
4. 출력에서 `깨진링크: 0건` 확인. 깨졌으면 anchor 이름 수정.

### 트리거 (Claude 자동 실행)

다음 상황에서 별도 지시 없이 위 절차를 실행한다:
- 새 `_study.html` / `_concepts.html` 챕터 생성/완성 직후
- 기존 챕터에 섹션 추가/제거/anchor 변경 시
- 사용자가 "기출 연동", "concept_link", "testmaster 적용", "wire" 등 언급 시

### testmaster 위치

`/Users/namgicheol/Library/CloudStorage/OneDrive-학장중학교/giulmmaster/`  
규칙 원본: 위 디렉토리의 `CLAUDE.md` "concept_link 자동 적용" 섹션

---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| GitHub Repo | `Namkicheol/transformational-grammar` |
| GitHub Pages | `https://namkicheol.github.io/transformational-grammar/` |
| 블로그 | `obangti.tistory.com` (Ch.2 스타일 유지) |
| 교재 | Radford *Transformational Grammar* |
| 기준 답안 | gee 예상답안 기준 (Ch.2~3 완료) |

---

## 스킬 가이드

| 상황 | 호출할 스킬 |
|------|------------|
| HTML 파일 제작 (예문·해설·OX 퀴즈·효과음·점검 규칙) | `transformational-grammar-html` |
| 이미지 생성 (Pencil MCP) | `blog-image-pencil` |

---

## 참조 자료 우선순위

### 🥇 1순위 — 반드시 먼저 확인
| 파일 | 용도 |
|------|------|
| **`refs/transformational_grammar.md`** | 원서 전체 텍스트. 예문 원문·규칙 정의 **무조건 여기서 찾기** |
| **`refs/transformational_grammar_images/`** | 원서 이미지·수형도 (그림 필요 시 보조) |

### 🥈 2순위 — 해설·출제 포인트 보조
| 파일 | 강점 챕터 |
|------|----------|
| `refs/단숲_TG 정리.md` | Ch5 Negation |
| `refs/트포 단권화 (구매).md` | Ch4~7 전반 보조 |
| `refs/영어학 정리.md` | 영어학 전반 |
| `refs/1. 트포 원서정리 87p(구입).md` | 기출문제 형식 참조 |
| `refs/movement 단권화.md` | Ch6 Movement 전용 |
| `refs/Raising And Control .md` | Ch7 Raising/Control 전용 |
| `refs/raising and control.md` | Ch7 기출 문장 위주 |

### 📋 Ch별 2순위 참조 우선순위
| 챕터 | 참조 순서 |
|------|---------|
| Ch4 NP | 트포 단권화 → 영어학 정리 → 1.트포원서정리 |
| Ch5 Negation | 단숲_TG 정리 → 트포 단권화 → 영어학 정리 |
| Ch6 Movement | movement 단권화 → 트포 단권화 |
| Ch7 Raising/Control | Raising And Control → raising and control → 단숲_TG 정리 → 트포 단권화 |

> ⚠️ **원칙**: 예문은 반드시 `refs/transformational_grammar.md` 원문 그대로. 규칙 정의도 동일 기준.  
> 나머지 md는 해설 보조·임용 출제 포인트 파악용으로만 사용.

---

## 매 챕터 작업 순서

1. **HTML 제작** (GitHub Pages 배포용 단일 파일, gee 답안 기준)
2. **티스토리 제목** (SEO 최적화)
3. **태그 10개**
4. **제미나이 썸네일 프롬프트** (영어, 챕터 주제 반영한 구체적 이미지 묘사)

---

## HTML 파일 구성 (챕터당 최대 5개)

| 파일명 | 내용 |
|--------|------|
| `chN_concepts.html` | 개념 정리 + 미니퀴즈 |
| `chN_exercises.html` | 실전 문제 (gee 답안 기준) |
| `ChN_ox_order.html` | OX 퀴즈 (순서 고정) |
| `ChN_ox_random.html` | OX 퀴즈 (랜덤) |
| `ChN_tree.html` | 수형도 (Tree Diagram) |

---

## HTML 제작 원칙

→ **`transformational-grammar-html` 스킬** 참조 (예문·해설·concepts 원칙·OX 필수 기능·효과음·점검 원칙 전체 포함)

---

## GitHub 자동 업로드 방식

- 매 파일 완성 후 **GitHub API(PUT)** 로 자동 업로드
- `index.html`도 매번 자동 수정 (완료 챕터 반영)
- 업로드 성공: HTTP 200(수정) / 201(신규)

```python
import requests, base64, json

TOKEN = "← 프로젝트 지침 맨 아래 토큰 참조"
REPO  = "Namkicheol/transformational-grammar"
HEADERS = {"Authorization": f"token {TOKEN}", "Content-Type": "application/json"}

def upload(filename, html, msg):
    r = requests.get(f"https://api.github.com/repos/{REPO}/contents/{filename}", headers=HEADERS)
    sha = r.json().get("sha", "")
    payload = {"message": msg, "content": base64.b64encode(html.encode()).decode()}
    if sha: payload["sha"] = sha
    res = requests.put(f"https://api.github.com/repos/{REPO}/contents/{filename}",
                       headers=HEADERS, data=json.dumps(payload))
    return res.status_code
```

---

## 현재 작업 진행 현황

| 챕터 | 파일 | 상태 | 비고 |
|------|------|------|------|
| Ch.2 | `ch2_concepts.html` | ✅ | §2.3~2.4 Ambiguity 섹션 추가 |
| Ch.2 | `ch2_exercises.html` | ✅ | MC 15·OX 1·FI 1 (21문항) |
| Ch.2 | `Ch2_ox_order.html` | ✅ | 43문항·점프바·팝업·효과음 |
| Ch.2 | `Ch2_ox_random.html` | ✅ | 43문항·필터바·팝업·효과음 |
| Ch.2 | `Ch2_tree.html` | ✅ | SVG 6개 |
| Ch.3 | `ch3_concepts.html` | ✅ | §3.4 No Crossing·§3.6 Particle 추가 |
| Ch.3 | `ch3_exercises.html` | ✅ | 24문항 |
| Ch.3 | `Ch3_ox_order.html` | ✅ | 30문항·점프바·팝업·효과음 |
| Ch.3 | `Ch3_ox_random.html` | ✅ | 30문항·필터바·팝업·효과음 |
| Ch.3 | `Ch3_tree.html` | ✅ | SVG 5개·marker 수정 완료 |
| Ch.4~ | — | ⏳ | |

---

## index.html 관리 원칙

- 챕터 완료 시 해당 카드 `disabled` 제거 → 링크 연결
- 챕터당 최대 5개 카드 (개념·실전·OX순서·OX랜덤·수형도)

---

## 새 대화 시작 시 붙여넣기 템플릿

```
트포 HTML 작업 이어서 진행

완료: Ch.2 (5개), Ch.3 (5개) — index.html 반영 완료
다음 작업: [챕터 번호 + 파일 종류]

참조: refs/transformational_grammar.md (로컬 파일) / gee 답안 기반 Ch.2~3 완료
OX 효과음: /home/claude/beep_js.txt 확인 후 사용
```

---

## 주의사항

- `raw.githubusercontent.com` URL 캐시 딜레이 → API로 SHA 직접 확인
- 블로그 삽입 = **iframe** → GitHub 파일 수정하면 블로그 자동 반영
- **iOS 효과음**: beep_js.txt 없으면 위 재생성 코드 실행 후 시작
- **OX JS 오류**: 반복 수정 시 beep 함수 잔재 코드 쌓임 → `node --check` 필수
- **concepts 누락 섹션**: TG 원서 챕터 목차와 대조 필수

---

## 🚨 기출 추정 절대 금지 (전 콘텐츠 공통)

블로그·사이트 콘텐츠·해설·OX 어디든 임용 **기출 관련 정보(연도·출제 의도·답안 패턴 등) 추정 금지**. 검증된 refs에서만 인용한다.

**검증 절차** (TG):
1. **1차**: `refs/transformational_grammar.md` 원서 — 예문·규칙 정의 (단, 기출 연도 매핑은 별도)
2. **2차**: `refs/단숲_TG 정리.md`(Ch5) / `refs/movement 단권화.md`(Ch6) / `refs/Raising And Control .md`(Ch7) — Ch별 기출 분석
3. **3차**: `refs/1. 트포 원서정리 87p(구입).md` — 기출문제 형식 참조
4. **2022년 이후**: 루이스 5판 범위 밖 → giulmmaster의 `refs/2025 전공 기출 김재균해설.md`, `refs/2026 기출 권두걸팀 해설서.md` TG/통사론 파트
5. **gee 답안 기준** 활용 (Ch.2~3 완료) — 답안 패턴 검증

**원칙**:
- **연도·기출 정보 표기는 OPTIONAL** — 블로그 작성 시 검증 부담스러우면 본문에 박지 않아도 됨. 개념 위주로 작성해도 무방
- **박는 경우에만** refs 검증 필수. 검증 매칭 0건이면 표기 **생략**. "그럴법한" 추정값 박지 말 것
- 추정 = 수험생에게 잘못된 정보 제공 = **치명적 오류**

---

## 블로그 글 작성

전역 블로그 지침 `~/Library/CloudStorage/OneDrive-학장중학교/blog write.md` 의 **"임용고시 (영어학·영교론)"** 섹션과 그 하위 **"📚 임용 블로그 글쓰기 규칙"** 을 따른다.

본 레포 유형: **A형 (변형생성문법 서브노트, Radford)** — 블로그 작성 대상.

핵심:
- 블로그 글은 `.md` 파일로 작성 (티스토리 마크다운 에디터)
- **본문 = 서브노트 핵심 + 4섹션 보강** (① 개념 정의 [필수] + ②③④ 중 최소 2개)
  - ② 기출 맥락 / ③ 키텀 비교 / ④ 수험 활용 팁
  - **합격자 노트·gee 답안·`refs/단숲_TG 정리.md` 등에 팁 있으면 ④ 무조건 포함**
- **한글 설명 시 용어는 영어 원문 그대로** (예: `C-command`·`Binding`·`Raising`·`Control` 그대로. "C-통제"·"결속" 등 어설픈 번역 X). 학자명·이론명·기술 용어 모두 영어 유지
- **본문에 출처 인용 표기 불필요** (`— Radford Ch.4` 같은 표기 X)
- **키워드 하이라이트 필수** (5색): 통사 용어(C-command·Binding·Movement 등) → 파랑 `#3182ce` / 학자명(Radford·Chomsky 등) → 보라 `#805ad5` / 함정·비문(*표시 등) → 빨강 `#c53030` / 정문·올바른 분석 → 청록 `#319795` / 현직쌤 팁 → 주황 `#dd6b20`
- **기출 연도 빨간색 인라인** (`#c53030`)
- 핵심 개념(C-command·Binding·NPI·Movement·Raising/Control 등)은 **영어 원문 한 문단 + 한글 설명 한 문단** 교차. 영어 원문은 `refs/transformational_grammar.md` 원서에서 발췌 (단, 본문에는 출처 표기 X)
- **Radford 교재 표기**: `Radford 교수의 『Transformational Grammar』` 만 사용. "(국제판)" 표기 절대 금지
- **신규 글 썸네일은 Pencil MCP** (`blog-image-pencil` 스킬)로 생성. 기존 글은 그대로 유지
- **SVG 사용 금지** (블로그 한정. `ChN_tree.html` 등 웹앱 페이지 내부 SVG 수형도는 별개)

### TG(변형생성문법) 블로그 고유 규칙

**사이트 구조 → 블로그 매핑**
- 사이트는 챕터당 5개: `chN_concepts.html` / `chN_exercises.html` / `ChN_ox_order.html` / `ChN_ox_random.html` / `ChN_tree.html`
- **블로그 글 단위 옵션**:
  - **통합 1편**: 개념 + 트리 + 실전 + OX 한 글 안에 4섹션으로 통합 (긴 글)
  - **분리 2편**: 개념편 (개념정리·키텀비교) + 응용편 (트리 다이어그램·실전·OX)

**iframe / 링크 배치 — iframe 최소 원칙**
- ❌ **개념정리(`chN_concepts.html`) iframe 임베드 금지** — 4섹션 본문에 이미 개념을 풀어 썼으므로 중복
- ❌ **실전·OX(`chN_exercises.html`, `ChN_ox_*.html`) iframe 임베드 금지** — 이미 별도 obangti.tistory.com 글로 발행됨
- ⚪ **트리(`ChN_tree.html`) iframe 임베드 허용** — 시각 자료(SVG 트리)는 본문 텍스트 중복이 아닌 고유 자료. 단, 트리도 별도 블로그 글로 발행됐다면 링크 버튼 우선
- ✅ **본문 끝에 실전·OX 링크 버튼**만 추가 — `obangti.tistory.com/<post-id>` 형식
- 트리 iframe URL: `https://namkicheol.github.io/transformational-grammar/ChN_tree.html` (필요 시만)
- 실전·OX 링크 버튼 템플릿:
  ```html
  <p align="center">
  <a href="https://obangti.tistory.com/<post-id>" target="_blank" style="display:inline-block;padding:14px 28px;background:#3182ce;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;font-size:15px;">📝 [Ch.N] 실전·OX 풀러 가기 →</a>
  </p>
  ```

**📝 실전·OX 블로그 글 구조** (별도 발행 — 해설 중심 3섹션)
- ① 짧은 도입 (1-2줄)
- ② 본문 = **N문항 × 자세한 해설** (90%): 문항/답(✅❌)/영어 원문 인용 1-2문장/한글 풀이/⚠️ 함정/빨간 연도/5색 하이라이트
- ③ 개념정리 글로 돌아가기 링크 버튼 (사이클 형성)
- TG 특화: 통사 답안 패턴(`Sentence (X) is grammatical/ungrammatical because [violation]`) 해설에 명시 / **트리 다이어그램 해설은 iframe(`ChN_tree.html`) 또는 PNG 첨부**
- 핵심 용어(C-command·Binding·Movement·Raising/Control 등) 영어 그대로
- 분량: 5,000~10,000자 (문항당 250-500자)
- 자세한 규칙은 `blog write.md` "📝 OX·실전·응용 블로그 글 구조" 참조

**4섹션 보강 포인트 (TG 특화)**
- ① **개념 정의**: C-command·Binding·NPI·Movement·Raising/Control 등 **핵심 용어 영어 그대로**. 영어 원문은 `refs/transformational_grammar.md` 원서에서 발췌
- ② **기출 맥락**: 통사 기출 답안 패턴(`Sentence (X) is [grammatical/ungrammatical]. [Violation] is violated because ...`) 풀이
- ③ **키텀 비교 (Ch별 보조 자료 활용)**:
  - Ch4 NP: `refs/트포 단권화 (구매).md` + `refs/영어학 정리.md`
  - Ch5 Negation: `refs/단숲_TG 정리.md` (강함)
  - Ch6 Movement: `refs/movement 단권화.md`
  - Ch7 Raising/Control: `refs/Raising And Control .md` + `refs/raising and control.md`
- ④ **수험 팁**: gee 답안 기준 + 합격자 노트의 답안 작성 패턴 무조건 포함

**Tree Diagram 시각화 규칙 (TG 특화)**

블로그 글 SVG 금지의 **유일한 예외**가 syntactic tree diagram. 단, 우선순위는 다음과 같이 적용:

| 순위 | 방법 | 비고 |
|---|---|---|
| 1순위 | `ChN_tree.html` iframe 임베드 | 사이트 SVG 트리 그대로 활용 — 가장 정확·자연스러움 |
| 2순위 | 사이트 트리 페이지 **스크린샷 → PNG** 업로드 | 정적 이미지로 박고 싶을 때 |
| 3순위 | 마크다운 **bracketed notation** | 짧은 구조에만. 예: `[CP [C that] [TP [DP John] [VP left]]]` |
| **예외** | **SVG 직접 삽입 허용** | 위 1~3 모두 부적절한 경우만 (예: 본문 흐름 중에 partial tree 시연이 꼭 필요) |

- ❌ **Pencil MCP 트리 생성 금지** — AI 이미지 생성은 노드 라벨·가지 연결이 부정확해 통사 트리에 부적합
