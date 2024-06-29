# Scraping con Puppeteer

Este proyecto utiliza Puppeteer, una herramienta de automatización de navegador, para realizar scraping de datos desde el sitio web de PC Componentes. El script recoge información sobre productos en oferta, incluyendo sus nombres y enlaces, y la exporta a un archivo CSV para su análisis posterior

## 1. Instalación
Clona este repositorio en tu máquina local:

## https://github.com/delafter/scrapingPccomponent.git

## 2. Instala las dependencias necesarias:

`npm install`

Asegúrate de tener Node.js y npm instalados en tu sistema

# Uso

1.Ejecuta el script principal para iniciar el scraping:

`npm run start`

2.Este comando abrirá una instancia de Chrome controlada por Puppeteer, navegará hasta la página de PC Componentes, extraerá los datos de los productos en oferta y los guardará en un archivo CSV llamado scraperPccomponent.csv

Revisa la consola para ver los productos encontrados junto con sus enlaces correspondientes

## Créditos

Este proyecto fue desarrollado por `Manu García`

## Contacto
Si tienes preguntas o sugerencias, no dudes en contactarme por email a `delafter@gmail.com` o a través de mi perfil de GitHub