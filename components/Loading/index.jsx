import React from "react";
import { Loader, LoadingContainer } from "./styles";

// eslint-disable-next-line react/display-name
const Loading = React.forwardRef((props, ref) => {
    return (
        <LoadingContainer ref={ref}>
            <Loader></Loader>
        </LoadingContainer>
    )
})


export default Loading