import envelope_tip from "../images/image_1-AjHdFeiD-AjHdFeiD.png";
import envelope_bottom from "../images/image_2-_o4_FShn-_o4_FShn.png";
import envelope_bottom_mobile from "../images/image_3-DenJ1x8V-DenJ1x8V.png";

export default function Envelope(){

    const envelope_parent_class = 'm-0 p-0 md:left-0 md:bottom-0 object-cover'

    const envelope_img_class = 'object-cover min-w-full min-h-full w-full vh-full object-none md:object-cover fixed animate__animated animate__slower'
    // const envelope_img_class = 'object-cover min-w-full min-h-full w-full vh-full object-none md:object-cover fixed animate__slower'

    return (
        <div className={ envelope_parent_class }>
            <img 
                src={ envelope_tip }
                className={ `${ envelope_img_class } z-70 animate__slideOutUp` }
                alt="Envelope" />
            <img 
                src={ envelope_bottom } 
                className={ `${ envelope_img_class} z-50 animate__slideOutDown hidden md:block` } 
                alt="Envelope" />
            <img 
                src={ envelope_bottom_mobile } 
                className={ `${ envelope_img_class} min-h-[500px] z-50 animate__slideOutDown block md:hidden` } 
                alt="Envelope" />
        </div>
    )
}