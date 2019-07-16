import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export default class Sidebar extends React.Component {
    render() {
        return (
            <Card color="primary" id="cardSidebar">
                <CardContent className="SidebarTullet" >
                    <TextField fullWidth ></TextField>
                </CardContent>
            </Card>
        )
    }
}


