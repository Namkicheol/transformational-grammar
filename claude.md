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
| 교재 | Radford *Transformational Grammar* (TG.md로 텍스트 전환됨) |
| 기준 답안 | gee 예상답안 PDF + 예문정리 PDF |

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

챕터마다 아래 순서로 진행한다.

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

### 예문 처리
- 예문은 **Radford 원문(TG.md) 그대로** 사용
- 저작권 보호를 위해 고유명사(John→Tom 등) 또는 명사(car→bike 등) **딱 1개만** 변형 (전체 예문 중 1~2문장)
- **구조·문법 포인트 변경 금지**
- gee 핵심 예문도 변형한 예문 사용 (변형 기준: 위 원칙 동일)

### 해설 처리
- gee 답안 → **정답·구조만** 참조
- **gee 해설 문구 직접 사용 금지**
- 한국어 설명은 **독자적으로 재작성**

### concepts.html 내용 원칙
- TG.md 원서 챕터 구성을 기준으로 섹션 구성
- 각 섹션: 핵심 규칙 → 예문 분석 → 미니퀴즈 순서
- 임용 출제 포인트(시험 포인트) 명시
- **누락 섹션 없이** TG 해당 챕터 전 범위 커버
- 점검 시 TG 원서 챕터 목차와 대조 필수

### 네비게이션
- 챕터 하단: `← 이전 챕터 concepts` | `같은 챕터 exercises →`
- Ch.2는 티스토리 URL 방식, Ch.3~는 `.html` 내부 링크 방식 (기능상 동일, 수정 불필요)

### OX 퀴즈 필수 기능 (Ch.2·3 완료 / Ch.4~도 동일 적용)

| 기능 | order 파일 | random 파일 |
|------|-----------|-------------|
| 🔼 **상단 바** | 섹션 점프 버튼 `jumpTo()` — 클릭 시 스크롤 | 섹션 필터 버튼 `filterSec()` — 클릭 시 해당 섹션만 표시 |
| 💬 **정오 팝업** | `showPop(ok, txt)` — 🎉/❌ + 예문, 1.4초 자동 닫힘 | 동일 |
| 🔊 **효과음** | base64 WAV `new Audio()` 방식 | 동일 |

> ⚠️ **효과음 필수 규칙 — 반드시 준수**
> - **Web Audio API (OscillatorNode, AudioContext) 절대 사용 금지** → iOS에서 소리 안 남
> - 반드시 **base64 WAV + `new Audio()`** 방식만 사용
> - 표준 코드는 `/home/claude/beep_js.txt` 에 저장 → 새 대화에서도 이 파일 읽어서 복붙
> - `beep_js.txt` 없으면 아래 패턴으로 재생성:

```python
# beep_js.txt 재생성 코드
import struct, math, base64

def make_wav(freqs, dur=0.22, sr=11025, vol=0.3):
    spt = int(sr * dur / len(freqs))
    s = []
    for f in freqs:
        for i in range(spt):
            fade = max(0, 1.0 - (i/spt)*1.5)
            s.append(max(-32767,min(32767,int(vol*fade*math.sin(2*math.pi*f*(i/sr))*32767))))
    data = struct.pack(f'<{len(s)}h', *s)
    hdr  = struct.pack('<4sI4s4sIHHIIHH4sI',b'RIFF',36+len(data),b'WAVE',b'fmt ',16,1,1,sr,sr*2,2,16,b'data',len(data))
    return base64.b64encode(hdr+data).decode()

c64 = make_wav([523,659,784], dur=0.22, vol=0.3)
w64 = make_wav([220,185],     dur=0.18, vol=0.3)
js  = f'''const _SND={{correct:'data:audio/wav;base64,{c64}',wrong:'data:audio/wav;base64,{w64}'}};
function beep(type){{try{{const a=new Audio(_SND[type]);a.volume=0.7;a.play().catch(()=>{{}});}}catch(e){{}}}}'''
with open('/home/claude/beep_js.txt','w') as f: f.write(js)
```

### 점검 원칙 (파일 완성 후 필수)
- 문항 수·정답 인덱스·섹션 커버리지 자동 점검
- SVG marker 정의 누락 확인 (tree 파일)
- OX 파일: JS 파싱 오류 `node --check` 로 확인
- OX 파일: `createOscillator` / `AudioContext` 잔재 없는지 확인

---

## GitHub 자동 업로드 방식

- 매 파일 완성 후 **GitHub API(PUT)** 로 자동 업로드
- `index.html`도 매번 자동 수정 (완료 챕터 반영)
- 업로드 성공 확인: HTTP 200/201 응답 코드

```python
import requests, base64, json

TOKEN = "← 프로젝트 지침 맨 아래 토큰 참조"
REPO  = "Namkicheol/transformational-grammar"
HEADERS = {"Authorization": f"token {TOKEN}", "Content-Type": "application/json"}

def upload_file(filename, html_content, commit_msg):
    r = requests.get(f"https://api.github.com/repos/{REPO}/contents/{filename}", headers=HEADERS)
    sha = r.json().get("sha", "")
    payload = {"message": commit_msg, "content": base64.b64encode(html_content.encode()).decode()}
    if sha: payload["sha"] = sha
    res = requests.put(f"https://api.github.com/repos/{REPO}/contents/{filename}",
                       headers=HEADERS, data=json.dumps(payload))
    return res.status_code  # 200 or 201
```

---

## 현재 작업 진행 현황

| 챕터 | 파일 | 상태 | 비고 |
|------|------|------|------|
| Ch.2 | `ch2_concepts.html` | ✅ 완료 | §2.3~2.4 Ambiguity 섹션 추가됨 |
| Ch.2 | `ch2_exercises.html` | ✅ 완료 | MC 15·OX 1·FI 1 (21문항) |
| Ch.2 | `Ch2_ox_order.html` | ✅ 완료 | 43문항·점프바·팝업·효과음 |
| Ch.2 | `Ch2_ox_random.html` | ✅ 완료 | 43문항·필터바·팝업·효과음 |
| Ch.2 | `Ch2_tree.html` | ✅ 완료 | SVG 6개 |
| Ch.3 | `ch3_concepts.html` | ✅ 완료 | §3.4 No Crossing·§3.6 Particle 추가됨 |
| Ch.3 | `ch3_exercises.html` | ✅ 완료 | 24문항 |
| Ch.3 | `Ch3_ox_order.html` | ✅ 완료 | 30문항·점프바·팝업·효과음 |
| Ch.3 | `Ch3_ox_random.html` | ✅ 완료 | 30문항·필터바·팝업·효과음 |
| Ch.3 | `Ch3_tree.html` | ✅ 완료 | SVG 5개·marker 수정 완료 |
| Ch.4~ | — | ⏳ 미시작 | |

---

## index.html 관리 원칙

- 챕터 완료 시 해당 카드 `disabled` 제거 → 링크 연결
- 진행바·상태 텍스트·포스팅 수 자동 업데이트
- 챕터당 최대 5개 카드 (개념, 실전, OX순서, OX랜덤, 수형도)

---

## 새 대화 시작 시 붙여넣기 템플릿

```
트포 HTML 작업 이어서 진행

현재까지 완료: Ch.2 (5개), Ch.3 (5개) — index.html 반영 완료
GitHub 자동 업로드 설정 완료 (토큰·레포 지침에 있음)

지금 할 작업: [챕터 번호 + 파일 종류 기재]

Radford 텍스트: TG.md (프로젝트 지식)
정답 기준: gee 예상답안 (프로젝트 지식)
추가 첨부 불필요
```

---

## 주의사항

- `raw.githubusercontent.com` URL은 캐시 딜레이 있음 → API로 직접 SHA 확인
- 블로그 삽입 방식은 **iframe** → GitHub 파일 수정하면 블로그 자동 반영
- 새 대화에서도 이 claude.md + 프로젝트 지식 파일로 컨텍스트 자동 복원됨
- **iOS 효과음**: `beep_js.txt` 없으면 위 재생성 코드로 만들고 시작
- **OX JS 오류**: 여러 번 수정 시 beep 함수 잔재 코드 쌓임 → `node --check` 필수
