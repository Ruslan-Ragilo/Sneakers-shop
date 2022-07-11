function ButtonSecondary(props) {
    return ( 
        <button onClick={props.onClick} className={props.clazz}><img src={props.srcImg} /></button>
     );
}

export default ButtonSecondary;