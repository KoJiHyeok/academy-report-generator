# Academy Report Generator

성적 CSV 데이터를 학부모용 학습 리포트 메시지로 자동 변환하는 Node.js 기반 오픈소스 도구입니다.

## 프로젝트 목적

학원, 과외, 공부방 등에서 학생별 시험 결과를 정리할 때 반복적으로 작성해야 하는 학습 리포트 문구를 자동 생성하기 위해 만들었습니다.

CSV 파일에 학생별 성적 정보를 입력하면, 템플릿을 기반으로 학부모에게 전달할 수 있는 리포트 메시지를 생성합니다.

## Features

- CSV 성적 데이터 읽기
- 학생별 학습 리포트 자동 생성
- 템플릿 기반 메시지 생성
- 백분위 및 등급 자동 계산
- 개인정보 없는 샘플 데이터 제공

## Quick Start

```bash
npm install
npm run generate
```

실행 후 아래 파일이 생성됩니다.

```txt
output/messages.txt
```

## Custom CSV Input

기본 샘플 데이터가 아닌 원하는 CSV 파일을 지정해서 실행할 수도 있습니다.

```bash
npm run generate -- sample-data/scores.csv
```

## Project Structure

```txt
academy-report-generator/
├─ src/
│  ├─ index.js
│  ├─ csvParser.js
│  └─ reportGenerator.js
├─ sample-data/
│  └─ scores.csv
├─ templates/
│  └─ parent-message.md
├─ output/
│  └─ .gitkeep
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ README.md
```

## Input Example

`sample-data/scores.csv`

```csv
student_name,grade,score,rank,total_students,unit,wrong_count,weak_area,next_plan
김예시,중2,87,5,30,일차함수,3,그래프 해석,그래프 해석 유형을 추가로 반복 지도할 예정입니다.
박샘플,중1,72,12,28,정수와 유리수,6,계산 실수,계산 과정 점검과 기본 연산 훈련을 보강할 예정입니다.
이테스트,초6,95,2,25,비와 비율,1,응용 문제,응용 문제 풀이 전략을 확장 지도할 예정입니다.
```

## Output Example

```txt
[학원 학습 리포트]

안녕하세요. 김예시 학생의 학습 리포트입니다.

이번 평가 단원은 일차함수입니다.

성적 통계
- 점수: 87점
- 석차: 30명 중 5등
- 백분위: 상위 17%
- 등급: 3등급

전체 오답 수는 3개입니다.

세부 항목별 분석
- 주요 보완 영역: 그래프 해석

선생님의 향후 지도 계획
그래프 해석 유형을 추가로 반복 지도할 예정입니다.

앞으로도 학생의 취약 부분을 중심으로 꼼꼼히 지도하겠습니다.
```

## Template

리포트 문구는 아래 파일에서 수정할 수 있습니다.

```txt
templates/parent-message.md
```

사용 가능한 변수는 다음과 같습니다.

```txt
{{student_name}}
{{grade}}
{{score}}
{{rank}}
{{total_students}}
{{unit}}
{{wrong_count}}
{{weak_area}}
{{next_plan}}
{{percentile}}
{{level}}
```

## Commands

```bash
npm run generate
```

리포트 메시지를 생성합니다.

```bash
npm run clean
```

생성된 `output/messages.txt` 파일을 삭제합니다.

## Privacy Warning

실제 학생 이름, 전화번호, 학부모 정보, 실제 성적표, 실제 학원 데이터는 절대 GitHub에 업로드하지 마세요.

샘플 데이터는 반드시 가짜 데이터로 작성해야 합니다.

## Roadmap

- Excel 파일 입력 지원
- Google Sheets 연동
- 웹 UI 추가
- 리포트 템플릿 여러 개 선택 기능
- 학생별 개별 파일 출력 기능

## License

MIT
