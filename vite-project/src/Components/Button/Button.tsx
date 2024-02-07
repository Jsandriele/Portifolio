import './Button.css';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export const Button = () => {



    return(
        <div className="container_button">
            <div className="button-floantig">
                <button>
                <IoChatbubbleEllipsesSharp 
                style={{
                    color: '#fff',
                    width: '100px',
                    fontSize: '100px',
                                      
                }}/>

                </button>
                
            </div>
        </div>
    )
}