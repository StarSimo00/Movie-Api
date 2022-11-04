import Movie from "./Movie";


const Searched = ({data , genre}) => {

    const data_is_empty = Object.keys(data).length === 0

    return ( 

        
        <>
            <>
            <div className="container p-2 animate__animated animate__fadeIn">
                <input placeholder="Enter a Genre ...." type="text" id="hhhf" onChange={ (e) => { try{ if( e.target.value.trim() === ''){  }else{ genre(e.target.value.trim())}   }catch{  }  }} />
                <h2 className="text-white m-3 "> </h2>
                <div className="container row ms-1 ">
                    {data_is_empty ?  '' : 
                        data.map( (movie) => {
                        return <Movie key={movie.id} data={movie} /> ; } )
                    }
                </div>
            </div>
        </>
        </>
     );
}
 
export default Searched;