import Reviews from './Reviews';
import img_embalse_yeso from "../imports/optimizadas/Rutas/Glaciares/Embalse el yeso.jpg";
import img_nieves_negras from "../imports/optimizadas/Rutas/Glaciares/Glacias nieves negras .jpg";
import img_laguna_rubilla from "../imports/optimizadas/Rutas/Glaciares/laguna rubilla .jpg";
import img_sector_morado from "../imports/optimizadas/Rutas/Glaciares/sector el morado .jpeg";
import img_termas_colina from "../imports/optimizadas/Rutas/Termas/Termas valle de colina .jpg";
import img_tour_2 from "../imports/optimizadas/Rutas/Glaciares/Tours y treking2.png";
import img_tour_9 from "../imports/optimizadas/Rutas/Glaciares/Tours y treking9.png";

import img_laguna_negra from "../imports/optimizadas/Rutas/LAGUNA NEGRA/Laguna negra.jpeg";
import img_laguna_negra_2 from "../imports/optimizadas/Rutas/LAGUNA NEGRA/LAGUNA NEGRA 2.jpeg";
import img_laguna_negra_3 from "../imports/optimizadas/Rutas/LAGUNA NEGRA/Laguna negra 3.jpeg";
import img_laguna_negra_4 from "../imports/optimizadas/Rutas/LAGUNA NEGRA/Laguna negra 4.jpeg";
import img_laguna_negra_5 from "../imports/optimizadas/Rutas/LAGUNA NEGRA/Laguna negra 5.jpeg";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  MapPin,
  Mountain,
  ChevronRight,
  ChevronLeft,
  Menu,
  MessageCircle,
  X,
  Instagram,
  Phone,
  Mail,
  Search,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import w_cabañaelingenio_0 from "../imports/optimizadas/Cabaña el ingenio/Cabaña el ingenio 57.webp";
import w_cabañaelingenio_1 from "../imports/optimizadas/Cabaña el ingenio/Cabaña el ingenio 58.webp";
import w_cabañaelingenio_2 from "../imports/optimizadas/Cabaña el ingenio/Cabaña el ingenio 66.webp";
import w_cabañaelingenio_3 from "../imports/optimizadas/Cabaña el ingenio/Cabaña el ingenio 70.webp";
import w_cabañaelingenio_4 from "../imports/optimizadas/Cabaña el ingenio/Cabaña el ingenio 73.webp";
import w_cabañaelingenio_5 from "../imports/optimizadas/Cabaña el ingenio/Cabaña el ingenio 77.webp";
import w_cabañaelingenio_6 from "../imports/optimizadas/Cabaña el ingenio/Cabaña el ingenio 78.webp";
import w_cabañaelingenio_7 from "../imports/optimizadas/Cabaña el ingenio/Cabaña el ingenio 84.webp";
import w_cabañaelingenio_8 from "../imports/optimizadas/Cabaña el ingenio/cabaña el ingenio 97.webp";
import w_cabañaelingenio_9 from "../imports/optimizadas/Cabaña el ingenio/cabaña el ingenio 96.webp";
import w_domomarmolejo_0 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo7.webp";
import w_domomarmolejo_1 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo8.webp";
import w_domomarmolejo_2 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo9.webp";
import w_domomarmolejo_3 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo10.webp";
import w_domomarmolejo_4 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo11.webp";
import w_domomarmolejo_5 from "../imports/optimizadas/Domo Marmolejo/Domo marmolejo 22.avif";
import w_domomarmolejo_6 from "../imports/optimizadas/Domo Marmolejo/Domo marmolejo 23.avif";
import w_domomarmolejo_7 from "../imports/optimizadas/Domo Marmolejo/Domo marmolejo 24.avif";
import w_domomarmolejo_8 from "../imports/optimizadas/Domo Marmolejo/Domo marmolejo 26 .avif";
import w_domomarmolejo_9 from "../imports/optimizadas/Domo Marmolejo/Domo marmolejo 27.avif";
import w_domoestrellado_0 from "../imports/optimizadas/Domo estrellado/Domo Estrellado10.webp";
import w_domoestrellado_1 from "../imports/optimizadas/Domo estrellado/Domo Estrellado14.webp";
import w_domoestrellado_2 from "../imports/optimizadas/Domo estrellado/Domo Estrellado15.webp";
import w_domoestrellado_3 from "../imports/optimizadas/Domo estrellado/Domo Estrellado16.webp";
import w_domoestrellado_4 from "../imports/optimizadas/Domo estrellado/Domo Estrellado17.webp";
import w_domoestrellado_5 from "../imports/optimizadas/Domo estrellado/Domo Estrellado18.webp";
import w_domoestrellado_6 from "../imports/optimizadas/Domo estrellado/Domo Estrellado19.webp";
import w_domoestrellado_7 from "../imports/optimizadas/Domo estrellado/Domo Estrellado22.webp";
import w_domoestrellado_8 from "../imports/optimizadas/Domo estrellado/Domo Estrellado23.webp";
import w_domoestrellado_9 from "../imports/optimizadas/Domo estrellado/Domo Estrellado4.webp";
import w_fotosdeservicioycomida_0 from "../imports/optimizadas/Fotos de servicio y comida/Cabaña el ingenio 10.webp";
import w_fotosdeservicioycomida_1 from "../imports/optimizadas/Fotos de servicio y comida/Cabaña el ingenio 20.webp";
import w_fotosdeservicioycomida_2 from "../imports/optimizadas/Fotos de servicio y comida/Cabaña el ingenio 23.webp";
import w_fotosdeservicioycomida_3 from "../imports/optimizadas/Fotos de servicio y comida/Cabaña el ingenio 31.webp";
import w_fotosdeservicioycomida_4 from "../imports/optimizadas/Fotos de servicio y comida/Cabaña el ingenio 50.webp";
import w_fotosdeservicioycomida_5 from "../imports/optimizadas/Fotos de servicio y comida/Cabaña el ingenio 6.webp";
import w_fotosdeservicioycomida_6 from "../imports/optimizadas/Fotos de servicio y comida/Fotos servicios Y comida  1.webp";
import w_fotosdeservicioycomida_7 from "../imports/optimizadas/Fotos de servicio y comida/Fotos servicios Y comida  10.webp";
import w_fotosdeservicioycomida_8 from "../imports/optimizadas/Fotos de servicio y comida/Fotos servicios Y comida  11.webp";
import w_fotosdeservicioycomida_9 from "../imports/optimizadas/Fotos de servicio y comida/Fotos servicios Y comida  4.webp";
import w_fotosdeservicioycomida_10 from "../imports/optimizadas/Fotos de servicio y comida/Fotos servicios Y comida  5.webp";
import w_fotosdeservicioycomida_11 from "../imports/optimizadas/Fotos de servicio y comida/Fotos servicios Y comida  6.webp";
import w_fotosdeservicioycomida_12 from "../imports/optimizadas/Fotos de servicio y comida/Fotos servicios Y comida  7.webp";
import w_fotosdeservicioycomida_13 from "../imports/optimizadas/Fotos de servicio y comida/Tours y treking23.webp";
import w_fotosdeservicioycomida_14 from "../imports/optimizadas/Fotos de servicio y comida/tour y treking 95.webp";
import w_fotosdeservicioycomida_15 from "../imports/optimizadas/Fotos de servicio y comida/tours y treking 93.webp";
import w_fotosdeservicioycomida_16 from "../imports/optimizadas/Fotos de servicio y comida/tours y trekking 97.webp";

import heroBg from "../imports/optimizadas/Seccion nosotros/cajon_del_maipo_nevado.jpg";
import logoImg from "../imports/logo_transparente.png";
import video1 from "../imports/optimizadas/Videos/Toma dron 1 .mp4";
import video2 from "../imports/optimizadas/Videos/Toma dron 2 .mp4";
import nos1 from "../imports/optimizadas/Seccion nosotros/67273B04-B275-4934-A4B7-CE41F7D950FE.png";
import nos2 from "../imports/optimizadas/Seccion nosotros/Copia de Cabaña el ingenio 50.webp";
import nos3 from "../imports/optimizadas/Seccion nosotros/Copia de Cabaña el ingenio 6.webp";
import nos4 from "../imports/optimizadas/Seccion nosotros/Copia de cabaña el inegenio 96.webp";
import nos5 from "../imports/optimizadas/Seccion nosotros/Copia de tour y treking 95.webp";
import nos6 from "../imports/optimizadas/Seccion nosotros/DC41371B-49A1-4870-9596-E24EE0A7C483.png";
import nos7 from "../imports/optimizadas/Seccion nosotros/Tours y treking28.webp";
import nos8 from "../imports/optimizadas/Seccion nosotros/cajon_del_maipo_nevado.jpg";
import nos9 from "../imports/optimizadas/Seccion nosotros/tours y treking 85.webp";
import nos10 from "../imports/optimizadas/Seccion nosotros/tours y treking 86.webp";
import nos11 from "../imports/optimizadas/Seccion nosotros/tours y treking 87.webp";
import nos12 from "../imports/optimizadas/Seccion nosotros/tours y treking 88.webp";
import nos13 from "../imports/optimizadas/Seccion nosotros/tours y treking 89.webp";
import nos14 from "../imports/optimizadas/Seccion nosotros/tours y treking 90.webp";
import nos15 from "../imports/optimizadas/Seccion nosotros/tours y treking 91.webp";
import nos16 from "../imports/optimizadas/Seccion nosotros/tours y treking 92.webp";
import nos17 from "../imports/optimizadas/Seccion nosotros/tours y treking 94.webp";
import nos18 from "../imports/optimizadas/Seccion nosotros/tours y treking 99.webp";
import nos19 from "../imports/optimizadas/Seccion nosotros/tours y trekking 98.webp";
import tour_trekking_38 from "../imports/optimizadas/Tour y trekking/Tours y treking38.png";



const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.svg.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.76-5.18 2.9-6.76 1.48-1.08 3.3-1.57 5.14-1.43v4.12c-.52-.08-1.05-.13-1.57-.06-1.06.1-2.06.7-2.6 1.64-.53.94-.58 2.11-.13 3.09.46.99 1.34 1.7 2.41 1.94.94.21 1.94-.03 2.7-.62.77-.59 1.25-1.51 1.3-2.5.07-2.84.03-5.69.05-8.53.03-2.91.01-5.83.02-8.74h-4.04z" />
  </svg>
);

const ACCOMMODATIONS = [
  {
    id: "marmolejo",
    name: "Domo Marmolejo",
    capacity: "2 A 4 PERSONAS",
    price: "$70.000",
    shortDesc:
      "Vive una experiencia única bajo las estrellas. Cuenta con cama matrimonial en 2do nivel, dos camas individuales...",
    longDesc:
      "Escápate de la rutina y vive una experiencia inolvidable en nuestro Domo Marmolejo. Diseñado para recibir hasta 4 personas, es el lugar perfecto para conectar con la naturaleza sin perder comodidad. Relájate bajo las estrellas en nuestra tinaja de agua caliente y descubre los increíbles paisajes del Cajón del Maipo.",
    amenities: [
      "Cama matrimonial (2do nivel)",
      "Dos camas individuales (1er piso)",
      "Cocina completamente equipada",
      "Living con Smart TV",
      "Estufa a leña",
      "Amplios ventanales panorámicos",
      "Tinaja de agua caliente (Adicional)",
    ],
    images: [
      w_domomarmolejo_0,
      w_domomarmolejo_1,
      w_domomarmolejo_2,
      w_domomarmolejo_3,
      w_domomarmolejo_4,
      w_domomarmolejo_5,
      w_domomarmolejo_6,
      w_domomarmolejo_7,
      w_domomarmolejo_8,
      w_domomarmolejo_9,
    ],
  },
  {
    id: "estrellado",
    name: "Domo Estrellado",
    capacity: "1 A 2 PERSONAS",
    price: "$65.000",
    shortDesc:
      "Ideal para escapadas en pareja. Amplios ventanales y tragaluces para dormir bajo las estrellas...",
    longDesc:
      "Diseñado especialmente para parejas que buscan una escapada romántica. Este domo cuenta con tragaluces sobre la cama para observar el cielo nocturno del Cajón del Maipo. Un espacio cálido, privado y equipado con todo lo necesario para no querer salir.",
    amenities: [
      "Cama Matrimonial / King",
      "Cocina completamente equipada",
      "Living con Smart TV",
      "Estufa a leña",
      "Tragaluz para ver estrellas",
      "Parrilla y Terraza",
      "Tinaja de agua caliente (Adicional)",
    ],
    images: [
      w_domoestrellado_4,
      w_domoestrellado_3,
      w_domoestrellado_2,
      w_domoestrellado_9,
      w_domoestrellado_0,
      w_domoestrellado_1,
      w_domoestrellado_5,
      w_domoestrellado_6,
      w_domoestrellado_7,
      w_domoestrellado_8,
    ],
  },
  {
    id: "cabana",
    name: "Cabaña El Ingenio",
    capacity: "4 A 6 PERSONAS",
    price: "$80.000",
    shortDesc:
      "El espacio ideal para desconectar en familia. Totalmente equipada, estufa a leña y amplias áreas exteriores...",
    longDesc:
      "Tu refugio clásico de montaña en el corazón del Cajón del Maipo. Disfruta de una estadía rodeada de aire puro y la tranquilidad que solo el bosque puede ofrecer. Completamente equipada con espacios amplios y acogedores, perfecta para familias o grupos de amigos.",
    amenities: [
      "Habitaciones múltiples",
      "Cocina totalmente equipada",
      "Living comedor amplio",
      "Estufa a leña",
      "Amplias áreas exteriores",
      "Parrilla para asados",
      "Tinaja de agua caliente (Adicional)",
    ],
    images: [
      w_cabañaelingenio_9,
      w_cabañaelingenio_0,
      w_cabañaelingenio_1,
      w_cabañaelingenio_2,
      w_cabañaelingenio_3,
      w_cabañaelingenio_4,
      w_cabañaelingenio_8,
      w_cabañaelingenio_5,
      w_cabañaelingenio_6,
      w_cabañaelingenio_7,
    ],
  },
];


import botella_1 from "../imports/optimizadas/Merch/Botella_.jpeg";
import botella_2 from "../imports/optimizadas/Merch/Botella.jpeg";

import cuello_1 from "../imports/optimizadas/Merch/Cuellos_.jpeg";

import jockey_1 from "../imports/optimizadas/Merch/Jockey_1.jpeg";
import jockey_2 from "../imports/optimizadas/Merch/jockey_2.jpeg";
import jockey_4 from "../imports/optimizadas/Merch/Jockey_4.jpeg";
import jockey_5 from "../imports/optimizadas/Merch/Jockey_5.jpeg";

import polera_1 from "../imports/optimizadas/Merch/Polera_1.jpeg";
import polera_3 from "../imports/optimizadas/Merch/Polera_3.jpeg";
import polera_4 from "../imports/optimizadas/Merch/Poleras_4.jpeg";
import polera_6a from "../imports/optimizadas/Merch/Polera_6.jpeg";
import polera_6b from "../imports/optimizadas/Merch/Poleras_6.jpeg";
import polera_7 from "../imports/optimizadas/Merch/Polera_7.jpeg";

import shopero_1 from "../imports/optimizadas/Merch/Shopero_1.jpeg";
import shopero_2 from "../imports/optimizadas/Merch/Shopero_2.jpeg";
import shopero_3 from "../imports/optimizadas/Merch/Shopero_3.jpeg";
import shopero_4 from "../imports/optimizadas/Merch/Shopero_4.jpeg";

import sombrero_1 from "../imports/optimizadas/Merch/Sombrero_aventurero.jpeg";
import sombrero_1_alt from "../imports/optimizadas/Merch/Sombrero_aventurero-1.jpeg";
import sombrero_2 from "../imports/optimizadas/Merch/Sombrero_aventurero_2.jpeg";
import sombrero_3 from "../imports/optimizadas/Merch/Sombrero_aventurero_3.jpeg";
import sombrero_4 from "../imports/optimizadas/Merch/Sombrero_aventurero_4.jpeg";
import sombrero_5 from "../imports/optimizadas/Merch/Sombrero_aventurero_5.jpeg";
import sombrero_6 from "../imports/optimizadas/Merch/Sombrero_aventurero_6.jpeg";
import sombrero_7 from "../imports/optimizadas/Merch/Sombrero_aventurero_7.jpeg";
import sombrero_8 from "../imports/optimizadas/Merch/Sombrero_aventurero_8.jpeg";

import sticker_1 from "../imports/optimizadas/Merch/Sticker.jpeg";
import sticker_2 from "../imports/optimizadas/Merch/stickers.jpeg";

import tazon_xl_1 from "../imports/optimizadas/Merch/Tazon XL.jpeg";
import tazon_xl_2 from "../imports/optimizadas/Merch/taza XL2.jpeg";

import tazon_enl_1 from "../imports/optimizadas/Merch/Tazon_Enlozado 1.jpeg";
import tazon_enl_2 from "../imports/optimizadas/Merch/Tazon_Enlozado2.jpeg";
import tazon_enl_3 from "../imports/optimizadas/Merch/Tazon_Enlozado3.jpeg";
import tazon_enl_4 from "../imports/optimizadas/Merch/Tazon_Enlozado4.jpeg";
import tazon_enl_5 from "../imports/optimizadas/Merch/Tazon_Enlozado5.jpeg";
import tazon_enl_6 from "../imports/optimizadas/Merch/Tazon_Enlozado6.jpeg";
import tazon_enl_7 from "../imports/optimizadas/Merch/Tazon_Enlozado7.jpeg";
import tazon_enl_8 from "../imports/optimizadas/Merch/Tazon_Enlozado 8.jpeg";
import tazon_enl_9 from "../imports/optimizadas/Merch/Tazon_Enlozado9.jpeg";

import termo_1 from "../imports/optimizadas/Merch/Termos.jpeg";
import termo_2 from "../imports/optimizadas/Merch/termo.jpeg";

const MERCH_ITEMS = [
  {
    id: 1,
    name: "Botellas",
    price: "$10.000",
    images: [botella_1, botella_2],
    desc: "Botellas para hidratarte durante tus trekking en la montaña.",
  },
  {
    id: 2,
    name: "Cuellos",
    price: "$5.000",
    images: [cuello_1],
    desc: "Cuello multiuso ideal para protegerte del frío o del polvo durante las expediciones.",
  },
  {
    id: 3,
    name: "Jockeys",
    price: "$5.000",
    images: [jockey_1, jockey_2, jockey_4, jockey_5],
    desc: "Gorro estilo jockey con el logo de El Ingenio, perfecto para días soleados.",
  },
  {
    id: 4,
    name: "Poleras",
    price: "$7.000",
    images: [polera_1, polera_3, polera_4, polera_6a, polera_6b, polera_7],
    desc: "Poleras de diseño único inspiradas en la naturaleza del Cajón del Maipo.",
  },
  {
    id: 5,
    name: "Shopero",
    price: "$8.000",
    images: [shopero_1, shopero_2, shopero_3, shopero_4],
    desc: "Shopero para disfrutar de tus bebidas favoritas con estilo montañés.",
  },
  {
    id: 6,
    name: "Sombrero Aventurero",
    price: "$12.000",
    images: [sombrero_1, sombrero_1_alt, sombrero_2, sombrero_3, sombrero_4, sombrero_5, sombrero_6, sombrero_7, sombrero_8],
    desc: "El clásico sombrero de explorador para tus rutas y caminatas largas.",
  },
  {
    id: 7,
    name: "Stickers",
    price: "$2.000",
    images: [sticker_1, sticker_2],
    desc: "Stickers de colección para tu termo, laptop o vehículo.",
  },
  {
    id: 8,
    name: "Tazón XL",
    price: "$6.000",
    images: [tazon_xl_1, tazon_xl_2],
    desc: "Un tazón extra grande para esas mañanas frías en la cordillera.",
  },
  {
    id: 9,
    name: "Tazón Enlozado",
    price: "$5.000",
    images: [tazon_enl_1, tazon_enl_2, tazon_enl_3, tazon_enl_4, tazon_enl_5, tazon_enl_6, tazon_enl_7, tazon_enl_8, tazon_enl_9],
    desc: "Tazón enlozado tradicional, liviano y muy resistente para camping.",
  },
  {
    id: 10,
    name: "Termos",
    price: "$15.000",
    images: [termo_1, termo_2],
    desc: "Mantén tu café o mate caliente por horas con nuestros termos.",
  }
];

const SERVICES = [
  {
    title: "TINAJAS CALIENTES",
    desc: "Adicional de $30.000 para uso exclusivo y relajación bajo las estrellas.",
    images: [
      w_fotosdeservicioycomida_3,
      w_fotosdeservicioycomida_11,
      w_fotosdeservicioycomida_12,
      w_fotosdeservicioycomida_10,
    ],
  },
  {
    title: "PISCINA",
    desc: "Uso de piscina incluido en tu estadía para refrescarte en verano.",
    images: [
      w_fotosdeservicioycomida_4,
      w_fotosdeservicioycomida_15,
      w_fotosdeservicioycomida_2,
      w_fotosdeservicioycomida_5,
      w_fotosdeservicioycomida_0,
      w_fotosdeservicioycomida_16,
      w_fotosdeservicioycomida_14,
    ],
  },
  {
    title: "DESAYUNO CAMPESTRE",
    desc: "Adicional de $8.000 p/p. Comienza tu día con sabores de la cordillera.",
    images: [
      w_fotosdeservicioycomida_8,
      w_fotosdeservicioycomida_13,
    ],
  },
  {
    title: "TABLA CORDILLERANA",
    desc: "Adicional de $20.000 (para 2 personas). El complemento ideal para la tarde.",
    images: [
      w_fotosdeservicioycomida_6,
      w_fotosdeservicioycomida_9,
      w_fotosdeservicioycomida_7,
    ],
  },
];


const EXPEDITIONS = [
  {
    title: "Trekking Laguna Negra",
    desc: "Expedición guiada de aproximadamente 6 horas de duración. Recorreremos senderos ocultos hasta llegar a una de las lagunas más imponentes de la zona central.",
    difficulty: "Dificultad Media",
    duration: "6 Horas",
    images: [img_laguna_negra, img_laguna_negra_2, img_laguna_negra_3, img_laguna_negra_4, img_laguna_negra_5]
  },
  {
    title: "Glaciares y Valles",
    desc: "Visitaremos el sector de Morados, el Valle La Engorda, el histórico Refugio Plantat, la Laguna Rubilla y culminaremos con la vista del majestuoso Glaciar Nieves Negras.",
    difficulty: "Dificultad Alta",
    duration: "Día Completo",
    images: [img_embalse_yeso, img_nieves_negras, img_laguna_rubilla, img_sector_morado, img_tour_9]
  },
  {
    title: "Termas y Atractivos",
    desc: "Un recorrido icónico por la cordillera. Pasaremos por el imponente Embalse El Yeso, la Cascada Velo de la Novia, Baños Morales y cerraremos con un merecido relajo en las Termas Valle de Colina.",
    difficulty: "Dificultad Baja",
    duration: "Todo el Día",
    images: [img_termas_colina, img_tour_2]
  }
];

const generalTourImages = Object.values(
  import.meta.glob('../imports/optimizadas/Tour y trekking/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
).filter(img => {
  const src = typeof img === 'string' ? img : (img && (img as any).default ? (img as any).default : String(img));
  const s = decodeURIComponent(src).toLowerCase();
  return !s.includes('baños morales') && 
         !s.includes('ban%cc%83os morales') &&
         !s.includes('baños morales') &&
         !s.includes('embalse el yeso') && 
         !s.includes('nieves negras') && 
         !s.includes('laguna negra') && 
         !s.includes('termas valle') && 
         !s.includes('treking2.') && 
         !s.includes('treking9.') && 
         !s.includes('treking38.') && 
         !s.includes('laguna rubilla') && 
         !s.includes('sector el morado');
}) as string[];

export default function App() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [bookingStep, setBookingStep] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [huespedes, setHuespedes] = useState("2 Personas");
  const [alojamiento, setAlojamiento] = useState("Domo Marmolejo");

  const [selectedRefugio, setSelectedRefugio] = useState<
    (typeof ACCOMMODATIONS)[0] | null
  >(null);
  const [selectedMerch, setSelectedMerch] = useState<
    (typeof MERCH_ITEMS)[0] | null
  >(null);
  const [activeExpedition, setActiveExpedition] = useState(0);
  const [selectedService, setSelectedService] = useState<
    (typeof SERVICES)[0] | null
  >(null);
  const [isBoutiqueOpen, setIsBoutiqueOpen] = useState(false);
  const [showRoutesModal, setShowRoutesModal] = useState(false);
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const phoneNumber = "56993254071";

  const handleBookingSubmit = () => {
    const text = encodeURIComponent(
      `Hola! Vengo desde la pagina web y quiero consultar disponibilidad para reservar.\n\n 1. Alojamiento: ${alojamiento}\n 2. Check-in: ${checkIn || "No especificado"}\n 3. Check-out: ${checkOut || "No especificado"}\n 4. Huespedes: ${huespedes}`
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${text}`,
      "_blank"
    );
  };

  const NextArrow = (props: any) => (
    <div
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer flex h-10 w-10 items-center justify-center bg-[#1C1F1A]/80 border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1C1F1A] transition-colors"
      onClick={props.onClick}
    >
      <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
    </div>
  );

  const PrevArrow = (props: any) => (
    <div
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer flex h-10 w-10 items-center justify-center bg-[#1C1F1A]/80 border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1C1F1A] transition-colors"
      onClick={props.onClick}
    >
      <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
    </div>
  );

  const SouvenirNextArrow = (props: any) => (
    <div
      className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer flex h-10 w-10 items-center justify-center bg-[#1C1F1A]/90 border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1C1F1A] transition-colors"
      onClick={props.onClick}
    >
      <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
    </div>
  );

  const SouvenirPrevArrow = (props: any) => (
    <div
      className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer flex h-10 w-10 items-center justify-center bg-[#1C1F1A]/90 border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1C1F1A] transition-colors"
      onClick={props.onClick}
    >
      <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const UI_CLASSES = {
    buttonPrimary:
      "bg-[#C8A96E] text-black font-['DM_Sans',sans-serif] uppercase tracking-[0.1em] text-xs font-medium px-8 py-4 hover:bg-[#b0935d] transition-colors border-none outline-none flex items-center justify-center gap-2",
    buttonOutline:
      "border border-[#C8A96E] text-[#C8A96E] font-['DM_Sans',sans-serif] uppercase tracking-[0.1em] text-xs font-medium px-8 py-4 hover:bg-[#C8A96E] hover:text-black transition-colors outline-none flex items-center justify-center gap-2",
    input:
      "w-full bg-transparent border-b border-[#C8A96E] py-3 text-[#F0EDE6] focus:outline-none focus:border-white font-['DM_Sans',sans-serif] uppercase text-xs tracking-widest [color-scheme:dark]",
    heading:
      "font-['Cormorant_Garamond',serif] italic font-light",
    body: "font-['DM_Sans',sans-serif] font-light",
    label:
      "block text-[10px] font-['DM_Sans',sans-serif] uppercase tracking-[0.15em] text-[#9A9690] mb-2",
  };

  const HoverIndicator = ({ isVideo = false }: { isVideo?: boolean }) => (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {/* Desktop: Explorar overlay */}
      <div className="hidden lg:flex absolute inset-0 bg-[#1C1F1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center">
        <span className={`${UI_CLASSES.buttonOutline} bg-[#1C1F1A]/80 backdrop-blur-sm pointer-events-none`}>
          {isVideo ? 'Ver Video' : 'Ver Imagen'}
        </span>
      </div>
      {/* Mobile: Magnifying glass icon in corner */}
      <div className="flex lg:hidden absolute bottom-3 right-3 items-center justify-center">
        <div className="relative w-10 h-10 bg-[#1C1F1A]/60 backdrop-blur-sm rounded-full flex items-center justify-center text-[#F0EDE6] shadow-sm">
          <Search className="w-5 h-5" />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden text-[#F0EDE6] ${UI_CLASSES.body} selection:bg-[#C8A96E] selection:text-black relative`}
    >
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${heroBg}')` }}
      />
      {/* Dark Overlay Layer */}
      <div className="fixed inset-0 bg-[#1C1F1A]/80 z-0 pointer-events-none" />

      <div className="relative z-10">

        {showRoutesModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <div
              className="absolute inset-0 bg-[#1C1F1A]/90 backdrop-blur-sm transition-opacity"
              onClick={() => setShowRoutesModal(false)}
            ></div>
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-transparent backdrop-blur-md border border-[#C8A96E] p-8 md:p-16 flex flex-col">
              <button
                onClick={() => setShowRoutesModal(false)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-10 flex h-10 w-10 items-center justify-center bg-[#1C1F1A]/50 border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-black transition-colors"
              >
                <X className="h-5 w-5" strokeWidth={1} />
              </button>

              <h2
                className={`${UI_CLASSES.heading} text-4xl md:text-5xl text-[#C8A96E] mb-4 mt-20 md:mt-0`}
              >
                Rutas & Expediciones
              </h2>
              <p className="text-[#9A9690] mb-12 leading-relaxed text-base max-w-2xl">
                Descubre los detalles de cada uno de los
                trekking y tours que tenemos preparados para ti
                en la cordillera.
              </p>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[500px]">
                {/* Tabs / Sidebar */}
                <div className="w-full lg:w-1/3 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-[#C8A96E]/20 pb-8 lg:pb-0 lg:pr-8">
                  {EXPEDITIONS.map((exp, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveExpedition(idx)}
                      className={`text-left px-6 py-4 border transition-all text-sm uppercase tracking-widest ${activeExpedition === idx
                        ? "border-[#C8A96E] text-[#C8A96E] bg-[#C8A96E]/5"
                        : "border-[#9A9690]/30 text-[#9A9690] hover:border-[#C8A96E]/50"
                        }`}
                    >
                      {exp.title}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-3xl font-['Cormorant_Garamond',serif] text-[#F0EDE6] mb-4">
                      {EXPEDITIONS[activeExpedition].title}
                    </h3>
                    <p className="text-sm text-[#9A9690] leading-relaxed mb-6">
                      {EXPEDITIONS[activeExpedition].desc}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs font-['DM_Sans',sans-serif] uppercase tracking-[0.1em] text-[#C8A96E]">
                      <span className="bg-[#C8A96E]/10 px-3 py-1.5 border border-[#C8A96E]/20">{EXPEDITIONS[activeExpedition].difficulty}</span>
                      <span className="bg-[#C8A96E]/10 px-3 py-1.5 border border-[#C8A96E]/20">{EXPEDITIONS[activeExpedition].duration}</span>
                    </div>
                  </div>

                  {/* Images Slider */}
                  <div className="mt-auto">
                    {EXPEDITIONS[activeExpedition].images.length > 1 ? (
                      <Slider {...sliderSettings} className="w-full aspect-video slider-container">
                        {EXPEDITIONS[activeExpedition].images.map((img, idx, array) => (
                          <div key={idx} className="outline-none aspect-video overflow-hidden relative">
                            <img
                              src={img}
                              alt={`Expedición ${idx + 1}`}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                              onClick={() => setLightbox({ images: array, index: idx })}
                            />
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <div className="outline-none w-full aspect-video overflow-hidden relative">
                        <img
                          src={EXPEDITIONS[activeExpedition].images[0]}
                          alt="Expedición"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                          onClick={() => setLightbox({ images: [EXPEDITIONS[activeExpedition].images[0]], index: 0 })}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isBoutiqueOpen && (
          <div
            className="fixed inset-0 z-[80] overflow-y-auto bg-fixed bg-cover bg-center"
            style={{
              backgroundImage: `url('${heroBg}')`,
            }}
          >
            <div className="fixed inset-0 bg-[#1C1F1A]/80 z-0 pointer-events-none" />

            <div className="min-h-screen px-6 py-20 lg:px-12 max-w-7xl mx-auto relative z-10">
              <button
                onClick={() => setIsBoutiqueOpen(false)}
                className="mb-12 flex items-center gap-4 text-[#C8A96E] uppercase tracking-[0.2em] text-xs font-['DM_Sans',sans-serif] hover:text-white transition-colors"
              >
                <ChevronLeft
                  className="h-4 w-4"
                  strokeWidth={1}
                />{" "}
                Volver al Inicio
              </button>

              <div className="mb-20 text-center">
                <h2
                  className={`${UI_CLASSES.heading} text-5xl md:text-7xl text-[#C8A96E] mb-6`}
                >
                  Colección Completa
                </h2>
                <p className="max-w-2xl mx-auto text-[#9A9690] text-base">
                  Descubre todos los recuerdos físicos y piezas
                  exclusivas que hemos diseñado para que lleves
                  un pedazo del Cajón del Maipo siempre contigo.
                </p>
              </div>

              <div className="grid gap-10 md:grid-cols-3">
                {MERCH_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col bg-transparent border border-[#C8A96E]/20 hover:border-[#C8A96E] transition-colors cursor-pointer"
                    onClick={() => setSelectedMerch(item)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20 p-8 flex items-center justify-center">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />


                    </div>
                    <div className="p-8 text-center flex flex-col items-center">
                      <h3 className="mb-4 text-xs font-['DM_Sans',sans-serif] uppercase tracking-[0.15em] text-[#F0EDE6]">
                        {item.name}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[#C8A96E]">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {lightbox && (
          <div className="fixed inset-0 z-[200]">
            <div
              className="absolute inset-0 bg-[#1C1F1A]/90 backdrop-blur-md transition-opacity cursor-zoom-out"
              onClick={() => setLightbox(null)}
            ></div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 z-[210] flex h-12 w-12 items-center justify-center bg-[#1C1F1A] border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1C1F1A] transition-colors"
            >
              <X className="h-6 w-6" strokeWidth={1} />
            </button>
            {lightbox.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((prev) => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null);
                  }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[210] flex h-12 w-12 items-center justify-center bg-[#1C1F1A] border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1C1F1A] transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" strokeWidth={1} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((prev) => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null);
                  }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[210] flex h-12 w-12 items-center justify-center bg-[#1C1F1A] border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1C1F1A] transition-colors"
                >
                  <ChevronRight className="h-6 w-6" strokeWidth={1} />
                </button>
              </>
            )}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[85vh] md:h-[95vh] z-[205] flex items-center justify-center pointer-events-none">
              {lightbox.images[lightbox.index].endsWith('.mp4') ? (
                <video
                  src={lightbox.images[lightbox.index]}
                  className="w-full h-full object-contain drop-shadow-2xl pointer-events-auto"
                  controls
                  autoPlay
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={lightbox.images[lightbox.index]}
                  alt="Fullscreen"
                  className="w-full h-full object-contain drop-shadow-2xl pointer-events-auto"
                />
              )}
            </div>
          </div>
        )}

        {selectedRefugio && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <div
              className="absolute inset-0 bg-[#1C1F1A]/90 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedRefugio(null)}
            ></div>
            <div className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto bg-black/10 backdrop-blur-md border border-[#C8A96E] flex flex-col lg:flex-row">
              <button
                onClick={() => setSelectedRefugio(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center bg-[#1C1F1A] border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-black transition-colors"
              >
                <X className="h-5 w-5" strokeWidth={1} />
              </button>
              <div className="w-full lg:w-1/2 bg-transparent flex items-center justify-center border-r border-[#C8A96E]/20 min-w-0">
                <Slider
                  {...sliderSettings}
                  className="w-full aspect-[4/3] slider-container"
                >
                  {selectedRefugio.images.map((img, idx, array) => (
                    <div
                      key={idx}
                      className={`outline-none aspect-[4/3] overflow-hidden relative ${selectedRefugio.name === 'Cabaña El Ingenio' ? 'bg-black/40 flex items-center justify-center' : ''}`}
                    >
                      <img
                        src={img}
                        alt={`Imagen ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full transition-transform duration-700 hover:scale-105 cursor-zoom-in ${selectedRefugio.name === 'Cabaña El Ingenio' ? 'object-contain' : 'object-cover'}`}
                        onClick={() => setLightbox({ images: array as string[], index: idx })}
                      />
                      <HoverIndicator />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col">
                <h2
                  className={`${UI_CLASSES.heading} text-3xl sm:text-5xl text-[#C8A96E] mb-6`}
                >
                  {selectedRefugio.name}
                </h2>
                <div className="mb-8 flex flex-wrap gap-4 uppercase tracking-[0.1em] text-xs font-medium text-[#9A9690]">
                  <span>
                    CAPACIDAD: {selectedRefugio.capacity}
                  </span>
                  <span className="text-[#C8A96E]">
                    VALOR: DESDE {selectedRefugio.price}
                  </span>
                </div>
                <p className="text-[#9A9690] mb-12 leading-relaxed text-base">
                  {selectedRefugio.longDesc}
                </p>
                <div className="mb-12">
                  <h4 className="font-['DM_Sans',sans-serif] text-xs uppercase tracking-[0.1em] text-[#C8A96E] mb-6 border-b border-[#C8A96E]/30 pb-3">
                    Equipamiento
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {selectedRefugio.amenities.map(
                      (am, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[#9A9690] text-sm"
                        >
                          <div className="h-1.5 w-1.5 rounded-none bg-[#C8A96E] mt-2 shrink-0" />
                          <span>{am}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <div
              className="absolute inset-0 bg-[#1C1F1A]/90 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedService(null)}
            ></div>
            <div className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto bg-black/10 backdrop-blur-md border border-[#C8A96E] flex flex-col lg:flex-row">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center bg-[#1C1F1A] border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-black transition-colors"
              >
                <X className="h-5 w-5" strokeWidth={1} />
              </button>
              <div className="w-full lg:w-1/2 bg-transparent flex items-center justify-center border-r border-[#C8A96E]/20 min-w-0">
                <Slider
                  {...sliderSettings}
                  className="w-full aspect-[4/3] slider-container"
                >
                  {selectedService.images.map((img, idx, array) => (
                    <div
                      key={idx}
                      className="outline-none aspect-[4/3] overflow-hidden relative"
                    >
                      <img
                        src={img}
                        alt={`Servicio ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                        onClick={() => setLightbox({ images: array as string[], index: idx })}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <h2
                  className={`${UI_CLASSES.heading} text-3xl sm:text-5xl text-[#C8A96E] mb-6`}
                >
                  {selectedService.title}
                </h2>
                <p className="text-[#9A9690] mb-12 leading-relaxed text-base">
                  {selectedService.desc}
                </p>
                <div className="mt-auto pt-8 border-t border-[#C8A96E]/30">
                  <a
                    href={`https://wa.me/${phoneNumber}?text=Hola,%20me%20interesa%20más%20información%20sobre:%20${selectedService.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`${UI_CLASSES.buttonPrimary} w-full`}
                  >
                    <MessageCircle
                      className="h-4 w-4"
                      strokeWidth={1.5}
                    />{" "}
                    Consultar Disponibilidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedMerch && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <div
              className="absolute inset-0 bg-[#1C1F1A]/90 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedMerch(null)}
            ></div>
            <div className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto bg-black/10 backdrop-blur-md border border-[#C8A96E] flex flex-col lg:flex-row">
              <button
                onClick={() => setSelectedMerch(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center bg-[#1C1F1A] border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-black transition-colors"
              >
                <X className="h-5 w-5" strokeWidth={1} />
              </button>
              <div className="w-full lg:w-1/2 bg-transparent flex items-center justify-center border-r border-[#C8A96E]/20 min-w-0">
                {selectedMerch.images.length > 1 ? (
                  <Slider
                    {...sliderSettings}
                    className="w-full aspect-[4/3] slider-container"
                  >
                    {selectedMerch.images.map((img, idx, array) => (
                      <div
                        key={idx}
                        className="outline-none aspect-[4/3] overflow-hidden relative p-12 flex items-center justify-center"
                      >
                        <img
                          src={img}
                          alt={`${selectedMerch.name} ${idx + 1}`}
                          className="w-full h-full object-contain transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                          onClick={() =>
                            setLightbox({ images: array as string[], index: idx })
                          }
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="w-full aspect-[4/3] overflow-hidden relative p-12 flex items-center justify-center">
                    <img
                      src={selectedMerch.images[0]}
                      alt={selectedMerch.name}
                      className="w-full h-full object-contain transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                      onClick={() =>
                        setLightbox({ images: [selectedMerch.images[0]], index: 0 })
                      }
                    />
                  </div>
                )}
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col">
                <h2
                  className={`${UI_CLASSES.heading} text-3xl sm:text-5xl text-[#C8A96E] mb-6`}
                >
                  {selectedMerch.name}
                </h2>
                <div className="mb-8">
                  <span className="text-[#C8A96E] font-['DM_Sans',sans-serif] uppercase tracking-[0.1em] text-xs font-medium">
                    VALOR: {selectedMerch.price}
                  </span>
                </div>
                <p className="text-[#9A9690] mb-12 leading-relaxed text-base">
                  {selectedMerch.longDesc}
                </p>
                <div className="mt-auto pt-8 border-t border-[#C8A96E]/30">
                  <a
                    href={`https://wa.me/${phoneNumber}?text=Hola,%20me%20interesa%20comprar%20el%20souvenir:%20${selectedMerch.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`${UI_CLASSES.buttonPrimary} w-full`}
                  >
                    <MessageCircle
                      className="h-4 w-4"
                      strokeWidth={1.5}
                    />{" "}
                    Adquirir vía WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <header className="relative w-full min-h-screen flex flex-col border-b border-[#C8A96E]/20">
          <nav className="relative z-50 w-full px-6 py-8 border-b border-[#C8A96E]/20">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={logoImg}
                  alt="Cabañas El Ingenio Logo"
                  className="h-16 md:h-20 object-contain brightness-0 invert"
                />
                <span className={`${UI_CLASSES.heading} block text-xl sm:text-2xl md:text-3xl text-white`}>
                  Cabañas El Ingenio
                </span>
              </div>
              <ul className="hidden gap-10 text-xs font-medium text-[#F0EDE6] md:flex items-center uppercase tracking-[0.15em]">
                <li
                  className="cursor-pointer hover:text-[#C8A96E] transition-colors"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  Inicio
                </li>
                <li
                  className="cursor-pointer hover:text-[#C8A96E] transition-colors"
                  onClick={() =>
                    document
                      .getElementById("nosotros")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Nosotros
                </li>
                <li
                  className="cursor-pointer hover:text-[#C8A96E] transition-colors"
                  onClick={() =>
                    document
                      .getElementById("alojamientos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Alojamientos
                </li>
                <li
                  className="cursor-pointer hover:text-[#C8A96E] transition-colors"
                  onClick={() =>
                    document
                      .getElementById("experiencias")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Experiencias
                </li>
              </ul>
              <button
                className="text-[#C8A96E] md:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" strokeWidth={1} />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-[#1C1F1A]/95 backdrop-blur-xl z-[100] transition-transform duration-500 ease-in-out flex flex-col items-center justify-center ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
          >
            <button
              className="absolute top-8 right-6 text-[#C8A96E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-8 w-8" strokeWidth={1} />
            </button>
            <ul className="flex flex-col gap-10 text-center text-2xl font-['DM_Sans',sans-serif] tracking-[0.2em] text-[#F0EDE6] uppercase mt-10">
              <li
                className="hover:text-[#C8A96E] cursor-pointer transition-colors px-8 py-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Inicio
              </li>
              <li
                className="hover:text-[#C8A96E] cursor-pointer transition-colors px-8 py-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Nosotros
              </li>
              <li
                className="hover:text-[#C8A96E] cursor-pointer transition-colors px-8 py-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById("alojamientos")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Refugios
              </li>
              <li
                className="hover:text-[#C8A96E] cursor-pointer transition-colors px-8 py-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById("experiencias")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Experiencias
              </li>
            </ul>
          </div>

          <div className="absolute inset-0 z-0 bg-gradient-to-t from-transparent via-transparent to-[#1C1F1A]/50 pointer-events-none" />

          <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
            <div className="w-full px-6 lg:px-12 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-y-16 items-center py-12">
              <div className="lg:col-span-6 mb-12 lg:mb-0">
                <h1
                  className={`${UI_CLASSES.heading} text-5xl md:text-7xl lg:text-8xl text-[#C8A96E] mb-6 leading-none`}
                >
                  Tu refugio en
                  <br />
                  la Montaña
                </h1>
                <p className="text-lg md:text-xl text-[#9A9690] max-w-lg leading-relaxed">
                  Descubre la verdadera desconexión en el corazón
                  del Cajón del Maipo. Diseño, naturaleza y
                  confort absoluto.
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 flex justify-center lg:justify-end">
                <div className="w-full max-w-md bg-black/10 backdrop-blur-md border border-[#C8A96E]/50 p-10 md:p-12">
                  <div className="mb-10 text-center">
                    <h3 className="font-['DM_Sans',sans-serif] uppercase tracking-[0.2em] text-xs text-[#C8A96E] mb-6">
                      Reserva Rápida
                    </h3>
                    <div className="flex justify-center gap-3">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`h-[1px] w-8 transition-colors ${bookingStep >= step ? "bg-[#C8A96E]" : "bg-[#9A9690]/30"}`}
                        />
                      ))}
                    </div>
                  </div>

                  {bookingStep === 1 && (
                    <div className="animate-in fade-in duration-500">
                      <label className={UI_CLASSES.label}>
                        Selecciona tu Alojamiento
                      </label>
                      <div className="space-y-4 mb-10 mt-6">
                        {[
                          "Domo Marmolejo",
                          "Domo Estrellado",
                          "Cabaña El Ingenio",
                        ].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setAlojamiento(opt)}
                            className={`w-full text-left px-6 py-4 border transition-all text-sm uppercase tracking-widest ${alojamiento === opt ? "border-[#C8A96E] text-[#C8A96E]" : "border-[#9A9690]/30 text-[#9A9690] hover:border-[#C8A96E]/50"}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setBookingStep(2)}
                        className={`${UI_CLASSES.buttonOutline} w-full`}
                      >
                        Continuar{" "}
                        <ChevronRight
                          className="h-4 w-4"
                          strokeWidth={1}
                        />
                      </button>
                    </div>
                  )}

                  {bookingStep === 2 && (
                    <div className="animate-in fade-in duration-500">
                      <div className="space-y-8 mb-10 mt-6">
                        <div>
                          <label className={UI_CLASSES.label}>
                            Check-in
                          </label>
                          <input
                            type="date"
                            className={UI_CLASSES.input}
                            value={checkIn}
                            onChange={(e) =>
                              setCheckIn(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <label className={UI_CLASSES.label}>
                            Check-out
                          </label>
                          <input
                            type="date"
                            className={UI_CLASSES.input}
                            value={checkOut}
                            onChange={(e) =>
                              setCheckOut(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setBookingStep(1)}
                          className="border border-[#9A9690]/30 px-6 py-4 text-[#9A9690] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors"
                        >
                          <ChevronLeft
                            className="h-4 w-4"
                            strokeWidth={1}
                          />
                        </button>
                        <button
                          onClick={() => setBookingStep(3)}
                          className={`${UI_CLASSES.buttonOutline} flex-1`}
                        >
                          Continuar{" "}
                          <ChevronRight
                            className="h-4 w-4"
                            strokeWidth={1}
                          />
                        </button>
                      </div>
                    </div>
                  )}

                  {bookingStep === 3 && (
                    <div className="animate-in fade-in duration-500">
                      <div className="mb-10 mt-6">
                        <label className={UI_CLASSES.label}>
                          Huéspedes
                        </label>
                        <select
                          className={UI_CLASSES.input}
                          value={huespedes}
                          onChange={(e) =>
                            setHuespedes(e.target.value)
                          }
                        >
                          {[
                            "1 Persona",
                            "2 Personas",
                            "3 Personas",
                            "4 Personas",
                            "5 Personas",
                            "6 Personas",
                          ].map((o) => (
                            <option
                              key={o}
                              className="bg-[#1C1F1A] text-[#F0EDE6]"
                            >
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setBookingStep(2)}
                          className="border border-[#9A9690]/30 px-6 py-4 text-[#9A9690] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors"
                        >
                          <ChevronLeft
                            className="h-4 w-4"
                            strokeWidth={1}
                          />
                        </button>
                        <button
                          onClick={handleBookingSubmit}
                          className={`${UI_CLASSES.buttonPrimary} flex-1`}
                        >
                          <MessageCircle
                            className="h-4 w-4"
                            strokeWidth={1.5}
                          />{" "}
                          Consultar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="nosotros"
          className="mx-auto max-w-7xl px-6 py-32 lg:px-12 border-b border-[#C8A96E]/20"
        >
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2
                className={`${UI_CLASSES.heading} text-4xl md:text-6xl text-[#C8A96E] mb-10`}
              >
                Bienvenidos a <br />
                Cabañas el Ingenio
              </h2>
              <p className="mb-12 text-base leading-relaxed text-[#9A9690] max-w-lg">
                Descubre la verdadera desconexión en el corazón
                del Cajón del Maipo. Nuestras instalaciones
                están diseñadas para ofrecerte el equilibrio
                perfecto entre la naturaleza, el confort y la
                aventura.
              </p>
              <div className="mt-8 pl-6 border-l border-[#C8A96E]/50">
                <h3 className="mb-4 text-xs font-['DM_Sans',sans-serif] uppercase tracking-[0.2em] text-[#C8A96E]">
                  Nuestra Visión
                </h3>
                <p className="text-sm leading-relaxed text-[#9A9690] italic font-light">
                  "Nuestra visión es consolidarnos como el refugio definitivo para quienes buscan escapar del ruido y la rutina. Aspiramos a ser un santuario de relajación y privacidad absoluta en el corazón del Cajón del Maipo, donde cada detalle está diseñado para garantizar una desconexión total y un descanso profundo."
                </p>
              </div>
            </div>
            <div className="relative border border-[#C8A96E]/20 bg-transparent group/nosotros min-w-0">
              <Slider
                {...sliderSettings}
                dots={false}
                autoplay={false}
                className="w-full aspect-[4/3] slider-container"
              >
                {[
                  { type: 'video', src: video1 },
                  { type: 'video', src: video2 },
                  { type: 'image', src: nos1 },
                  { type: 'image', src: nos2 },
                  { type: 'image', src: nos3 },
                  { type: 'image', src: nos4 },
                  { type: 'image', src: nos5 },
                  { type: 'image', src: nos6 },
                  { type: 'image', src: nos7 },
                  { type: 'image', src: nos8 },
                  { type: 'image', src: nos9 },
                  { type: 'image', src: nos10 },
                  { type: 'image', src: nos11 },
                  { type: 'image', src: nos12 },
                  { type: 'image', src: nos13 },
                  { type: 'image', src: nos14 },
                  { type: 'image', src: nos15 },
                  { type: 'image', src: nos16 },
                  { type: 'image', src: nos17 },
                  { type: 'image', src: nos18 },
                  { type: 'image', src: nos19 },
                ].map((item, idx, array) => {
                  const imagesOnly = array.filter(i => i.type === 'image').map(i => i.src);

                  return (
                    <div
                      key={idx}
                      className="outline-none aspect-[4/3] overflow-hidden relative group bg-black/40 flex items-center justify-center"
                    >
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                          autoPlay
                          muted
                          loop
                          playsInline
                          onClick={() => {
                            const allSrcs = array.map(i => i.src);
                            setLightbox({ images: allSrcs as string[], index: idx })
                          }}
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={`Nosotros ${idx + 1}`}
                          className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                          onClick={() => {
                            const allSrcs = array.map(i => i.src);
                            setLightbox({ images: allSrcs as string[], index: idx })
                          }}
                        />
                      )}
                      <div className="pointer-events-none absolute inset-0 z-10" onClick={() => {
                        const allSrcs = array.map(i => i.src);
                        setLightbox({ images: allSrcs as string[], index: idx })
                      }}>
                        <HoverIndicator isVideo={item.type === 'video'} />
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </section>

        <section
          id="alojamientos"
          className="mx-auto max-w-7xl px-6 py-32 lg:px-12 border-b border-[#C8A96E]/20"
        >
          <div className="mb-20">
            <h2
              className={`${UI_CLASSES.heading} text-4xl md:text-6xl text-[#C8A96E] mb-6`}
            >
              Nuestros Refugios
            </h2>
            <p className="max-w-2xl text-[#9A9690] text-base">
              Contamos con domos panorámicos y cabañas
              totalmente equipadas, diseñados bajo una estética
              donde menos es más.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {ACCOMMODATIONS.map((acc) => (
              <div
                key={acc.id}
                className="group flex flex-col bg-black/10 backdrop-blur-md border border-[#C8A96E]/20 hover:border-[#C8A96E] transition-colors cursor-pointer"
                onClick={() => setSelectedRefugio(acc)}
              >
                <div className={`relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20 ${acc.name === 'Cabaña El Ingenio' ? 'bg-black/40 flex items-center justify-center' : ''}`}>
                  <img
                    src={acc.images[0]}
                    alt={acc.name}
                    className={`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105 ${acc.name === 'Cabaña El Ingenio' ? 'object-contain' : 'object-cover'}`}
                  />
                  <HoverIndicator />
                </div>
                <div className="flex flex-col p-8">
                  <div className="mb-4 text-[10px] font-['DM_Sans',sans-serif] uppercase tracking-[0.2em] text-[#C8A96E]">
                    {acc.capacity}
                  </div>
                  <h3
                    className={`${UI_CLASSES.heading} text-3xl text-[#F0EDE6] mb-6`}
                  >
                    {acc.name}
                  </h3>
                  <p className="text-sm text-[#9A9690] leading-relaxed mb-8 line-clamp-3">
                    {acc.shortDesc}
                  </p>
                  <div className="mt-auto border-t border-[#C8A96E]/20 pt-6">
                    <span className="text-[10px] font-['DM_Sans',sans-serif] uppercase tracking-[0.2em] text-[#F0EDE6]">
                      Desde {acc.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-32 lg:px-12 border-b border-[#C8A96E]/20">
          <div className="mb-20">
            <h2
              className={`${UI_CLASSES.heading} text-4xl md:text-6xl text-[#C8A96E] mb-6`}
            >
              Servicios & Gastronomía
            </h2>
            <p className="max-w-2xl text-[#9A9690] text-base">
              Complementa tu estadía con detalles que marcan la
              diferencia.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col bg-black/10 backdrop-blur-md border border-[#C8A96E]/20 hover:border-[#C8A96E] transition-colors cursor-pointer"
                onClick={() => setSelectedService(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <HoverIndicator />
                </div>
                <div className="p-8 text-center flex flex-col items-center">
                  <h3 className="mb-4 text-xs font-['DM_Sans',sans-serif] uppercase tracking-[0.15em] text-[#C8A96E]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#9A9690]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experiencias"
          className="mx-auto max-w-7xl px-6 py-32 lg:px-12 border-b border-[#C8A96E]/20 overflow-hidden"
        >
          <div className="mb-20 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2
                className={`${UI_CLASSES.heading} text-4xl md:text-6xl text-[#C8A96E] mb-6`}
              >
                Aventura & Expediciones
              </h2>
              <p className="text-base text-[#9A9690] leading-relaxed">
                Nuestros tours y trekking guiados en transporte
                4x4. No te preocupes por el equipamiento ni el
                destino específico, nosotros te llevamos a
                descubrir los rincones más impresionantes de la
                cordillera. Explora nuestra galería de
                expediciones.
              </p>
            </div>
            <button
              onClick={() => setShowRoutesModal(true)}
              className={`${UI_CLASSES.buttonOutline} shrink-0 z-10`}
            >
              Ver Rutas y Trekking
            </button>
          </div>

          <div className="mt-12 mb-10 text-center flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-['Cormorant_Garamond',serif] text-[#F0EDE6] italic tracking-wide">
              Nuestras Experiencias
            </h3>
            <div className="w-16 h-[1px] bg-[#C8A96E]/50 mt-4"></div>
          </div>

          <div className="relative -mx-4 lg:-mx-6 min-w-0">
            <Slider
              dots={false}
              infinite={true}
              speed={800}
              slidesToShow={windowWidth < 768 ? 1 : 2}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              arrows={true}
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}
            >
              {generalTourImages.map((img, idx, array) => (
                <div
                  key={idx}
                  className="px-4 outline-none block"
                >
                  <div
                    className="group relative w-full aspect-[16/9] overflow-hidden cursor-zoom-in"
                    onClick={() => setLightbox({ images: array as string[], index: idx })}
                  >
                    <img
                      src={img}
                      alt={`Expedición ${idx + 1}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <HoverIndicator />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section
          id="souvenirs"
          className="mx-auto max-w-7xl px-6 py-32 lg:px-12 border-b border-[#C8A96E]/20"
        >
          <div className="mb-20 text-center">
            <h2
              className={`${UI_CLASSES.heading} text-4xl md:text-6xl text-[#C8A96E] mb-6`}
            >
              Souvenirs Cajón del Maipo
            </h2>
            <p className="max-w-2xl mx-auto text-[#9A9690] text-base">
              Lleva un recuerdo físico de tu estadía en la
              montaña.
            </p>
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-10 md:px-16 lg:px-20 min-w-0">
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3}
              slidesToScroll={1}
              arrows={true}
              nextArrow={<SouvenirNextArrow />}
              prevArrow={<SouvenirPrevArrow />}
              className="souvenirs-slider"
            >
              {MERCH_ITEMS.map((item) => (
                <div key={item.id} className="px-4">
                  <div
                    className="group flex flex-col bg-transparent border border-[#C8A96E]/20 hover:border-[#C8A96E] transition-colors cursor-pointer"
                    onClick={() => setSelectedMerch(item)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20 p-8 flex items-center justify-center">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                      <HoverIndicator />
                    </div>
                    <div className="p-8 text-center">
                      <h3 className="mb-4 text-sm font-['DM_Sans',sans-serif] uppercase tracking-[0.15em] text-[#C8A96E]">
                        {item.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.15em] text-[#F0EDE6]">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setIsBoutiqueOpen(true)}
              className={UI_CLASSES.buttonOutline}
            >
              Ver toda la colección
            </button>
          </div>
        </section>

        <section className="px-6 py-32 lg:px-12 border-b border-[#C8A96E]/20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2
                className={`${UI_CLASSES.heading} text-4xl md:text-6xl text-[#C8A96E] mb-6`}
              >
                Lo que dicen nuestros huéspedes
              </h2>
              <p className="max-w-2xl mx-auto text-[#9A9690] text-base">
                Experiencias y recuerdos inolvidables compartidos por quienes ya nos visitaron.
              </p>
            </div>
            <Reviews />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-32 lg:px-12 border-b border-[#C8A96E]/20">
          <div className="mb-16 text-center">
            <h2
              className={`${UI_CLASSES.heading} text-4xl md:text-6xl text-[#C8A96E] mb-6`}
            >
              Ubicación
            </h2>
            <p className="max-w-2xl mx-auto text-[#9A9690] text-base">
              Encuéntranos en el corazón de la cordillera de los
              Andes.
            </p>
          </div>
          <div className="w-full h-[450px] bg-black/10 backdrop-blur-md border border-[#C8A96E]/20 p-4 lg:p-8">
            <iframe
              src="https://maps.google.com/maps?q=Caba%C3%B1a%20El%20Ingenio%20-%20Cam.%20Real,%20Parcela%209,%20El%20Ingenio,%20San%20Jos%C3%A9%20de%20Maipo,%20Regi%C3%B3n%20Metropolitana&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border border-[#C8A96E]/10"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación"
            ></iframe>
          </div>
        </section>

        <footer className="pt-16 pb-8 text-[#9A9690] bg-[#1C1F1A]/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-16 md:grid-cols-4 mb-16">
              <div className="md:col-span-2">
                <img
                  src={logoImg}
                  alt="Logo"
                  className="h-20 mb-8 object-contain brightness-0 invert opacity-90"
                />
                <p className="text-sm leading-relaxed max-w-sm text-[#9A9690]">
                  Cabañas El Ingenio es tu refugio de descanso
                  en el corazón de la cordillera. Conectamos
                  confort y naturaleza para crear experiencias
                  inolvidables.
                </p>
              </div>
              <div>
                <h4 className="text-[#C8A96E] font-['DM_Sans',sans-serif] text-xs uppercase tracking-[0.2em] mb-8">
                  Contacto
                </h4>
                <ul className="space-y-6 text-sm">
                  <li className="flex items-center gap-4">
                    <Phone
                      className="h-4 w-4 text-[#C8A96E]"
                      strokeWidth={1}
                    />{" "}
                    +56 9 9325 4071
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail
                      className="h-4 w-4 text-[#C8A96E]"
                      strokeWidth={1}
                    />{" "}
                    pgeorgelun@gmail.com
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin
                      className="h-4 w-4 text-[#C8A96E] mt-1 shrink-0"
                      strokeWidth={1}
                    />
                    <span>
                      Cabaña El Ingenio - Cam. Real, Parcela 9,<br />
                      El Ingenio, San José de Maipo, Región Metropolitana
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#C8A96E] font-['DM_Sans',sans-serif] text-xs uppercase tracking-[0.2em] mb-8">
                  Síguenos
                </h4>
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.instagram.com/cabana.elingenio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 text-sm hover:text-[#C8A96E] transition-colors group"
                  >
                    <div className="h-12 w-12 border border-[#C8A96E]/30 group-hover:border-[#C8A96E] flex items-center justify-center transition-colors">
                      <Instagram
                        className="h-4 w-4 text-[#C8A96E]"
                        strokeWidth={1}
                      />
                    </div>
                    <span className="hidden sm:inline">Instagram</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@cabanas.el.ingenio?_r=1&_t=ZS-98OfL9Mr2FJ"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 text-sm hover:text-[#C8A96E] transition-colors group"
                  >
                    <div className="h-12 w-12 border border-[#C8A96E]/30 group-hover:border-[#C8A96E] flex items-center justify-center transition-colors">
                      <TiktokIcon className="h-4 w-4 text-[#C8A96E]" />
                    </div>
                    <span className="hidden sm:inline">TikTok</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.15em] border-t border-[#C8A96E]/20 pt-8">
              <p>
                © 2026 CABAÑAS EL INGENIO. TODOS LOS DERECHOS
                RESERVADOS.
              </p>
              <p className="mt-4 md:mt-0 text-[#C8A96E]">
                DISEÑADO PARA LA DESCONEXIÓN TOTAL.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}