# 트포(변형생성문법) HTML 프로젝트 지침

> 중학교 영어교사의 임용시험(2차) 대비 변형생성문법 학습 사이트 제작 프로젝트.  
> GitHub Pages로 배포, 티스토리 블로그(obangti.tistory.com) iframe 삽입 방식.

---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| GitHub Repo | `Namkicheol/transformational-grammar` |
| GitHub Pages | `https://namkicheol.github.io/transformational-grammar/` |
| 블로그 | `obangti.tistory.com` (Ch.2 스타일 유지) |
| 교재 | Radford *Transformational Grammar* |
| 기준 답안 | gee 예상답안 PDF + 예문정리 PDF |

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
| **TG.md** | 원서 전체 텍스트. 예문 원문·규칙 정의 **무조건 여기서 찾기** |
| **Radford 원서 PDF** (`transformational_grammar_OCR_compressed-*.pdf`) | TG.md에 그림·수형도 없을 때만 보조 참조 |

### 🥈 2순위 — 해설·출제 포인트 보조
| 파일 | 강점 챕터 |
|------|----------|
| `2__정T_트포_theory_단권화.md` | Ch2~3 규칙 요약 |
| `합격자_트포_예상답안.pdf` (gee) | 정답·출제 포인트 전 챕터 |
| `정T_트포_예문_정리_답안_해설.pdf` | 빈출 예문 정오 판정 |
| `11__트포_정비문_판단_모음_예문정리트포_39p구매.pdf` | 정비문 패턴 |
| `단숲_TG_정리.md` | Ch5 Negation |
| `단숲_트포_정리.md` | Ch7 Raising/Control |
| `트포_단권화__구매_.md` | Ch4~7 전반 보조 |
| `윤영어학.md` | Ch5 Negation |
| `최진호_영어학_중급_OCR.md` | Ch5·7 (OCR 일부 깨짐 주의) |
| `1__트포_원서정리_87p_구입_.md` | 기출문제 형식 참조 |
| `movement_단권화.md` | Ch6 Movement 전용 |
| `Raising_And_Control_.md` | Ch7 Raising/Control 전용 |
| `밍우_영어학분석.md` | 기출 출제 패턴 분류 |

### ❌ 참조 불가
| 파일 | 이유 |
|------|------|
| `메가쌤_기출분석.md` | PDF→OCR 변환 실패. 실제 내용 없음 |

### 📋 Ch별 2순위 참조 우선순위
| 챕터 | 참조 순서 |
|------|---------|
| Ch4 NP | 2__정T단권화 → 트포_단권화 → 윤영어학 → 최진호 |
| Ch5 Negation | 단숲_TG_정리 → 윤영어학 → 최진호 → 트포_단권화 |
| Ch6 Movement | movement_단권화 → 트포_단권화 → 윤영어학 → 밍우기출 |
| Ch7 Raising/Control | Raising_And_Control_.md → 단숲_트포 → 최진호 → 트포_단권화 |

> ⚠️ **원칙**: 예문은 반드시 TG.md 원문 그대로. 규칙 정의도 TG.md 기준.  
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

참조: TG.md (프로젝트 지식) / gee 예상답안 (프로젝트 지식)
OX 효과음: /home/claude/beep_js.txt 확인 후 사용
```

---

## 주의사항

- `raw.githubusercontent.com` URL 캐시 딜레이 → API로 SHA 직접 확인
- 블로그 삽입 = **iframe** → GitHub 파일 수정하면 블로그 자동 반영
- **iOS 효과음**: beep_js.txt 없으면 위 재생성 코드 실행 후 시작
- **OX JS 오류**: 반복 수정 시 beep 함수 잔재 코드 쌓임 → `node --check` 필수
- **concepts 누락 섹션**: TG 원서 챕터 목차와 대조 필수
