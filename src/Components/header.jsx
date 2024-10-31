import Button from "./button";

export default function Header({func}){
    return(
    <>
        <div className="container mx-auto flex justify-between pt-6">
            <Button event={func}/>
            <img src="public/uib.jpeg" alt="" className="h-16 rounded-lg" />
        </div>
    </>
    );
}