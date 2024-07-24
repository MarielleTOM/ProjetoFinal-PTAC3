import { NextResponse } from "next/server";

export const listaDeBolsas = [
    {
        id: 1,
        img: 'https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2235123694688338482/products/cor.34454.34454BD92211_o.jpg&height=940&width=940',
        bolsa: "Melissa X Telfar Medium Jelly Shopper II",
        cor: "Transparente",
        preco: 449.90,
        tamanho: "Unc"
    },
    {
        id: 2,
        img: 'https://www.melissa.com.br/ccstore/v1/images/?source=/file/v71500976712747071/products/cor.34437.34437AY24410_o.jpg&height=940&width=940',
        bolsa: "Melissa Box Bag",
        cor: "Preto",
        preco:  269.90,
        tamanho: "Unc"
    },
    {
        id: 3,
        img: 'https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1857614809186971639/products/cor.34437.34437BA65710_o.jpg&height=940&width=940',
        bolsa: "Melissa Box Bag",
        cor: "Verde",
        preco: 269.90 ,
        tamanho: "Unc"
    },
    {
        id: 4,
        img: 'https://cdn-images.farfetch-contents.com/23/89/63/34/23896334_53956108_1000.jpg',
        bolsa: "Bolsa tiracolo Prada Re-Edition 2005",
        cor: "Bege/ dourado/ marrom claro",
        preco: 13500  ,
        tamanho: "P-M"
    },
    {
        id: 5,
        img: 'https://cdn-images.farfetch-contents.com/23/04/89/04/23048904_53161933_1000.jpg',
        bolsa: "Bolsa tote grande com aplicação de logo Prada",
        cor: "bege claro/ marrom camelo",
        preco: 15000  ,
        tamanho: "Unc"
    },
    {
        id: 6,
        img: 'https://cdn-images.farfetch-contents.com/19/46/85/66/19468566_43431447_1000.jpg',
        bolsa: "Bolsa Galleria mini com pelos",
        cor: "rosa claro",
        preco: 25000  ,
        tamanho: "Unc"
    },
    {
        id: 7,
        img: 'https://cdn-images.farfetch-contents.com/22/69/57/22/22695722_53366530_1000.jpg',
        bolsa: "Bolsa tote de canvas com estampa de logo Gucci",
        cor: "off white/ marrom",
        preco: 18097  ,
        tamanho: "Unc"
    },
    {
        id: 8,
        img: 'https://cdn-images.farfetch-contents.com/12/96/48/25/12964825_53159010_1000.jpg',
        bolsa: "Bolsa tiracolo GG Marmont pequena Gucci",
        cor: "Branco",
        preco: 24491  ,
        tamanho: "Unc"
    },
    {
        id: 9,
        img: 'https://t-static.dafiti.com.br/pXEKlzpm7ruLo4Y3-C1RCbjpjEo=/fit-in/60x87/static.dafiti.com.br/p/guess-bolsa-canvas-ii-small-tote-1310-82206241-2-feed.jpg',
        bolsa: "Bolsa Canvas II Small Tote Guess",
        cor: "Bege",
        preco: 999.90 ,
        tamanho: "Unc"
    },
    {
        id: 10,
        img: 'https://t-static.dafiti.com.br/yUe4DCQAXrRHC6LO2M-Ahc1o1Ew=/fit-in/60x87/static.dafiti.com.br/p/guess-bolsa-eco-gemma-top-zip-shoulder-bag-guess-2595-46961431-1-feed.jpg',
        bolsa: "Bolsa Eco Gemma Top Zip Shoulder Bag Guess",
        cor: "Preto",
        preco: 909.93 ,
        tamanho: "Unc"
    },
];

export async function GET(){
    return NextResponse.json(listaDeBolsas)
}