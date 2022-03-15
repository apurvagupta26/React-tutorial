import React from 'react';
import Button from './Button';
import styles from './ErrorModal.module.css';
import Card from './Card';
import ReactDOM from 'react-dom';

const BackDrop=(props)=>{
return  <div className={styles.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay=(props)=>{
    return (
    <Card className={styles.modal}>
    <header className={styles.header}>
        <h1>{props.title}</h1>
    </header>
    <div className={styles.content}>
        <p>
        {props.message}
        </p>
    </div>
    <footer className={styles.actions}>
    <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
</Card>
    );
}


const ErrorModal=(props)=>{

    return (
        <>
        {ReactDOM.createPortal(<BackDrop onClick={props.onConfirm}/>,document.getElementById('backdrop-root'))}      
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById('overlay-root'))}      
        </>
    )
}

export default ErrorModal;