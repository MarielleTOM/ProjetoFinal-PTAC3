'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Carregando from "../app/Componentes/Carregando";
import ErrorGetData from "../app/Componentes/ErrorGetData";

export default function Home() {

  const [listaProduct, setListaProdudt] = useState ([]);
  const [listaComplete, setListaComplete] = useState ([]);
  const [search, setSearch] = useState("");
  const [errorFatch, setErrorFatch] = useState (false);

  useEffect(() => {
    const getProtucts = async () =>{
      try {
        const response = await fetch("http://localhost:3000/api")
        const data = await response.json();
        setListaProdudt(data);
        setListaComplete(data);
      }catch{
        setErrorFatch(true);
      }
    };
    getProtucts();
  }, []);

  const orderAz  = () => {
    let newList = [...listaProduct].sort((a,b)=>
      a.bolsa.localeCompare(b.bolsa)
    );
    setListaProdudt(newList);
  }

  const orderZa  = () => {
    let newList = [...listaProduct].sort((a,b)=>
      a.bolsa.localeCompare(b.bolsa)
    );
    newList = newList.reverse();
    setListaProdudt(newList);
  }

  const ordermenor = () =>{
    let newList = [...listaProduct].sort( (a, b) =>
      a.preco - b.preco
  );
  setListaProdudt(newList);
  }
  
  const ordermaior = () =>{
    let newList = [...listaProduct].sort( (a, b) =>
        a.preco - b.preco
    );
    newList = newList.reverse();
    setListaProdudt(newList);
  }

 

  const searchText = (text) => {
    setSearch(text);

    if(text.trim()==""){
      setListaProdudt(listaComplete);
      return
    }

    const newList = listaProduct.filter((produtos)=>
      produtos.bolsa.toUpperCase().trim().includes(search.toUpperCase().trim()))
    setListaProdudt(newList);
  }

  if(errorFatch == true){
    return <ErrorGetData/>
  }

  if (listaComplete[0]==null){
    return <Carregando/>
  }



  return (
    <>
    <div>
      <input type="text" value={search} placeholder="Pesquise o produto!" 
      onChange={(event)=> searchText(event.target.value)}/>
      <button onClick={orderAz}>A-Z</button>
      <button onClick={orderZa}>Z-A</button>
      <button onClick={ordermaior}>maior</button>
      <button onClick={ordermenor}>menor</button>
    </div>
      {listaProduct.map((data) => 
        <div key={data.id}>
        <br />
        <div >
            <p>{data.bolsa}</p>
            <div>
                <Image
                    width={300}
                    height={300}
                    src={data.img} />
            </div>
            <p>R${data.preco}</p>
            <p>{data.cor}</p>
            <p>{data.tamanho}</p>
        </div>
    </div>
    )};   
  </>
  );
}