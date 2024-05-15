import React, { useEffect } from "react";
import { testApi } from "../../apis/api";
const Homepage = () => {

    useEffect(() => {
        console.log("Suyogya GAY");

        // trigger testAPI
        testApi().then((res) => {
            console.log(res);
        });
    });

    return (
        <div>
            SuyoGAY MART
        </div >
    );
};
export default Homepage;