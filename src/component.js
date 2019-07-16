import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


function InputMultipleTest(props){
    return (
        <div className="petitTuiles contentManage">
            <h2>Contenu petite tuiles</h2>

            {
                props.single.map((field, index) => {
                    return (
                        <Card key={index} className="card">
                            <CardContent className="inputLilTuile" key={index}>
                                <TextField fullWidth onChange={(e) => {
                                    props.handleChange(e, index)
                                }} label={"Champ(s): " + parseInt(index + 1)} value={field}></TextField>

                            </CardContent>
                            {props.single.length > 1 &&
                                <Fab className="removeButton" color="secondary" size="small" aria-label="Remove">
                                    <RemoveIcon onClick={(e) => props.removeField(index)} />
                                </Fab>
                            }
                        </Card>
                    )
                })
            }
            <CardActions className="addButton">
                <Fab display="flex" color="primary" className='button' size="small" aria-label="Add">
                    <AddIcon onClick={(e) => props.addFields(e)} />
                </Fab>
            </CardActions>

        </div>
    )
}

function InputDouble(props){
    return (
        <div className="grosseTuiles contentManage">
            <h2>Contenu Grosse tuiles</h2>
            <Card>
                <CardContent>
                    <TextField fullWidth onChange={(e) => {
                        props.handleChangeDouble(e)
                    }} label="Remplissez moi !" value={props.double}></TextField>
                </CardContent>
            </Card>
        </div>
    )
}


function InputStaticDouble(props) {
    
        return (
            <div className="grosseTuilesDouble contentManage">
                <h2>Grosse Tuile Double</h2>
                <Card>
                    <CardContent>
                        <TextField fullWidth onChange={(e) => {
                        props.handleChangeImg(e)
                        }} label="Une image" value={props.static_double.image}></TextField>
                        <TextField fullWidth onChange={(e) => {
                            props.handleChangeLink(e)
                        }} label="Un lien" value={props.static_double.link}></TextField>
                    </CardContent>
                </Card>
            </div>
        )
}

export default {
    StaticDouble: InputStaticDouble,
    InputDouble: InputDouble,
    InputMultipleTest: InputMultipleTest
}