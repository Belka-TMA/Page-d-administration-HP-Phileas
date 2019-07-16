import React from 'react';
import Component from './component.js';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeDouble = this.handleChangeDouble.bind(this)
        this.addFieldsSingle = this.addFieldsSingle.bind(this)
        this.removeFieldSingle = this.removeFieldSingle.bind(this)
        this.handleChangeSingle = this.handleChangeSingle.bind(this)
        this.handleChangeImgStaticDouble = this.handleChangeImgStaticDouble.bind(this)
        this.handleChangeLinkStaticDouble = this.handleChangeLinkStaticDouble.bind(this)
        this.state = {
            single: [''],
            double: '',
            static_double: {
                image : '',
                link : ''
            }
        }
    }
    addFieldsSingle(e) {
        this.setState({ single: [...this.state.single, ""] })
    }
    removeFieldSingle(i) {
        let temp = this.state.single
        temp.splice(i, 1)
        this.setState({ single: temp })
    }
    handleChangeSingle(e, i) {
        let temp = this.state.single
        temp[i] = e.target.value;
        this.setState({ single: temp })
    }

    handleChangeDouble(e) {
        this.setState({ double: e.target.value })
    }

    handleChangeImgStaticDouble(e) {
        let static_double = this.state.static_double
        let value = e.target.value;
        this.setState(prevState => {
            Object.assign({}, prevState.static_double);
            static_double.image = value;
            return { static_double }
        })
    }
    handleChangeLinkStaticDouble(e) {
        let static_double = this.state.static_double
        let value = e.target.value;
        this.setState(prevState => {
            Object.assign({}, prevState.static_double);
            static_double.link = value;
            return { static_double }
        })
    }
    handleSubmit(e){
        let jsonCode = `
        {"frontpage_courses_fr":{
                "single" : ${this.state.single},
                "double" : ${this.state.double},
                "static_double" : {
                    "image" : ${this.state.static_double.image},
                    "link" : ${this.state.static_double.link}
                    }   
                },
            "frontpage_courses_en": {
                "single" : ${this.state.single},
                "double" : ${this.state.double},
                "static_double" : {
                    "image" : ${this.state.static_double.image},
                    "link" : ${this.state.static_double.link}
                    } 
                }
            }`
        //console.log(jsonCode)
        document.getElementById('codeJson').innerHTML = "<pre>" + jsonCode + "</pre>";
    }
    render(){
        return(
            <div id='mainWrapper'>
                {<Component.InputMultipleTest removeField={this.removeFieldSingle} handleChange={this.handleChangeSingle} addFields={this.addFieldsSingle} single={this.state.single}/>}
                {<Component.InputDouble handleChangeDouble={this.handleChangeDouble} double={this.state.double} />}
                {<Component.StaticDouble static_double={this.state.static_double} handleChangeImg={this.handleChangeImgStaticDouble} handleChangeLink={this.handleChangeLinkStaticDouble} />}
                <Button className="submitJson" color="primary" size="small" variant="outlined" onClick={(e)=>{
                    this.handleSubmit(e)
                }} > Valider </Button>
                <Card>
                    <CardContent id="codeJson"></CardContent>
                </Card>

            </div>
        )
    }
}

export default App