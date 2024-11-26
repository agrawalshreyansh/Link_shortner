
import './input_bar.css';


// eslint-disable-next-line react/prop-types
function InputBar({InputVal,setInputVal,text}) {

    // useEffect((e) => {
    //     setInputVal(e.target.value)
    // }, [InputVal, setInputVal])

    return(
        <>
        <input className='link_box' 
               type='url' value={InputVal} 
               onChange={(e) => {setInputVal(e.target.value)}}
               placeholder={text}
               
        />
        </>
    )
};

export default InputBar;