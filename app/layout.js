
import './globals.css'
import {Providers} from "./providers";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <meta name="title" content='Bunkar Banaras - Elegance Woven in Every Thread'/>
    <meta name="description" content="Bunkar Banaras - Elegance Woven in Every Thread. Explore our collection of Georgette, Katan Silk, Tussar Silk, Kora Silk, Organza, Chiffon, Dupion Silk, and Tissue Sarees."/>
    <meta name="keywords" content="Banarasi sarees, Handcrafted sarees, Georgette sarees, Katan Silk sarees, Tussar Silk sarees, Kora Silk sarees, Organza sarees, Chiffon sarees, Dupion Silk sarees, Tissue sarees, Tradition, Elegance, Craftsmanship"/>

    {/*===============================================================================================*/}
    <link rel="icon" type="image/png" href="logo1.png" />
    
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/bootstrap/css/bootstrap.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="fonts/iconic/css/material-design-iconic-font.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="fonts/linearicons-v1.0.0/icon-font.min.css"
    />
    {/*===============================================================================================*/}
    <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/css-hamburgers/hamburgers.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/animsition/css/animsition.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/select2/select2.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/daterangepicker/daterangepicker.css"
    />
    {/*===============================================================================================*/}
    <link rel="stylesheet" type="text/css" href="vendor/slick/slick.css" />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/MagnificPopup/magnific-popup.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/perfect-scrollbar/perfect-scrollbar.css"
    />
    {/*===============================================================================================*/}
    
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" rel="stylesheet"/>
    </head>
      <body >
      <Providers>
      {children}

      </Providers>

      
      </body>

    </html>
  )
}
