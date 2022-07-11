function ButtonPrimary(props) {
    return ( 
        <button onClick={props.onClickBtn} className={`${props.clazz} mt-30`}>{props.title}<span><img className={props.clazzImg} alt={props.alt} src={props.srcImg} /></span></button>
    );
}

export default ButtonPrimary;