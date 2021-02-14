import { Button, Container, Input, makeStyles } from '@material-ui/core'
import { KeyboardArrowLeft } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles(theme => ({
    full: {
        height: "100vh",
        width: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    cont:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,0)",
        boxShadow:"0 0 5px 5px black",
        width:"50vh",
        height:"50vh"
    }
}))

const SendMes = (props) => {
    const classes = useStyles()

    const [mes, setMes] = useState("")

    const sendMes = () => {
        console.log("sending", mes);
        fetch('https://chargebeeback.herokuapp.com/sendMes', {
            method: 'post',
            body: JSON.stringify({
                "mes": mes
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }

    return (
        <div className={classes.full}>
            <Container className={classes.cont}>
                <Button startIcon={<KeyboardArrowLeft />} onClick={props.goBack} />
                <Input type="text" onChange={(e) => setMes(e.target.value)} />
                <Button variant="outlined" style={{backgroundColor:"white"}} color="primary" onClick={sendMes}>Send</Button>
            </Container>
        </div>
    )
}

export default SendMes
