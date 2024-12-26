import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () =>
{
    const [ position, setPosition ] = useState( { x: 0, y: 0 } );
    const [ cursorVariant, setCursorVariant ] = useState( "default" );
    const [ isHovered, setIsHovered ] = useState( false );
    const [ magneticElement, setMagneticElement ] = useState( null );

    useEffect( () =>
    {
        const onMouseMove = ( e ) =>
        {
            const { clientX, clientY } = e;

            // Magnetic effect when hovering over interactive elements
            if ( magneticElement )
            {
                const rect = magneticElement.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Calculate distance from cursor to element center
                const distanceX = clientX - centerX;
                const distanceY = clientY - centerY;

                // Magnetic pull effect
                const x = clientX - distanceX * 0.3;
                const y = clientY - distanceY * 0.3;

                setPosition( { x, y } );
            } else
            {
                setPosition( { x: clientX, y: clientY } );
            }
        };

        const onMouseOver = ( e ) =>
        {
            const target = e.target;
            if ( target.tagName === 'BUTTON' || target.tagName === 'A' )
            {
                setCursorVariant( "button" );
                setIsHovered( true );
                setMagneticElement( target );
            } else if ( target.tagName === 'IMG' )
            {
                setCursorVariant( "image" );
                setIsHovered( true );
            } else if ( target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' )
            {
                setCursorVariant( "text" );
                setIsHovered( true );
            }
        };

        const onMouseOut = () =>
        {
            setCursorVariant( "default" );
            setIsHovered( false );
            setMagneticElement( null );
        };

        document.addEventListener( 'mousemove', onMouseMove );
        document.addEventListener( 'mouseover', onMouseOver );
        document.addEventListener( 'mouseout', onMouseOut );

        return () =>
        {
            document.removeEventListener( 'mousemove', onMouseMove );
            document.removeEventListener( 'mouseover', onMouseOver );
            document.removeEventListener( 'mouseout', onMouseOut );
        };
    }, [ magneticElement ] );

    const variants = {
        default: {
            height: 32,
            width: 32,
            backgroundColor: "transparent",
            border: "1px solid #64ffda",
            x: position.x - 16,
            y: position.y - 16
        },
        button: {
            height: 64,
            width: 64,
            backgroundColor: "rgba(100, 255, 218, 0.1)",
            border: "1px solid #64ffda",
            x: position.x - 32,
            y: position.y - 32
        },
        image: {
            height: 48,
            width: 48,
            backgroundColor: "rgba(100, 255, 218, 0.2)",
            border: "none",
            x: position.x - 24,
            y: position.y - 24
        },
        text: {
            height: 24,
            width: 2,
            backgroundColor: "#64ffda",
            border: "none",
            x: position.x - 1,
            y: position.y - 12
        }
    };

    return (
        <>
            {/* Main cursor */ }
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference"
                animate={ cursorVariant }
                variants={ variants }
                transition={ {
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5
                } }
            >
                {/* Inner dot */ }
                <motion.div
                    className="absolute bg-[#64ffda] rounded-full"
                    animate={ {
                        scale: isHovered ? 0.5 : 1,
                        opacity: isHovered ? 0.5 : 1
                    } }
                    style={ {
                        height: 4,
                        width: 4,
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    } }
                />
            </motion.div>

            {/* Trailer effect */ }
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-40 w-4 h-4 rounded-full bg-[#64ffda]/20"
                animate={ {
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: isHovered ? 1.5 : 1
                } }
                transition={ {
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.2
                } }
            />
        </>
    );
};

export default CustomCursor;