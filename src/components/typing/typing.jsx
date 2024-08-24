import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TypingEffect = (props) => {

    const { textList } = props

    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText((prev) => textList[index].substring(0, prev.length + (isDeleting ? -1 : 1)));

            if (!isDeleting && text === textList[index]) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setIndex((prevIndex) => prevIndex < textList.length - 1 ? prevIndex + 1 : 0);
            }

            clearTimeout(timeout);
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);

    return (
        <>{text}</>
    )
}

TypingEffect.propTypes = {
    textList: PropTypes.array.isRequired
}

export default TypingEffect