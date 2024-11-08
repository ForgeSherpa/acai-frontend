import Search from './search';

export default function Homesearch(){
    return(
    <>
        <div className="container mx-auto lg:mt-0 mt-4 text-center">
            <p className="text-5xl lg:text-3xl xl:text-5xl bg-clip-text text-transparent inline-block pb-2 bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
                AcademyAI
            </p>
            <br />
            <p className="text-lg lg:text-sm xl:text-lg bg-clip-text text-transparent inline-block mt-4 lg:mt-0 xl:mt-4 bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
                "Hi there! I'm here to help. What do you need?"
            </p>
            <Search />
        </div>
    </>
    );
}