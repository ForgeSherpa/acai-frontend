    import { Link } from 'react-router-dom';
    import { useContext, useState, useEffect } from 'react';
    import { SearchContext } from "../context/searchContext";
    import { setsEqual } from 'chart.js/helpers';
    import { Toaster, toast } from 'sonner';
    import { Filter } from 'bad-words';


    export default function Search(){

        const { searchTerm, setSearchTerm} = useContext(SearchContext);
        const [input, setInput] = useState('');

        useEffect(() => {
            setInput(searchTerm);
        }, [searchTerm]);

        const handleInputChange = (e) => {
            setInput(e.target.value); //set input sesuai apa yang diinput user scr manual
        };




            const filter = new Filter();

            const containsProfanity = (input) => {
                return filter.isProfane(input); // Memeriksa apakah input mengandung kata-kata kasar
            };



            const forbiddenWords = [
                "f*ck", "anjing", "kontol", "memek", "bajingan", "goblok", "tolol", "bangsat", "setan", "monyet",
                "brengsek", "kampret", "bacot", "asu", "lontong", "pelacur", "jalang", "pecun", "pelit",
                "cablok", "kondom", "aswang", "perek", "dungu", "babi", "sialan", "tai", "bangke",
                "keparat", "bodo", "monyong", "ngentot", "shit", "fuck", "damn", "bitch", "slut", "whore"
            ];
            
            const normalizeString = (str) => {
                return str.toLowerCase()
                    .replace(/[4]/g, 'a')   // Ganti 4 dengan a
                    .replace(/[3]/g, 'e')   // Ganti 3 dengan e
                    .replace(/[1!]/g, 'i')  // Ganti 1 atau ! dengan i
                    .replace(/[0]/g, 'o')   // Ganti 0 dengan o
                    .replace(/[5]/g, 's')   // Ganti 5 dengan s
                    .replace(/[7]/g, 't')   // Ganti 7 dengan t
                    .replace(/[^a-z]/g, ''); // Menghapus karakter selain huruf
            };

            const containsForbiddenWords = (input) => {
                const cleanedInput = normalizeString(input); // Membersihkan input
            
                // Mencocokkan kata terlarang dengan regex
                const regex = new RegExp(
                    forbiddenWords
                        .map(word => word
                            .replace(/[a@4]/g, '[a@4]')  // Variasi huruf 'a'
                            .replace(/[e3]/g, '[e3]')    // Variasi huruf 'e'
                            .replace(/[i1!]/g, '[i1!]')  // Variasi huruf 'i'
                            .replace(/[o0]/g, '[o0]')    // Variasi huruf 'o'
                            .replace(/[s5]/g, '[s5]')    // Variasi huruf 's'
                            .replace(/[t7]/g, '[t7]')    // Variasi huruf 't'
                            .replace(/[\*\+\-\_\=\#\$\%\^\&\*\(\)\_\!\~\`\.\,\/]/g, '') // Menghapus karakter khusus
                        )
                        .join('|'), 'i' // Gabungkan regex untuk semua kata
                );
            
                return regex.test(cleanedInput); // Cek apakah input cocok dengan regex
            };

        const handleSearchClick = (event) => { //pas user klik, tambahkan ke history & buat jadi plg dpn
            if (containsProfanity(input) || containsForbiddenWords(input)) {
                event.preventDefault(); // Mencegah navigasi ke halaman lain
                toast.error("Harap masukkan prompt dengan sopan!"); // Menampilkan pesan error
                return;
            }

            if (input.trim() !== '') {
                const storedHistory = sessionStorage.getItem('searchQuery');
                const history = storedHistory ? JSON.parse(storedHistory) : [];
                const updatedHistory = [input, ...history]; //input user jadi paling depan
                sessionStorage.setItem('searchQuery', JSON.stringify(updatedHistory ));

                //kalau history udh beres, isi search term dgn input, biar bisa dipake di result
                setSearchTerm(input);   
            } 
        };
        



    return(
    <>
        <div className="mt-3 h-[39px] lg:h-[30px] xl:h-[39px] xl:w-6/12 lg:w-7/12 md:w-9/12 w-10/12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
            <div className="bg-white w-[99%] h-[35px] lg:h-[26px] xl:h-[35px] mx-auto flex rounded-full">
                <input className="placeholder-black xl:w-[95%] sm:w-[94%] w-[89%] rounded-full px-3 focus:outline-none" type="text"
                    placeholder="Type Here..." onChange={handleInputChange} value={input}/>
                <Link onClick={(e) => handleSearchClick(e)} to="/result" className={`bg-[#FCA311] xl:w-[5%] sm:w-[6%] w-[11%] rounded-full flex items-center ${input.trim() ? '' : 'pointer-events-none opacity-80'}`}>
                    <img src="/right-arrow.png" alt="" className="w-6 h-6 mx-auto" />
                </Link>
            </div>
        </div>  

        {/* Toaster Provider */}
        {/* bebas mau pake yang mana, ntar koment aja salah satu! */}
        <Toaster position="top-center" richColors />
        {/* <Toaster position="top-right" richColors /> */}
    </>
    );
}   