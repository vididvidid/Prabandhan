import { KanbanBoardRecord,
    KanbanRecord,
    AppConfig }       from '../types';



export function pickEditableStickyProps(sticky: KanbanRecord) {
return (Object.assign(sticky._id ? { _id: sticky._id } : {}, {
   dueDate: sticky.dueDate || '',
   taskStatus: sticky.taskStatus || '',
   teamOrStory: sticky.teamOrStory || '',
   flags: sticky.flags || [],
   tags: sticky.tags || [],
   description: sticky.description || '',
   barcode: sticky.barcode || '',
   memo: sticky.memo || '',
}));
}


export function pickEditableBoardProps(board: KanbanBoardRecord) {
return ({
   name: board.name || '',
   taskStatuses: board.taskStatuses || [],
   teamOrStories: board.teamOrStories || [],
   tags: board.tags || [],
   displayBarcode: !!board.displayBarcode,
   displayMemo: !!board.displayMemo,
   displayFlags: !!board.displayFlags,
   displayTags: !!board.displayTags,
   preferArchive: !!board.preferArchive,
   boardStyle: board.boardStyle || '',
   calendarStyle: board.calendarStyle || '',
   boardNote: board.boardNote || '',
   records: (board.records && board.records.map(x => pickEditableStickyProps(x))) || [],
});
}


export function validateStickyProps(sticky: KanbanRecord) {
if (typeof sticky.dueDate !== 'string') {
   throw new Error('string property "dueDate" is required.');
}
if (typeof sticky.taskStatus !== 'string') {
   throw new Error('string property "taskStatus" is required.');
}
if (typeof sticky.teamOrStory !== 'string') {
   throw new Error('string property "teamOrStory" is required.');
}
if (sticky.flags && Array.isArray(sticky.flags)) {
   sticky.flags.forEach(x => {
       if (typeof x !== 'string') {
           throw new Error('property "flags[x]" should be string.');
       }
   });
} else {
   throw new Error('array property "flags" is required.');
}
if (sticky.tags && Array.isArray(sticky.tags)) {
   sticky.tags.forEach(x => {
       if (typeof x !== 'string') {
           throw new Error('property "tags[x]" should be string.');
       }
   });
} else {
   throw new Error('array property "tags" is required.');
}
if (typeof sticky.description !== 'string') {
   throw new Error('string property "description" is required.');
}
if (typeof sticky.barcode !== 'string') {
   throw new Error('string property "barcode" is required.');
}
if (typeof sticky.memo !== 'string') {
   throw new Error('string property "memo" is required.');
}
return sticky;
}
