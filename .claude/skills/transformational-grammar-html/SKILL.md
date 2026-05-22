---
name: transformational-grammar-html
description: transformational-grammar HTML 제작 원칙. 예문 처리(Radford 원문 기준, 고유명사 1개만 변형), concepts.html 내용 원칙, 해설 처리(gee 답안 구조만), OX 퀴즈 필수 기능(jumpTo/filterSec/팝업), 효과음(iOS 대응 base64 WAV), 점검 원칙, 네비게이션 형식. HTML 파일 만들 때 반드시 호출.
---

# HTML 제작 원칙

## 예문 처리

- 예문은 **Radford 원문(TG.md) 그대로** 사용
- 저작권 보호를 위해 고유명사(John→Tom 등) 또는 명사(car→bike 등) **딱 1개만** 변형 (전체 예문 중 1~2문장)
- **구조·문법 포인트 변경 금지**
- gee 핵심 예문도 변형한 예문 사용

## concepts.html 내용 원칙

- TG.md 원서 챕터 구성 기준으로 섹션 구성
- 각 섹션: 핵심 규칙 → 예문 분석 → 미니퀴즈 순서
- 임용 출제 포인트 명시
- **누락 섹션 없이** TG 해당 챕터 전 범위 커버
- 점검 시 TG 원서 챕터 목차와 대조 필수

## 해설 처리

- gee 답안 → **정답·구조만** 참조
- **gee 해설 문구 직접 사용 금지**
- 한국어 설명은 **독자적으로 재작성**

## 네비게이션

```
← 이전 챕터 concepts | 같은 챕터 exercises →
```

Ch.2는 티스토리 URL 방식, Ch.3~는 `.html` 내부 링크 (기능상 동일, 수정 불필요).

---

## OX 퀴즈 필수 기능

**order 파일**: 섹션 점프 버튼 `jumpTo()` — 클릭 시 해당 섹션으로 스크롤
**random 파일**: 섹션 필터 버튼 `filterSec()` — 클릭 시 해당 섹션만 표시

**정오 팝업**: 답 클릭 시 🎉/❌ 팝업 + 예문 1.4초 자동 닫힘 (`showPop(ok, txt)`)

## 효과음 (iOS 대응)

- ❌ Web Audio API(OscillatorNode, AudioContext) **절대 사용 금지** → iOS 무음모드에서 작동 안 함
- ✅ 반드시 **base64 WAV + `new Audio()`** 방식만 사용
- 표준 코드는 `/home/claude/beep_js.txt` 에 저장 → 새 대화에서 이 파일 읽어서 복붙
- `beep_js.txt` 없으면 아래 코드로 재생성:

```python
import struct, math, base64

def make_wav(freqs, dur=0.22, sr=11025, vol=0.3):
    spt = int(sr * dur / len(freqs))
    s = []
    for f in freqs:
        for i in range(spt):
            fade = max(0, 1.0 - (i/spt)*1.5)
            s.append(max(-32767,min(32767,int(vol*fade*math.sin(2*math.pi*f*(i/sr))*32767))))
    data = struct.pack(f'<{len(s)}h', *s)
    hdr = struct.pack('<4sI4s4sIHHIIHH4sI',b'RIFF',36+len(data),b'WAVE',b'fmt ',16,1,1,sr,sr*2,2,16,b'data',len(data))
    return base64.b64encode(hdr+data).decode()

c64 = make_wav([523,659,784])
w64 = make_wav([220,185], dur=0.18)
js = f'''const _SND={{correct:'data:audio/wav;base64,{c64}',wrong:'data:audio/wav;base64,{w64}'}};
function beep(type){{try{{const a=new Audio(_SND[type]);a.volume=0.7;a.play().catch(()=>{{}});}}catch(e){{}}}}'''
with open('/home/claude/beep_js.txt','w') as f: f.write(js)
```

## 점검 원칙 (파일 완성 후 필수)

- 문항 수·정답 인덱스·섹션 커버리지 확인
- SVG marker 정의 누락 확인 (tree 파일)
- OX 파일: `node --check` 로 JS 파싱 오류 확인
- OX 파일: `createOscillator` / `AudioContext` 잔재 없는지 확인
- OX 파일: beep 함수 중복 잔재 코드 없는지 확인 (여러 번 수정 시 쌓임)
