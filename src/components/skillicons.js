import React from "react";
import Tooltip from '@mui/material/Tooltip';
import { Icon } from '@iconify/react';

function SkillIcon(props) {
    
    return (
        <div>
            <Tooltip title = {props.tech}>
                <Icon icon={props.icon} className = {props.class} width="35" height="35" data-tip = "tooltip" />
            </Tooltip>
        </div>
    );
}

export default SkillIcon;