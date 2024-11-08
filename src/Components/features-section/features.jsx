import Feature from './feature';

export default function Features(){
    return(
        <>
          <div className="container mx-auto mt-14 lg:mt-10 xl:mt-14 text-center w-10/12 flex flex-col items-center justify-around lg:flex-row">
            <Feature imgScr='/features/fast-time.png' cardTitle='Fast Response' cardText='"Instant replies for a smooth and efficient conversation."'/>
            <Feature imgScr='/features/ai.png' cardTitle='Advance AI' cardText='"Powered by cutting-edge AI for smart, intuitive interactions."'/>
            <Feature imgScr='/features/laugh.png' cardTitle='User-Friendly' cardText='"Easy to navigate for a hassle-free experience."'/>
          </div>
        </>
    );
}