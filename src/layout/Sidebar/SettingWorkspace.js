import React, {useState} from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import loadable from "@loadable/component";
import { useDispatch } from 'react-redux';
import { postWorkspaces } from '../../modules/workspace';

const WorkSpaceSettingModal = loadable(
    () => import("./WorkSpaceSettingModal")
);


const SettingWorkspace = ({workspace, role}) => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => {
      dispatch(postWorkspaces());
      setClicked(false);
    }

   
    return (
        <>
            <SettingsIcon
                onClick={() => setClicked(true)}
            />
            <WorkSpaceSettingModal
                role={role}
                workspace={workspace}
                clicked={clicked}
                handleClose={handleClose}
            />
        </>
    )
}
export default SettingWorkspace