# Verificación de imágenes — 2026-04-23

## Imágenes con referencias rotas

| Archivo HTML | src referenciado | ¿Existe? |
|---|---|---|
| birds.html | ../Fotos/birds/Imagen de WhatsApp 2025-11-08 a las 13.47.07_0fd8d015.jpg | NO |
| birds.html | ../Fotos/birds/Imagen de WhatsApp 2025-11-08 a las 13.47.26_0f568663.jpg | NO |
| birds.html | ../Fotos/birds/Imagen de WhatsApp 2025-11-08 a las 13.47.35_8e4f04d8.jpg | NO |
| birds.html | ../Fotos/birds/Imagen de WhatsApp 2025-11-08 a las 13.47.46_ceb4e082.jpg | NO |
| birds.html | ../Fotos/birds/Imagen de WhatsApp 2025-11-08 a las 13.48.49_c3f0fc50.jpg | NO |
| birds.html | ../Fotos/birds/Imagen de WhatsApp 2025-11-08 a las 13.48.57_4d8dcefe.jpg | NO |
| birds.html | ../Fotos/birds/Imagen de WhatsApp 2025-11-08 a las 13.50.22_2470b7b9.jpg | NO |
| birds.html | ../Fotos/birds/Imagen de WhatsApp 2025-11-08 a las 13.50.38_467130c2.jpg | NO |
| birds.html | ../Fotos/birds/Imagen de WhatsApp 2025-11-08 a las 13.51.08_4e6846df.jpg | NO |

## Diagnóstico

La carpeta `Fotos/birds/` solo contiene `foto1.jpg` a `foto11.jpg`.
Las 9 referencias anteriores apuntan a archivos con nombre de WhatsApp que no están en disco.
Esto significa que esas fotos nunca fueron copiadas a la carpeta, o fueron renombradas/movidas.

## Acción requerida

Copiá las 9 fotos faltantes a `Fotos/birds/` con los nombres exactos indicados arriba,
o actualizá los src en `birds.html` si los archivos tienen otro nombre.

## Resto del portfolio

Todas las demás imágenes verificadas correctamente:
- cars.html: 23 imágenes OK
- landscapes.html: 24 imágenes OK (incluyendo foto19–24 de Wyoming 2026)
- sports.html: 45 imágenes OK
