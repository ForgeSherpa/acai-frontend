import { Children } from "react";
import Button from "./button";

export default function Header({func, children}){
    return(
    <>
        <div className="container mx-auto flex justify-between pt-6">
            <Button event={func}/>
            {children}
            <img src="/uib.jpeg" alt="" className="h-16 rounded-lg" />
        </div>
    </>
    );
}