import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextProvider";

function InfoWord() {
  const { word } = useContext(Context);

  

  const data = word;

  const meanings = data && data.map((word) => word.meanings)[0];
  const phonetics = data && data.map((word) => word.phonetics)[0]
  const searchingWord = data && data.map((word) => word.word)[0];

  

  
  

  return (
    <div className="info-word" style={data.length===0?{display:"flex",justifyContent:"center",alignItems:"center"}:{}}>
      <div className="container" style={data.length===0?{display:"flex",justifyContent:"center",alignItems:"center"}:{}} >
          {data.length>0?(
              <div className="info">
                  <h4 className="text-center pt-5">Searching word:"{searchingWord}"</h4>
                  <div className="phonetics">
                      <h5>Pronunciation:</h5>
                      {
                          phonetics.map((p,i)=>(
                              
                                <div key={p.text} className="phonetics-inner">
                                    <p className="border p-1">{p.text}</p>
                                    <audio  controls  >
                                        <source src={p.audio} />
                                    </audio>
                                </div>
                              
                          ))
                      }
                  </div>
                  <Link to="/" className="btn btn-light mt-2"> {"<--Search Another Word"}</Link>
                  
              </div>
          ):(
            <div className="spinner-border text-success d-flex align-items-center justify-content-center" role="status">
            <span className="sr-only"></span>
          </div>
          )}

      </div>

      

    </div>
  );
}

export default InfoWord;
