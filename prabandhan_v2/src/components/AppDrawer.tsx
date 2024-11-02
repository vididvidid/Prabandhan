import React                  from 'react';
import { connect }            from 'react-redux';
import { withRouter,
         RouteChildrenProps } from 'react-router';
import Drawer                 from '@material-ui/core/Drawer';
import Divider                from '@material-ui/core/Divider';
import IconButton             from '@material-ui/core/IconButton';
import ChevronLeftIcon        from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon       from '@material-ui/icons/ChevronRight';
import AddBoxIcon             from '@material-ui/icons/AddBox';
import TableChartIcon         from '@material-ui/icons/TableChart';
import CalendarTodayIcon      from '@material-ui/icons/CalendarToday';
import EditIcon               from '@material-ui/icons/Edit';
import SettingsIcon           from '@material-ui/icons/Settings';
import HelpIcon               from '@material-ui/icons/Help';
import ExpandLessIcon         from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon         from '@material-ui/icons/ExpandMore';
import Collapse               from '@material-ui/core/Collapse';
import List                   from '@material-ui/core/List';
import ListSubheader          from '@material-ui/core/ListSubheader';
import ListItem               from '@material-ui/core/ListItem';
import ListItemIcon           from '@material-ui/core/ListItemIcon';
import ListItemText           from '@material-ui/core/ListItemText';
import { makeStyles }         from '@material-ui/core/styles';
import useMediaQuery          from '@material-ui/core/useMediaQuery';
import clsx                   from 'clsx';
import { KanbanBoardState }   from '../types';
import { mapDispatchToProps,
         mapStateToProps,
         KanbanBoardActions } from '../dispatchers/KanbanBoardDispatcher';
import { getCurrentView }     from '../lib/util';
import TextInputDialog        from '../components/TextInputDialog';



type AppDrawerProps = KanbanBoardState & KanbanBoardActions & RouteChildrenProps<{}>;


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(6) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(6) + 1,
        },
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


const AppDrawer: React.FC<AppDrawerProps> = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [textInputOpen, setTextInputOpen] = React.useState({
        open: false,
        title: '',
        message: '',
        fieldLabel: '',
        value: '',
        validator: (value: string) => value.trim().length <= 0,
        onClose: handleCloseDialogAddNewBoard,
    });
    const [boardsOpen, setBoardsOpen] = React.useState(true);
    const matchesPrint = useMediaQuery('print');

    function handleDrawerToggle() {
        setOpen(!open);
    }

    function handleClickChangeActiveBoard(id: string) {
        let view = 'kanban';
        if (props.history.location.pathname) {
            if (props.history.location.pathname.startsWith('/calendar/')) {
                view = 'calendar';
            } else if (props.history.location.pathname.startsWith('/edit/')) {
                view = 'edit';
            }
        }
        props.history.push(`/${view}/${id}`);
    }

    function handleClickAddNewBoard() {
        setTextInputOpen(Object.assign({}, textInputOpen, {
            open: true,
            title: 'New board',
            message: '',
            fieldLabel: 'Board name',
            value: '',
        }));
    }
    
    function handleCloseDialogAddNewBoard(apply: boolean, value?: string) {
        setTextInputOpen(Object.assign({}, textInputOpen, { open: false }));
        if (apply && value) {
            props.addBoard(value);
        }
    }

    function handleChangeView(viewName: string, id: string) {
        if (id === props.activeBoardId) {
            props.history.push(`/${viewName}/${id}`);
        }
    }

    function handleBoardsOpenClick() {
        setBoardsOpen(!boardsOpen);
    }

    let currentView = getCurrentView(props.history);

    return (
        
    );
}
export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(AppDrawer) as any) as any) as React.FC;
