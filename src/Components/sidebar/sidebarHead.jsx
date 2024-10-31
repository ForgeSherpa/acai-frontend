import Button from "../button";
export default function SidebarHead({func}){
    return(
    <>
        <div className="flex items-center justify-between m-5 mt-7">
            <p
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
                ACAI
            </p>
            <Button event={func} bgColor='bg-[#244584]'/>
        </div>
    </>
    );
}