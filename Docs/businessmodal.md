## Business Model Canvas

![Business Model Canvas](../image/buisiness%20modal.jpg)

<details>
<summary>Click to open board configuration text</summary>

```yaml
name: Business Model Canvas
taskStatuses:
  - value: ToDo
    caption: ◀️
    className: status-todo
  - value: InProgress
    caption: ▶️
    className: status-inprogress
teamOrStories:
  - value: Team A
    caption: "\U0001F517 Key Partners"
    className: team-or-story-team-a
  - value: Team B
    caption: "✔️ Key Activities & Resources \U0001F3ED"
    className: team-or-story-team-b
  - value: Team C
    caption: "\U0001F381 Value Propositions"
    className: team-or-story-team-c
  - value: Team D
    caption: "❤️ Customer Relationship & Channels \U0001F4E2"
    className: team-or-story-team-d
  - value: Team E
    caption: "\U0001F6BB Customer Segments"
    className: team-or-story-team-e
  - value: Team F
    caption: "\U0001F3F7 Cost Structure & Revenue Streams \U0001F4B0"
    className: team-or-story-team-f
tags:
  - value: bug
    className: tag-bug
  - value: ok
    className: tag-ok
  - value: NG
    className: tag-NG
  - value: PR
    className: tag-PR
  - value: rejected
    className: tag-rejected
  - value: pending
    className: tag-pending
  - value: merged
    className: tag-merged
  - value: critical
    className: tag-critical
  - value: high
    className: tag-high
  - value: moderate
    className: tag-moderate
  - value: low
    className: tag-low
  - value: ⭐
    className: tag-star
  - value: ⭐⭐
    className: tag-star
  - value: ⭐⭐⭐
    className: tag-star
displayBarcode: true
displayMemo: true
displayFlags: true
displayTags: true
preferArchive: false
boardStyle: |
  /* per-board customized styles */
  /*
  .KanbanBoardView-sticky-note {width: 200px}
  table.KanbanBoardView-board tbody th {
      padding: 10px;
      white-space: nowrap;
  }
  */
  .KanbanBoardView-header-cell-task-statuses {width: 50%}
  table.KanbanBoardView-board thead th.status-backlog {
      background-color: var(--weak-header-bg-color);
  }
  table.KanbanBoardView-board td.status-backlog {
      background-color: var(--weak-data-bg-color);
  }
  table.KanbanBoardView-board thead th.status-done {
      background-color: var(--weak-header-bg-color);
  }
  table.KanbanBoardView-board td.status-done {
      background-color: var(--weak-data-bg-color);
  }
  .team-or-story-team-c .KanbanBoardView-sticky-note {
      background-color: var(--sticky-green-color);
  }
  .team-or-story-team-d .KanbanBoardView-sticky-note {
      background-color: var(--sticky-blue-color);
  }
  .team-or-story-team-e .KanbanBoardView-sticky-note {
      background-color: var(--sticky-blue-color);
  }
  .team-or-story-team-f .KanbanBoardView-sticky-note {
      background-color: var(--sticky-red-color);
  }
  table.KanbanBoardView-board td.status-todo.team-or-story-team-a {
      padding-top: 35px;
      background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4850 35"><rect x="0" y="0" width="4850" height="35" fill="palegreen"/><text font-size="14pt" x="5" y="5" font-family="sans-serif" dominant-baseline="text-before-edge" fill="rgb(51,51,51)">Key Partners</text></svg>') no-repeat left top;
      background-size: 4850px 35px;
      height: 140px;
  }
  table.KanbanBoardView-board td.status-todo.team-or-story-team-b {
      padding-top: 35px;
      background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4850 35"><rect x="0" y="0" width="4850" height="35" fill="aquamarine"/><text font-size="14pt" x="5" y="5" font-family="sans-serif" dominant-baseline="text-before-edge" fill="rgb(51,51,51)">Key Activities</text></svg>') no-repeat left top;
      background-size: 4850px 35px;
      height: 140px;
  }
  table.KanbanBoardView-board td.status-inprogress.team-or-story-team-b {
      padding-top: 35px;
      background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4850 35"><rect x="0" y="0" width="4850" height="35" fill="lightgreen"/><text font-size="14pt" x="5" y="5" font-family="sans-serif" dominant-baseline="text-before-edge" fill="rgb(51,51,51)">Key Resources</text></svg>') no-repeat left top;
      background-size: 4850px 35px;
      height: 140px;
  }
  table.KanbanBoardView-board td.status-todo.team-or-story-team-c {
      padding-top: 35px;
      background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4850 35"><rect x="0" y="0" width="4850" height="35" fill="skyblue"/><text font-size="14pt" x="5" y="5" font-family="sans-serif" dominant-baseline="text-before-edge" fill="rgb(51,51,51)">Value Propositions</text></svg>') no-repeat left top;
      background-size: 4850px 35px;
      height: 140px;
  }
  table.KanbanBoardView-board td.status-todo.team-or-story-team-d {
      padding-top: 35px;
      background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4850 35"><rect x="0" y="0" width="4850" height="35" fill="pink"/><text font-size="14pt" x="5" y="5" font-family="sans-serif" dominant-baseline="text-before-edge" fill="rgb(51,51,51)">Customer Relationship</text></svg>') no-repeat left top;
      background-size: 4850px 35px;
      height: 140px;
  }
  table.KanbanBoardView-board td.status-inprogress.team-or-story-team-d {
      padding-top: 35px;
      background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4850 35"><rect x="0" y="0" width="4850" height="35" fill="lightpink"/><text font-size="14pt" x="5" y="5" font-family="sans-serif" dominant-baseline="text-before-edge" fill="rgb(51,51,51)">Channels</text></svg>') no-repeat left top;
      background-size: 4850px 35px;
      height: 140px;
  }
  table.KanbanBoardView-board td.status-todo.team-or-story-team-e {
      padding-top: 35px;
      background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4850 35"><rect x="0" y="0" width="4850" height="35" fill="mistyrose"/><text font-size="14pt" x="5" y="5" font-family="sans-serif" dominant-baseline="text-before-edge" fill="rgb(51,51,51)">Customer Segments</text></svg>') no-repeat left top;
      background-size: 4850px 35px;
      height: 140px;
  }
  table.KanbanBoardView-board td.status-todo.team-or-story-team-f {
      padding-top: 35px;
      background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4850 35"><rect x="0" y="0" width="4850" height="35" fill="violet"/><text font-size="14pt" x="5" y="5" font-family="sans-serif" dominant-baseline="text-before-edge" fill="rgb(51,51,51)">Cost Structure</text></svg>') no-repeat left top;
      background-size: 4850px 35px;
      height: 140px;
  }
  table.KanbanBoardView-board td.status-inprogress.team-or-story-team-f {
      padding-top: 35px;
      background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4850 35"><rect x="0" y="0" width="4850" height="35" fill="tomato"/><text font-size="14pt" x="5" y="5" font-family="sans-serif" dominant-baseline="text-before-edge" fill="rgb(51,51,51)">Revenue Streams</text></svg>') no-repeat left top;
      background-size: 4850px 35px;
      height: 140px;
  }
  .KanbanBoardView-sticky-tags .tag-bug {
      color: white;
      background-color: red;
  }
  .KanbanBoardView-sticky-tags .tag-ok {
      color: white;
      background-color: green;
  }
  .KanbanBoardView-sticky-tags .tag-NG {
      color: white;
      background-color: #e91e63;
  }
  .KanbanBoardView-sticky-tags .tag-PR {
      color: white;
      background-color: purple;
  }
  .KanbanBoardView-sticky-tags .tag-rejected {
      color: white;
      background-color: #990000;
  }
  .KanbanBoardView-sticky-tags .tag-pending {
      color: black;
      background-color: #ff9900;
  }
  .KanbanBoardView-sticky-tags .tag-merged {
      color: white;
      background-color: #006666;
  }
  .KanbanBoardView-sticky-tags .tag-critical {
      color: white;
      background-color: red;
  }
  .KanbanBoardView-sticky-tags .tag-high {
      color: white;
      background-color: #ff5522;
  }
  .KanbanBoardView-sticky-tags .tag-moderate {
      color: black;
      background-color: #ffcc00;
  }
  .KanbanBoardView-sticky-tags .tag-low {
      color: black;
      background-color: #cc9900;
  }
  .KanbanBoardView-sticky-tags .tag-star {
      color: inherit;
      background-color: inherit;
  }
calendarStyle: |
  /* per-board customized styles */
  div.CalendarView-item-chip.status-done {
      background-color: var(--sticky-green-color);
  }
boardNote: ''
records:
  - _id: 0b07ba3c-d487-45fd-ad1b-2ec03f07ea91
    dueDate: ''
    taskStatus: ToDo
    teamOrStory: Team A
    flags: []
    tags: []
    description: '# retail stores'
    barcode: ''
    memo: ''
  - _id: 0d28d625-2489-4441-adf9-33737d187527
    dueDate: ''
    taskStatus: ToDo
    teamOrStory: Team F
    flags: []
    tags: []
    description: '# marketing'
    barcode: ''
    memo: ''
  - _id: 27556868-3dc2-409d-85d5-4f8fb85ec5c4
    dueDate: ''
    taskStatus: ToDo
    teamOrStory: Team B
    flags: []
    tags: []
    description: '# 1 to 1 marketing'
    barcode: ''
    memo: ''
  - _id: 2cf878e9-e1d2-4d89-84d7-17b0c7a015b5
    dueDate: ''
    taskStatus: ToDo
    teamOrStory: Team C
    flags: []
    tags: []
    description: '# sharpness'
    barcode: ''
    memo: ''
  - _id: 379a7d61-3f5e-4f5f-9e87-9dbad29aad79
    dueDate: ''
    taskStatus: ToDo
    teamOrStory: Team D
    flags: []
    tags: []
    description: '# repeating'
    barcode: ''
    memo: ''
  - _id: 559e1bbc-998e-4a9e-aae4-80f6e1b1ad39
    dueDate: ''
    taskStatus: ToDo
    teamOrStory: Team E
    flags: []
    tags: []
    description: |-
      * female
      * age: 25-30
    barcode: ''
    memo: ''
  - _id: 7750b85a-507d-4671-afe2-42fcfcd5715e
    dueDate: ''
    taskStatus: ToDo
    teamOrStory: Team E
    flags: []
    tags: []
    description: |-
      * male
      * age: 20-25
    barcode: ''
    memo: ''
  - _id: 9aefc614-f9b0-4a7d-9802-ce8d058841a7
    dueDate: ''
    taskStatus: InProgress
    teamOrStory: Team F
    flags: []
    tags: []
    description: '# refill purchase'
    barcode: ''
    memo: ''
  - _id: a4b5fd81-009c-492a-9e79-43709755c7c2
    dueDate: ''
    taskStatus: InProgress
    teamOrStory: Team D
    flags: []
    tags: []
    description: '# certified retail stores'
    barcode: ''
    memo: ''
  - _id: d5fb0238-1c89-42fe-8114-9a889a1ecc8f
    dueDate: ''
    taskStatus: ToDo
    teamOrStory: Team B
    flags: []
    tags: []
    description: '# in-store campaign'
    barcode: ''
    memo: ''
  - _id: e45f9c25-7760-47f1-b7b5-11a5c0213100
    dueDate: ''
    taskStatus: InProgress
    teamOrStory: Team B
    flags: []
    tags: []
    description: '# patents'
    barcode: ''
    memo: ''
  - _id: f3312447-4d34-4871-be00-cfd44218a685
    dueDate: ''
    taskStatus: ToDo
    teamOrStory: Team F
    flags: []
    tags: []
    description: '# logistics'
    barcode: ''
    memo: ''
```

</details>