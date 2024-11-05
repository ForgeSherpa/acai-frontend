import Search from './search';
import Header from '../header';

export default function Resultsearch({func}){
    return(
    <>
        <Header func={func}>
          <p className="mt-5 text-4xl bg-clip-text text-transparent inline-block pb-2 bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
            AcademyAI
          </p>
        </Header>
        <Search />
    </>
    );
}