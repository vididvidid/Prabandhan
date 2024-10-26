import { Action }             from 'typescript-fsa';
import { Dispatch }           from 'redux';
import { KanbanBoardRecord,
         KanbanRecord,
         UpdateStickyLanesPayload,
         ConfirmDialogProps,
         AppState }           from '../types';
import { AppEventsActions as AppEventsActions_,
         appEventsActions } from '../actions/AppEventsActions';
import { KanbanBoardActions as KanbanBoardActions_,
         kanbanBoardActions } from '../actions/KanbanBoardActions';



export type AppEventsActions = AppEventsActions_;
export type KanbanBoardActions = KanbanBoardActions_;


export function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
    return {
        addBoard: (boardName: string) =>
            dispatch(kanbanBoardActions.startAddBoard({ boardName })),
        changeActiveBoard: (boardId: string) =>
            dispatch(kanbanBoardActions.startChangeActiveBoard({ boardId })),
        updateBoardName: (v: {boardId: string, boardName: string}) =>
            dispatch(kanbanBoardActions.startUpdateBoardName(v)),
        deleteBoard: (boardId: string) =>
            dispatch(kanbanBoardActions.startDeleteBoard({ boardId })),

        
        editBoardAndStickys: (v: KanbanBoardRecord) =>
            dispatch(kanbanBoardActions.startEditBoardAndStickys(v)),

        refreshActiveBoard: () =>
            dispatch(kanbanBoardActions.startRefreshActiveBoard({})),

      
    };
}


export function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.kanbanBoard);
}
