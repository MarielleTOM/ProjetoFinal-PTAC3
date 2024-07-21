import { NextResponse } from "next/server";

export const listaDeBolsas = [
    {
        id: 1,
        img: 'https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2235123694688338482/products/cor.34454.34454BD92211_o.jpg&height=940&width=940',
        Bolsa: "Melissa X Telfar Medium Jelly Shopper II",
        Cor: "Transparente",
        Preço: "R$" + 449.90,
        Tamanho: "Unc"
    },
    {
        id: 2,
        img: '',
        Bolsa: "",
        Cor: "",
        Preço: "R$" + ,
        Tamanho: "Unc"
    },
    {
        id: 3,
        img: '',
        Bolsa: "",
        Cor: "",
        Preço: "R$" + ,
        Tamanho: "Unc"
    },
    {
        id: 4,
        img: '',
        Bolsa: "",
        Cor: "",
        Preço: "R$" + ,
        Tamanho: "Unc"
    },
    {
        id: 5,
        img: '',
        Bolsa: "",
        Cor: "",
        Preço: "R$" + ,
        Tamanho: "Unc"
    },
    {
        id: 6,
        img: '',
        Bolsa: "",
        Cor: "",
        Preço: "R$" + ,
        Tamanho: "Unc"
    },
    {
        id: 7,
        img: '',
        Bolsa: "",
        Cor: "",
        Preço: "R$" + ,
        Tamanho: "Unc"
    },
];

export async function GET(){
    return NextResponse.json(listaDeBolsas)
}https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3549990850390973753/products/cor.34451.34451BD38310_o.jpg&height=940&width=940